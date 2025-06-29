import { useEffect, useRef, useState, useCallback } from 'react';
import Supercluster from 'supercluster';
import type { ClusterFeature, PointFeature } from 'supercluster';
import type { Feature, Point } from 'geojson';

export type SimpleLocation = {
  lat?: number;
  lng?: number;
  address?: string;
  label?: string;
};

export interface LocationProperties {
  id: string;
  label?: string;
  address?: string;
}

export type LocationFeature = Feature<Point, LocationProperties>;

export type NaverMapProps = {
  locations: SimpleLocation[];
};

type LatLngBoundsLike = {
  getSW: () => { lat: () => number; lng: () => number };
  getNE: () => { lat: () => number; lng: () => number };
};

const NaverMap = ({ locations }: NaverMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<naver.maps.Map | null>(null);
  const markerMapRef = useRef<Map<string, naver.maps.Marker>>(new Map());
  const eventListenersRef = useRef<naver.maps.MapEventListener[]>([]);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [geocodedLocations, setGeocodedLocations] = useState<SimpleLocation[]>([]);
  const [geocodeLoading, setGeocodeLoading] = useState(false);
  const [clusters, setClusters] = useState<(ClusterFeature<LocationProperties> | PointFeature<LocationProperties>)[]>(
    [],
  );

  const superclusterRef = useRef<Supercluster<LocationProperties>>(
    new Supercluster({
      radius: 60,
      maxZoom: 20,
      minZoom: 0,
      extent: 256,
    }),
  );

  const isNaverMapsReady = useCallback((): boolean => {
    return !!(
      typeof window !== 'undefined' &&
      window.naver &&
      window.naver.maps &&
      window.naver.maps.Map &&
      window.naver.maps.LatLng &&
      window.naver.maps.Marker
    );
  }, []);

  const toGeoJSONFeatures = useCallback((locs: SimpleLocation[]): LocationFeature[] => {
    return locs
      .filter(
        (loc): loc is Required<Pick<SimpleLocation, 'lat' | 'lng'>> & SimpleLocation =>
          typeof loc.lat === 'number' && typeof loc.lng === 'number',
      )
      .map((loc, idx) => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [loc.lng!, loc.lat!],
        },
        properties: {
          id: `${loc.lat},${loc.lng},${idx}`,
          label: loc.label,
          address: loc.address,
        },
      }));
  }, []);

  const updateClusters = useCallback(() => {
    if (!mapInstance.current || !isNaverMapsReady()) {
      console.log('[NaverMap] updateClusters: 맵 인스턴스 또는 네이버맵 API가 준비되지 않음');
      return;
    }

    try {
      const map = mapInstance.current;
      const bounds = map.getBounds();
      const zoom = map.getZoom();

      const hasGetSW = typeof (bounds as Partial<LatLngBoundsLike>).getSW === 'function';
      const hasGetNE = typeof (bounds as Partial<LatLngBoundsLike>).getNE === 'function';

      if (hasGetSW && hasGetNE) {
        const sw = (bounds as LatLngBoundsLike).getSW();
        const ne = (bounds as LatLngBoundsLike).getNE();
        const bbox: [number, number, number, number] = [sw.lng(), sw.lat(), ne.lng(), ne.lat()];

        const newClusters = superclusterRef.current.getClusters(bbox, Math.floor(zoom)) as (
          | ClusterFeature<LocationProperties>
          | PointFeature<LocationProperties>
        )[];

        setClusters(newClusters);
      }
    } catch (error) {
      console.error('[NaverMap] updateClusters 오류:', error);
    }
  }, [isNaverMapsReady]);

  const debouncedUpdateClusters = useCallback(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(updateClusters, 200);
  }, [updateClusters]);

  useEffect(() => {
    if (!mapInstance.current || !isNaverMapsReady()) {
      return;
    }

    const map = mapInstance.current;

    eventListenersRef.current.forEach((listener) => {
      window.naver!.maps.Event.removeListener(listener);
    });
    eventListenersRef.current = [];

    const listeners = [
      window.naver!.maps.Event.addListener(map, 'zoom_changed', () => {
        debouncedUpdateClusters();
      }),
      window.naver!.maps.Event.addListener(map, 'dragend', () => {
        debouncedUpdateClusters();
      }),
      window.naver!.maps.Event.addListener(map, 'bounds_changed', () => {
        debouncedUpdateClusters();
      }),
    ];

    eventListenersRef.current = listeners;

    updateClusters();

    return () => {
      if (isNaverMapsReady()) {
        eventListenersRef.current.forEach((listener) => {
          window.naver!.maps.Event.removeListener(listener);
        });
      }
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [mapInstance.current, geocodedLocations, locations, debouncedUpdateClusters, updateClusters, isNaverMapsReady]);

  useEffect(() => {
    const allLocs = [
      ...locations.filter((loc) => loc.lat && loc.lng),
      ...geocodedLocations.filter((loc) => loc && loc.lat && loc.lng),
    ];

    const features = toGeoJSONFeatures(allLocs);

    superclusterRef.current.load(features);

    if (mapInstance.current && isNaverMapsReady()) {
      updateClusters();
    }
  }, [locations, geocodedLocations, toGeoJSONFeatures, updateClusters, isNaverMapsReady]);

  useEffect(() => {
    const needGeocode = locations.filter((loc) => (!loc.lat || !loc.lng) && loc.address);
    if (needGeocode.length === 0) {
      setGeocodedLocations([]);
      setGeocodeLoading(false);
      return;
    }

    setGeocodeLoading(true);
    let cancelled = false;

    const geocodeAll = async () => {
      let retry = 0;
      const poll = (resolve: () => void) => {
        if (
          isNaverMapsReady() &&
          window.naver!.maps.Service &&
          typeof window.naver!.maps.Service.geocode === 'function'
        ) {
          resolve();
        } else if (retry < 50) {
          retry++;
          setTimeout(() => poll(resolve), 100);
        } else {
          console.error('[NaverMap] Geocoding API 로드 실패');
          resolve();
        }
      };

      await new Promise<void>(poll);

      if (
        !isNaverMapsReady() ||
        !window.naver!.maps.Service ||
        typeof window.naver!.maps.Service.geocode !== 'function'
      ) {
        if (!cancelled) setGeocodeLoading(false);
        return;
      }

      const results = await Promise.all(
        needGeocode.map(
          (loc) =>
            new Promise<SimpleLocation | null>((resolve) => {
              window.naver!.maps.Service.geocode(
                { query: loc.address || '' },
                (status: naver.maps.Service.Status, response: naver.maps.Service.GeocodeResponse) => {
                  if (status !== window.naver!.maps.Service.Status.OK) {
                    resolve(null);
                    return;
                  }
                  const result = response.v2;
                  if (!result.addresses || result.addresses.length === 0) {
                    resolve(null);
                    return;
                  }
                  const { x, y } = result.addresses[0];
                  resolve({
                    lat: parseFloat(y),
                    lng: parseFloat(x),
                    address: loc.address,
                    label: loc.label,
                  });
                },
              );
            }),
        ),
      );

      if (!cancelled) {
        const validResults = results.filter((r): r is SimpleLocation => !!r);
        setGeocodedLocations(validResults);
        setGeocodeLoading(false);
      }
    };

    geocodeAll();
    return () => {
      cancelled = true;
    };
  }, [locations, isNaverMapsReady]);

  useEffect(() => {
    if (!mapInstance.current || !isNaverMapsReady()) return;

    const map = mapInstance.current;
    const markerMap = markerMapRef.current;
    const nextMarkerIds = new Set<string>();

    clusters.forEach((feature) => {
      const coords = feature.geometry.coordinates;
      const lat = coords[1];
      const lng = coords[0];
      let id = '';

      if ('cluster' in feature.properties && feature.properties.cluster) {
        id = `cluster-${feature.id}`;
        nextMarkerIds.add(id);

        const count = feature.properties.point_count || 0;
        const size = Math.min(30 + Math.sqrt(count) * 3, 60);
        const iconContent = `
          <div style="
            background: linear-gradient(135deg, #217A2B 0%, #93C03D 100%);
            color: white;
            border-radius: 50%;
            width: ${size}px;
            height: ${size}px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: ${Math.min(11 + Math.sqrt(count), 16)}px;
            border: 2px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            cursor: pointer;
            transition: transform 0.2s ease;
          "
          onmouseover="this.style.transform='scale(1.1)'"
          onmouseout="this.style.transform='scale(1)'"
          >
            ${count}
          </div>
        `;

        let marker = markerMap.get(id);
        if (!marker) {
          marker = new window.naver!.maps.Marker({
            position: new window.naver!.maps.LatLng(lat, lng),
            map,
            icon: {
              content: iconContent,
              size: new window.naver!.maps.Size(size, size),
              anchor: new window.naver!.maps.Point(size / 2, size / 2),
            },
            zIndex: 1000,
          });

          window.naver!.maps.Event.addListener(marker, 'click', () => {
            try {
              const expansionZoom = Math.min(superclusterRef.current.getClusterExpansionZoom(feature.id as number), 20);
              map.morph(new window.naver!.maps.LatLng(lat, lng), expansionZoom, {
                duration: 300,
                easing: 'easeOutCubic',
              });
            } catch (error) {
              console.error('[NaverMap] 클러스터 확장 오류:', error);
            }
          });

          markerMap.set(id, marker);
        } else {
          marker.setPosition(new window.naver!.maps.LatLng(lat, lng));
          marker.setMap(map);

          const currentIcon = marker.getIcon() as { content?: string } | undefined;
          if (!currentIcon || currentIcon.content !== iconContent) {
            marker.setIcon({
              content: iconContent,
              size: new window.naver!.maps.Size(size, size),
              anchor: new window.naver!.maps.Point(size / 2, size / 2),
            });
          }
        }
      } else {
        id = feature.properties.id;
        nextMarkerIds.add(id);

        let marker = markerMap.get(id);
        if (!marker) {
          marker = new window.naver!.maps.Marker({
            position: new window.naver!.maps.LatLng(lat, lng),
            map,
            title: feature.properties.label || '',
            icon: {
              content: `
                <div style="
                  width: 20px;
                  height: 20px;
                  background: #93C03D;
                  border-radius: 50%;
                  border: 2px solid white;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                  cursor: pointer;
                  transition: transform 0.2s ease;
                "
                onmouseover="this.style.transform='scale(1.2)'"
                onmouseout="this.style.transform='scale(1)'"
                ></div>
              `,
              size: new window.naver!.maps.Size(20, 20),
              anchor: new window.naver!.maps.Point(10, 10),
            },
            zIndex: 100,
          });

          const infoWindow = new window.naver!.maps.InfoWindow({
            content: `
              <div style="font-size:12px; line-height:1.4; padding:10px; max-width: 200px;">
                <h5 style="margin:0 0 8px 0; font-size:14px; font-weight:bold;">
                  ${feature.properties.label || '위치 정보'}
                </h5>
                ${
                  feature.properties.address
                    ? `<div style="color:#666;"><strong>주소:</strong> ${feature.properties.address}</div>`
                    : ''
                }
              </div>
            `,
            maxWidth: 300,
            backgroundColor: '#fff',
            borderColor: '#ddd',
            borderWidth: 1,
          });

          window.naver!.maps.Event.addListener(marker, 'click', () => {
            infoWindow.open(map, marker!);
          });

          markerMap.set(id, marker);
        } else {
          marker.setPosition(new window.naver!.maps.LatLng(lat, lng));
          marker.setMap(map);
        }
      }
    });

    for (const [id, marker] of markerMap.entries()) {
      if (!nextMarkerIds.has(id)) {
        marker.setMap(null);
        markerMap.delete(id);
      }
    }

    setTimeout(() => {
      if (mapInstance.current && isNaverMapsReady()) {
        window.naver!.maps.Event.trigger(mapInstance.current, 'resize');
      }
    }, 100);
  }, [clusters, isNaverMapsReady]);

  const createMap = useCallback(() => {
    if (!mapRef.current || mapInstance.current || !isNaverMapsReady()) {
      return;
    }

    const center = new window.naver!.maps.LatLng(37.4967, 127.063);
    mapInstance.current = new window.naver!.maps.Map(mapRef.current, {
      center,
      zoom: 12,
      zoomControl: true,
      zoomControlOptions: {
        style: window.naver!.maps.ZoomControlStyle.SMALL,
        position: window.naver!.maps.Position.TOP_RIGHT,
      },
    });
  }, [isNaverMapsReady]);

  useEffect(() => {
    if (mapInstance.current) return;

    const scriptId = 'naver-maps-script';

    if (isNaverMapsReady() && mapRef.current) {
      createMap();
      return;
    }

    if (document.getElementById(scriptId)) {
      const poll = () => {
        if (isNaverMapsReady() && mapRef.current && !mapInstance.current) {
          createMap();
        } else if (!mapInstance.current) {
          setTimeout(poll, 100);
        }
      };
      poll();
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${import.meta.env.VITE_NAVER_MAP_CLIENT_ID}&submodules=geocoder`;
    script.async = true;
    script.onload = () => {
      if (mapRef.current && !mapInstance.current) {
        setTimeout(() => {
          createMap();
        }, 100);
      }
    };
    script.onerror = () => {
      console.error('[NaverMap] 네이버맵 스크립트 로드 실패');
    };
    document.head.appendChild(script);
  }, [createMap, isNaverMapsReady]);

  useEffect(() => {
    return () => {
      if (isNaverMapsReady()) {
        eventListenersRef.current.forEach((listener) => {
          window.naver!.maps.Event.removeListener(listener);
        });
      }

      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      markerMapRef.current.forEach((marker) => {
        marker.setMap(null);
      });
      markerMapRef.current.clear();
    };
  }, [isNaverMapsReady]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}>
      {geocodeLoading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            fontSize: '14px',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px' }}>🗺️ 지도 데이터를 변환 중입니다...</div>
            <div style={{ fontSize: '12px', color: '#666' }}>잠시만 기다려 주세요</div>
          </div>
        </div>
      )}

      <div
        ref={mapRef}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '400px',
        }}
      />
    </div>
  );
};

export default NaverMap;
