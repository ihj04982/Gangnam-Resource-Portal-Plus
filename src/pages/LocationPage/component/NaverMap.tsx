import { useEffect, useRef, useState } from 'react';
import type { ClothingCollectionLocation } from '../../../models/locations';

const NAVER_MAPS_API_URL = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${import.meta.env.VITE_NAVER_MAP_CLIENT_ID}&submodules=geocoder`;

interface NaverMapProps {
  clothingCollection: ClothingCollectionLocation[];
  fluorescentLocations?: { address: string; label?: string }[];
  wasteBagLocations?: { address: string; label?: string }[];
  cigaretteButtLocations?: { address: string; label?: string }[];
}

interface GeocodedLocation {
  lat: number;
  lng: number;
  label?: string;
}

interface GeocodedLocation {
  lat: number;
  lng: number;
  label?: string;
}

interface GeocodedLocationWithType extends GeocodedLocation {
  type: 'fluorescent' | 'wasteBag' | 'cigaretteButt';
}

const NaverMap = ({
  clothingCollection,
  fluorescentLocations,
  wasteBagLocations,
  cigaretteButtLocations,
}: NaverMapProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<naver.maps.Map | null>(null);
  const [geocodedLocations, setGeocodedLocations] = useState<GeocodedLocationWithType[]>([]);
  const [geocodeLoading, setGeocodeLoading] = useState(false);

  useEffect(() => {
    const allLocations: Array<{ address: string; label?: string; type: 'fluorescent' | 'wasteBag' | 'cigaretteButt' }> =
      [
        ...(fluorescentLocations?.map((loc) => ({ ...loc, type: 'fluorescent' as const })) || []),
        ...(wasteBagLocations?.map((loc) => ({ ...loc, type: 'wasteBag' as const })) || []),
        ...(cigaretteButtLocations?.map((loc) => ({ ...loc, type: 'cigaretteButt' as const })) || []),
      ];

    if (allLocations.length === 0) {
      setGeocodedLocations([]);
      setGeocodeLoading(false);
      return;
    }

    setGeocodeLoading(true);
    let cancelled = false;

    const geocodeAll = async () => {
      let retry = 0;
      const poll = (resolve: () => void) => {
        if (window.naver?.maps?.Service?.geocode && typeof window.naver.maps.Service.geocode === 'function') {
          resolve();
        } else if (retry < 50) {
          retry++;
          setTimeout(() => poll(resolve), 100);
        } else {
          console.error('window.naver.maps.Service.geocode not available after 5s');
          resolve();
        }
      };
      await new Promise<void>(poll);

      if (!window.naver?.maps?.Service?.geocode) {
        setGeocodeLoading(false);
        return;
      }

      const results = await Promise.all(
        allLocations.map(
          (loc) =>
            new Promise<GeocodedLocationWithType | null>((resolve) => {
              window.naver.maps.Service.geocode({ query: loc.address }, (status, response) => {
                if (status !== window.naver.maps.Service.Status.OK) {
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
                  label: loc.label,
                  type: loc.type,
                });
              });
            }),
        ),
      );

      if (!cancelled) {
        const validResults = results.filter((result): result is GeocodedLocationWithType => result !== null);
        setGeocodedLocations(validResults);
        setGeocodeLoading(false);
      }
    };

    geocodeAll();
    return () => {
      cancelled = true;
    };
  }, [fluorescentLocations, wasteBagLocations, cigaretteButtLocations]);

  useEffect(() => {
    const scriptId = 'naver-maps-script';

    function createMap() {
      if (!window.naver?.maps || !mapRef.current) return;
      if (mapInstance.current) return;

      const center: naver.maps.LatLng = new window.naver.maps.LatLng(37.4967, 127.063);

      mapInstance.current = new window.naver.maps.Map(mapRef.current, {
        center,
        zoom: 15,
        zoomControl: true,
        zoomControlOptions: {
          style: window.naver.maps.ZoomControlStyle.SMALL,
          position: window.naver.maps.Position.TOP_RIGHT,
        },
      });

      setTimeout(() => {
        renderMarkers();
      }, 100);
    }

    function renderMarkers() {
      if (!mapInstance.current) return;

      let openInfoWindow: naver.maps.InfoWindow | null = null;

      clothingCollection.forEach((location) => {
        const lat = parseFloat(location.위도);
        const lng = parseFloat(location.경도);

        if (!isNaN(lat) && !isNaN(lng)) {
          const position: naver.maps.LatLng = new window.naver.maps.LatLng(lat, lng);

          const marker: naver.maps.Marker = new window.naver.maps.Marker({
            position,
            map: mapInstance.current!,
            title: location['도로명 주소'] || location.지번주소,
          });

          const contentString = [
            '<div class="iw_inner" style="font-size:12px; line-height:1.4; padding:10px;">',
            `   <h5 style="margin:0 0 8px 0; font-size:14px; font-weight:bold;">${location['도로명 주소'] || location.지번주소}</h5>`,
            `   <div style="margin:0;">`,
            `      <strong>도로명 주소:</strong> ${location['도로명 주소'] || 'N/A'}<br />`,
            `      <strong>지번주소:</strong> ${location.지번주소 || 'N/A'}`,
            `   </div>`,
            '</div>',
          ].join('');

          const infoWindow: naver.maps.InfoWindow = new window.naver.maps.InfoWindow({
            content: contentString,
            maxWidth: 300,
            backgroundColor: '#fff',
            borderColor: '#ccc',
            borderWidth: 1,
          });

          window.naver.maps.Event.addListener(marker, 'click', () => {
            if (openInfoWindow) {
              openInfoWindow.close();
            }
            infoWindow.open(mapInstance.current!, marker);
            openInfoWindow = infoWindow;
          });
        }
      });

      const fluorescentMarkers = geocodedLocations.filter((loc) => loc.type === 'fluorescent');
      const wasteBagMarkers = geocodedLocations.filter((loc) => loc.type === 'wasteBag');
      const cigaretteButtMarkers = geocodedLocations.filter((loc) => loc.type === 'cigaretteButt');

      fluorescentMarkers.forEach((loc) => {
        const position: naver.maps.LatLng = new window.naver.maps.LatLng(loc.lat, loc.lng);

        const marker: naver.maps.Marker = new window.naver.maps.Marker({
          position,
          map: mapInstance.current!,
          title: loc.label || '',
          icon: {
            content:
              '<div style="background: #FFD700; border-radius: 50%; width: 12px; height: 12px; border: 2px solid white;"></div>',
            anchor: new window.naver.maps.Point(8, 8),
          },
        });

        const contentString = [
          '<div class="iw_inner" style="font-size:12px; line-height:1.4; padding:10px;">',
          `   <h5 style="margin:0 0 8px 0; font-size:14px; font-weight:bold; color:#B8860B;">🔋 형광등 배터리</h5>`,
          `   <div style="margin:0;">`,
          `      <strong>위치:</strong> ${loc.label || 'N/A'}<br />`,
          `      <strong>좌표:</strong> ${loc.lat.toFixed(6)}, ${loc.lng.toFixed(6)}`,
          `   </div>`,
          '</div>',
        ].join('');

        const infoWindow: naver.maps.InfoWindow = new window.naver.maps.InfoWindow({
          content: contentString,
          maxWidth: 300,
          backgroundColor: '#fff',
          borderColor: '#FFD700',
          borderWidth: 2,
        });

        window.naver.maps.Event.addListener(marker, 'click', () => {
          if (openInfoWindow) {
            openInfoWindow.close();
          }
          infoWindow.open(mapInstance.current!, marker);
          openInfoWindow = infoWindow;
        });
      });

      wasteBagMarkers.forEach((loc) => {
        const position: naver.maps.LatLng = new window.naver.maps.LatLng(loc.lat, loc.lng);

        const marker: naver.maps.Marker = new window.naver.maps.Marker({
          position,
          map: mapInstance.current!,
          title: loc.label || '',
          icon: {
            content:
              '<div style="background: #32CD32; border-radius: 50%; width: 12px; height: 12px; border: 2px solid white;"></div>',
            anchor: new window.naver.maps.Point(8, 8),
          },
        });

        const contentString = [
          '<div class="iw_inner" style="font-size:12px; line-height:1.4; padding:10px;">',
          `   <h5 style="margin:0 0 8px 0; font-size:14px; font-weight:bold; color:#228B22;">🗑️ 폐기물 봉투</h5>`,
          `   <div style="margin:0;">`,
          `      <strong>판매처:</strong> ${loc.label || 'N/A'}<br />`,
          `      <strong>좌표:</strong> ${loc.lat.toFixed(6)}, ${loc.lng.toFixed(6)}`,
          `   </div>`,
          '</div>',
        ].join('');

        const infoWindow: naver.maps.InfoWindow = new window.naver.maps.InfoWindow({
          content: contentString,
          maxWidth: 300,
          backgroundColor: '#fff',
          borderColor: '#32CD32',
          borderWidth: 2,
        });

        window.naver.maps.Event.addListener(marker, 'click', () => {
          if (openInfoWindow) {
            openInfoWindow.close();
          }
          infoWindow.open(mapInstance.current!, marker);
          openInfoWindow = infoWindow;
        });
      });

      cigaretteButtMarkers.forEach((loc) => {
        const position: naver.maps.LatLng = new window.naver.maps.LatLng(loc.lat, loc.lng);

        const marker: naver.maps.Marker = new window.naver.maps.Marker({
          position,
          map: mapInstance.current!,
          title: loc.label || '',
          icon: {
            content:
              '<div style="background: #FF6347; border-radius: 50%; width: 12px; height: 12px; border: 2px solid white;"></div>',
            anchor: new window.naver.maps.Point(8, 8),
          },
        });

        const contentString = [
          '<div class="iw_inner" style="font-size:12px; line-height:1.4; padding:10px;">',
          `   <h5 style="margin:0 0 8px 0; font-size:14px; font-weight:bold; color:#B22222;">🚬 담배꽁초</h5>`,
          `   <div style="margin:0;">`,
          `      <strong>설치주소:</strong> ${loc.label || 'N/A'}<br />`,
          `      <strong>좌표:</strong> ${loc.lat.toFixed(6)}, ${loc.lng.toFixed(6)}`,
          `   </div>`,
          '</div>',
        ].join('');

        const infoWindow: naver.maps.InfoWindow = new window.naver.maps.InfoWindow({
          content: contentString,
          maxWidth: 300,
          backgroundColor: '#fff',
          borderColor: '#FF6347',
          borderWidth: 2,
        });

        window.naver.maps.Event.addListener(marker, 'click', () => {
          if (openInfoWindow) {
            openInfoWindow.close();
          }
          infoWindow.open(mapInstance.current!, marker);
          openInfoWindow = infoWindow;
        });
      });
    }

    if (window.naver?.maps) {
      createMap();
      return;
    }

    if (document.getElementById(scriptId)) {
      let retry = 0;
      const poll = () => {
        if (window.naver?.maps) {
          createMap();
        } else if (retry < 50) {
          retry++;
          setTimeout(poll, 100);
        } else {
          console.error('window.naver/maps not available after 5s');
        }
      };
      poll();
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = NAVER_MAPS_API_URL;
    script.async = true;
    script.onload = () => {
      let retry = 0;
      const poll = () => {
        if (window.naver?.maps) {
          createMap();
        } else if (retry < 50) {
          retry++;
          setTimeout(poll, 100);
        } else {
          console.error('window.naver/maps not available after 5s');
        }
      };
      poll();
    };
    script.onerror = () => {
      console.error('Failed to load Naver Maps script');
    };
    document.head.appendChild(script);
  }, [clothingCollection, geocodedLocations]);

  if (geocodeLoading) return <div>지도 데이터를 변환 중입니다...</div>;

  return (
    <div style={{ width: '100%', height: '400px', position: 'relative' }}>
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
