/* global kakao */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { changeLat, changeLong } from '../../store/Location';
import { Wrapper, MapContainer } from './Map.styles';

const { kakao } = window;

function Map() {
  const dispatch = useDispatch();
  useEffect(() => {
    // 지도
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(
        37.52197524055062,
        127.16017523675508,
      ),
      level: 8,
    };
    const map = new window.kakao.maps.Map(container, options);
    console.log('loading kakaomap');

    // 현 위치 확인 및 해당 좌표로 마커 생성
    let lat = 37.4812845080678;
    let lon = 126.952713197762;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude; // 위도
        lon = position.coords.longitude; // 경도
        /* eslint-disable */
        let marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(lat, lon),
        });
        /* eslint-enable */
        marker.setMap(map);
        map.setCenter(new window.kakao.maps.LatLng(lat, lon));
        // dispatch(changeLat(lat));
        // dispatch(changeLong(lon));
        console.log('현재 위치:', lat, lon);
      });
    } else {
      /* eslint-disable */
      let marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(lat, lon),
      });
      /* eslint-enable */
      marker.setMap(map);
      map.setCenter(new window.kakao.maps.LatLng(lat, lon));
      dispatch(changeLat(lat));
      dispatch(changeLong(lon));
      console.log('기본 위치:', lat, lon);
    }
  }, []);

  return (
    <>
      <Wrapper>
        <div className={cn('Map')}>
          <MapContainer id="map">내 동네 설정</MapContainer>
        </div>
      </Wrapper>
    </>
  );
}

export default Map;
