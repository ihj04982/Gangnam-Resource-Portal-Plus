import { useEffect, useRef, useState, useCallback } from 'react';

export type SimpleLocation = {
  lat?: number;
  lng?: number;
  address?: string;
  label?: string;
};

export type NaverMapProps = {
  locations: SimpleLocation[];
};

const NaverMap = ({ locations }: NaverMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<naver.maps.Map | null>(null);
  const markersRef = useRef<naver.maps.Marker[]>([]);
  const [geocodedLocations, setGeocodedLocations] = useState<SimpleLocation[]>([]);
  const [geocodeLoading, setGeocodeLoading] = useState(false);

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
        if (window.naver?.maps?.Service?.geocode && typeof window.naver.maps.Service.geocode === 'function') {
          resolve();
        } else if (retry < 50) {
          retry++;
          setTimeout(() => poll(resolve), 100);
        } else {
          resolve();
        }
      };

      await new Promise<void>(poll);

      if (!window.naver?.maps?.Service?.geocode) {
        if (!cancelled) {
          setGeocodeLoading(false);
        }
        return;
      }

      const results = await Promise.all(
        needGeocode.map(
          (loc) =>
            new Promise<SimpleLocation | null>((resolve) => {
              window.naver.maps.Service.geocode(
                { query: typeof loc.address === 'string' ? loc.address : '' },
                (status, response) => {
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
  }, [locations]);

  // 마커 렌더링 함수
  const renderMarkers = useCallback(() => {
    if (!mapInstance.current) return;

    // 기존 마커 제거
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];

    // 모든 유효한 위치 수집
    const allLocs = [
      ...locations.filter((loc) => loc.lat && loc.lng),
      ...geocodedLocations.filter((loc) => loc && loc.lat && loc.lng),
    ];

    // 마커 생성
    allLocs.forEach((loc, idx) => {
      try {
        const position = new window.naver.maps.LatLng(loc.lat!, loc.lng!);
        const marker = new window.naver.maps.Marker({
          position,
          map: mapInstance.current!,
          title: loc.label || '',
        });
        markersRef.current.push(marker);

        const contentString = [
          '<div class="iw_inner" style="font-size:12px; line-height:1.4; padding:10px;">',
          `   <h5 style="margin:0 0 8px 0; font-size:14px; font-weight:bold;">${loc.label || ''}</h5>`,
          `   <div style="margin:0;">`,
          loc.address ? `<strong>주소:</strong> ${loc.address}<br />` : '',
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
          infoWindow.open(mapInstance.current!, marker);
        });
      } catch (e) {
        console.error('[NaverMap] 마커 생성 에러', idx, loc, e);
      }
    });

    // 지도 중심점 설정 (마커가 있을 때만)
    if (allLocs.length > 0) {
      if (allLocs.length === 1) {
        // 마커가 하나면 해당 위치로 중심 이동
        mapInstance.current.setCenter(new window.naver.maps.LatLng(allLocs[0].lat!, allLocs[0].lng!));
        mapInstance.current.setZoom(15);
      } else {
        // 모든 마커의 중심점 계산
        const centerLat = allLocs.reduce((sum, loc) => sum + loc.lat!, 0) / allLocs.length;
        const centerLng = allLocs.reduce((sum, loc) => sum + loc.lng!, 0) / allLocs.length;

        // 최대/최소 좌표로 범위 계산
        const latitudes = allLocs.map((loc) => loc.lat!);
        const longitudes = allLocs.map((loc) => loc.lng!);
        const maxLat = Math.max(...latitudes);
        const minLat = Math.min(...latitudes);
        const maxLng = Math.max(...longitudes);
        const minLng = Math.min(...longitudes);

        // 범위에 따른 적절한 줌 레벨 계산
        const latDiff = maxLat - minLat;
        const lngDiff = maxLng - minLng;
        const maxDiff = Math.max(latDiff, lngDiff);

        let zoomLevel = 15;
        if (maxDiff > 0.1) zoomLevel = 10;
        else if (maxDiff > 0.05) zoomLevel = 11;
        else if (maxDiff > 0.02) zoomLevel = 12;
        else if (maxDiff > 0.01) zoomLevel = 13;
        else if (maxDiff > 0.005) zoomLevel = 14;

        mapInstance.current.setCenter(new window.naver.maps.LatLng(centerLat, centerLng));
        mapInstance.current.setZoom(zoomLevel);
      }
    } else {
      // 마커가 없으면 기본 위치
      mapInstance.current.setCenter(new window.naver.maps.LatLng(37.4967, 127.063));
      mapInstance.current.setZoom(15);
    }

    // 지도 리사이즈 트리거
    setTimeout(() => {
      if (mapInstance.current) {
        window.naver.maps.Event.trigger(mapInstance.current, 'resize');
      }
    }, 100);
  }, [locations, geocodedLocations]);

  // 지도 생성 (한 번만 실행되도록)
  const createMap = useCallback(() => {
    if (!mapRef.current || mapInstance.current) return;

    const center = new window.naver.maps.LatLng(37.4967, 127.063);
    mapInstance.current = new window.naver.maps.Map(mapRef.current, {
      center,
      zoom: 15,
      zoomControl: true,
      zoomControlOptions: {
        style: window.naver.maps.ZoomControlStyle.SMALL,
        position: window.naver.maps.Position.TOP_RIGHT,
      },
    });
  }, []);

  // 네이버맵 스크립트 로딩 및 지도 초기화 (최초 한 번만)
  useEffect(() => {
    // 이미 맵이 생성되었다면 실행하지 않음
    if (mapInstance.current) {
      return;
    }

    const scriptId = 'naver-maps-script';

    if (window.naver?.maps && mapRef.current) {
      createMap();
      return;
    }

    if (document.getElementById(scriptId)) {
      const poll = () => {
        if (window.naver?.maps && mapRef.current && !mapInstance.current) {
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
        createMap();
      }
    };
    document.head.appendChild(script);
  }, []);

  // 마커 렌더링 (지도가 준비되고 데이터가 변경될 때)
  useEffect(() => {
    if (mapInstance.current) {
      renderMarkers();
    }
  }, [renderMarkers]);

  // 로딩 중일 때는 로딩 메시지만 표시 (지도 div는 유지)
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
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            fontSize: '14px',
          }}
        >
          지도 데이터를 변환 중입니다...
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
