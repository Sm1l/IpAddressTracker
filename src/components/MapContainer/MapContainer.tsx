import React, { useEffect, useState } from "react";

import styles from "./MapContainer.module.scss";
import { YMap } from "components/YMap";
import { IIpData } from "types";

interface MapContainerProps {
  ipData: IIpData | null;
}

const MapContainer: React.FC<MapContainerProps> = ({ ipData }) => {
  //!как лучше обработать начальное значение
  const [lat, setLat] = useState<number>(55.7522);
  const [lng, setLng] = useState<number>(37.6156);

  useEffect(() => {
    if (ipData) {
      setLat(ipData?.location?.lat);
      setLng(ipData?.location?.lng);
    }
  }, [ipData]);

  return (
    <div className={styles.mapContainer}>
      <YMap lat={lat} lng={lng} />
    </div>
  );
};

export { MapContainer };
