import React, { useEffect, useState } from "react";

import styles from "./InputContainer.module.scss";
import { useForm } from "react-hook-form";
import { fetchIp, myIP } from "helpers/fetchIp";
import { InfoContainer } from "components/InfoContainer";
import { IIpData } from "types";

interface InputContainerProps {
  ipData: IIpData | null;
  setIpData: React.Dispatch<React.SetStateAction<IIpData | null>>;
}
interface IFormValues {
  ip: string;
}

const InputContainer: React.FC<InputContainerProps> = ({ ipData, setIpData }) => {
  const [ip, setIp] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IFormValues>({ mode: "onBlur" });

  const handleButtonSubmit = handleSubmit((data) => {
    setIp(data.ip);
    reset();
  });

  useEffect(() => {
    if (ip === null) {
      myIP().then((data) => setIp(data));
    }
  }, []);

  useEffect(() => {
    if (ip != null) {
      fetchIp(ip).then((data) => setIpData(data));
    }
  }, [ip]);

  return (
    <div className={styles.inputContainer}>
      <h1 className={styles.title}>IP Address Tracker</h1>
      <form className={styles.form} onSubmit={handleButtonSubmit}>
        <label className={styles.label} htmlFor="ip"></label>
        <input
          className={errors?.ip ? `${styles.ipInput} ${styles.inputError}` : `${styles.ipInput}`}
          autoComplete="off"
          placeholder="Search for any IP address or domain"
          type="text"
          id="ip"
          {...register("ip", {
            required: "The field should not be empty",
            pattern: { value: /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/, message: "Enter correct IP address" },
          })}
        />
        <button type="submit" className={styles.button} disabled={!isValid} />
      </form>
      <div className={styles.error}>{errors?.ip && <p>{errors?.ip?.message || "error"}</p>}</div>
      <InfoContainer data={ipData} />
    </div>
  );
};

export { InputContainer };
