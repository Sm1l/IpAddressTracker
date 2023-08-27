import React, { useState } from "react";

import styles from "./MainContainer.module.scss";
import { InputContainer } from "components/InputContainer";
import { MapContainer } from "components/MapContainer";
import { IIpData } from "types";

interface MainContainerProps {}

const MainContainer: React.FC<MainContainerProps> = () => {
  const [ipData, setIpData] = useState<IIpData | null>(null);
  return (
    <main className={styles.mainContainer}>
      <InputContainer ipData={ipData} setIpData={setIpData} />
      <MapContainer ipData={ipData} />
    </main>
  );
};

export { MainContainer };
