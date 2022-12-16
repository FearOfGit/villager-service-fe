import React, { useEffect } from 'react';

function Map({ lat, lng }) {
  useEffect(() => {
    const { kakao } = window;
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // 클러스터
    const clusterer = new kakao.maps.MarkerClusterer({
      map,
    });
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(lat, lng),
    });
    clusterer.addMarker(marker);
  }, []);
  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '200px',
        marginTop: '0.5rem',
        border: '1px solid black',
      }}
    />
  );
}

export default Map;
