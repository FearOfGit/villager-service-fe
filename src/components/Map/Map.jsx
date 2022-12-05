/* global kakao */
import React, { useEffect } from "react";
import cn from "classnames";
import { MapContainer } from "./Map.styles";

const { kakao } = window;

function Map() {
  useEffect(() => {
    const container = document.getElementById("map");

    const options = {
      center: new window.kakao.maps.LatLng(35.85133, 127.734086),
      level: 13,
    };

    const map = new window.kakao.maps.Map(container, options);

    console.log("loading kakaomap");
  }, []);

  return (
    <div className={cn("Map")}>
      <MapContainer id="map">
        안녕
      </MapContainer>
    </div>
  );
}

export default Map;