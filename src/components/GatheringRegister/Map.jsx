import React, { useEffect } from 'react';
import { MapContainer } from './Map.style';

function init({ currentLat, currentLng, setFieldValue }) {
  // 지도 생성하기
  const { kakao } = window;
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(currentLat, currentLng),
    draggable: true,
    level: 4,
  };
  const map = new kakao.maps.Map(container, options);

  // 그리기
  const drawOptions = {
    map,
    drawingMode: [kakao.maps.drawing.OverlayType.MARKER],
    markerOptions: {
      draggable: true,
      removable: true,
    },
  };
  const manager = new kakao.maps.drawing.DrawingManager(drawOptions);
  const geocoder = new kakao.maps.services.Geocoder();
  manager.select(kakao.maps.drawing.OverlayType.MARKER);

  manager.addListener('drawend', (data) => {
    const positionLat = data.coords.toLatLng().getLat(); // 위도
    const positionLng = data.coords.toLatLng().getLng(); // 경도

    setFieldValue('latitude', positionLat, true);
    setFieldValue('longitude', positionLng, true);

    geocoder.coord2Address(positionLng, positionLat, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setFieldValue('place_text', result[0].address.address_name, true);
      }
    });
  });
  manager.addListener('remove', () => {
    manager.select(kakao.maps.drawing.OverlayType.MARKER);
    setFieldValue('place_text', '', true);
  });
}

function Map({ isMap, setFieldValue }) {
  useEffect(() => {
    const { navigator } = window;
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude: currentLat, longitude: currentLng } = pos.coords;
      init({ currentLat, currentLng, setFieldValue });
    });
  }, [isMap]);

  return <MapContainer isMap={isMap} id="map" />;
}

export default Map;
