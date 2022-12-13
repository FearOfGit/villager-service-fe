/* eslint-disable object-shorthand */
/* eslint-disable no-new */
/* eslint-disable no-useless-return */

import { useEffect } from 'react';

function getLocation({ value, setPlace, latitude, longitude }) {
  const container = document.getElementById('map');
  const { kakao } = window;

  const options = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 4,
  };

  const map = new kakao.maps.Map(container, options);

  const drawOptions = {
    map: map,
    drawingMode: [kakao.maps.drawing.OverlayType.MARKER],
    guideTooltip: ['draw', 'drag', 'edit'],
    markerOptions: {
      draggable: true,
      removable: true,
    },
  };

  const manager = new kakao.maps.drawing.DrawingManager(drawOptions);
  const geocoder = new kakao.maps.services.Geocoder();

  manager.addListener('drawend', (data) => {
    const lat = data.coords.toLatLng().getLat(); // 위도
    const lng = data.coords.toLatLng().getLng(); // 경도
    // console.log(lat, lng);

    geocoder.coord2Address(lng, lat, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setPlace(result[0].address.address_name);
      }
    });
  });
  manager.addListener('remove', () => {
    manager.select(kakao.maps.drawing.OverlayType.MARKER);
    setPlace('');
  });

  manager.select(kakao.maps.drawing.OverlayType.MARKER);
}

function Map({ value, setPlace }) {
  useEffect(() => {
    const { navigator } = window;

    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      getLocation({ value, setPlace, latitude, longitude });
    });
  }, []);

  return (
    <div
      id="map"
      style={{ width: '100%', height: '400px', marginTop: '10px' }}
    />
  );
}

export default Map;
