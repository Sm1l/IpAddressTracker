import React from "react";

import styles from "./InfoItem.module.scss";

interface InfoItemProps {
  label: string;
  info: string;
  border?: boolean;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, info, border }) => {
  return (
    <div className={styles.infoItem}>
      <h2 className={styles.label}>{label}</h2>
      <p className={styles.info}>{info}</p>
      {border && <span className={styles.border}></span>}
    </div>
  );
};

export { InfoItem };
