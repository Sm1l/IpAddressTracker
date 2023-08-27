import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import styles from "./YMap.module.scss";
import iconLocation from "images/icon-location.svg";

interface YMapProps {
  lat: number;
  lng: number;
}

const YMap: React.FC<YMapProps> = ({ lat, lng }) => {
  const key: string | undefined = process.env.REACT_APP_IP_YANDEX_MAPS_KEY;

  return (
    <div className={styles.ymap}>
      <YMaps query={{ apikey: key }}>
        <Map
          state={{ center: [lat, lng], zoom: 12, controls: ["zoomControl"] }}
          modules={["control.ZoomControl"]}
          width={"100%"}
          height={"100%"}
        >
          <Placemark
            key={1}
            geometry={[lat, lng]}
            options={{
              iconLayout: "default#image",
              iconImageSize: [40, 50],
              iconImageHref: iconLocation,
              // draggable: true,
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export { YMap };
