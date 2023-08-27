import React from "react";

import styles from "./InfoContainer.module.scss";
import { InfoItem } from "components/InfoItem";
import { IIpData } from "types";

interface InfoContainerProps {
  data: IIpData | null;
}

const InfoContainer: React.FC<InfoContainerProps> = ({ data }) => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.container}>
        <InfoItem label="ip address" info={data ? data?.ip : "- -"} border={true} />
        <InfoItem
          label="location"
          info={data ? `${data?.location?.city}, ${data?.location?.region}, ${data?.location?.country}` : "- -"}
          border={true}
        />
        <InfoItem label="timezone" info={data ? `UTC ${data?.location?.timezone}` : "- -"} border={true} />
        <InfoItem label="isp" info={data ? data?.isp : "- -"} />
      </div>
    </div>
  );
};

export { InfoContainer };
