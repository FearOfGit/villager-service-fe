/* global kakao */
import React, { useEffect } from "react";
import cn from "classnames";
import { Wrapper, MapContainer, } from "./Map.styles";

const { kakao } = window;

function Map() {
  useEffect(() => {
    const container = document.getElementById("map");

    const options = {
      center: new window.kakao.maps.LatLng(37.52197524055062, 127.16017523675508),
      level: 8,
    };

    // 지도
    const map = new window.kakao.maps.Map(container, options);

    // 지도 로딩 시
    console.log("loading kakaomap");

    // 마커
    /* eslint-disable */
    let markerPosition = new window.kakao.maps.LatLng(37.52197524055062, 127.16017523675508);

    // 마커 생성
    let marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    /* eslint-enable */

    // 마커 지도에 표시
    marker.setMap(map);

  }, []);

  return (
    <>
      <Wrapper>
        <div className={cn("Map")}>
          <MapContainer id="map">
            내 동네 설정
          </MapContainer>
        </div>
      </Wrapper>
    </>
  );
}

export default Map;