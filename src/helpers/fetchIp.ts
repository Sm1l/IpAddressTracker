import { IIpData } from "types";
const key: string | undefined = process.env.REACT_APP_IP_GEO_KEY;

export const fetchIp = async (ip: string): Promise<IIpData | null> => {
  try {
    // const url: string = `https://geo.ipify.org/api/v2/country,city?apiKey=${key}&ipAddress=${ip}`;
    const url: string = `https://geo.ipify.org/api/v2/country,city?apiKey=${key}&ipAddress=${ip}`;
    let response = await fetch(url);
    let result = (await response.json()) as IIpData;
    return result;
  } catch (error) {
    console.warn(error);
    return null;
  }
};

export const myIP = async (): Promise<string | null> => {
  try {
    let response = await fetch("https://api.ipify.org/?format=json");
    let ip = await response.json();
    return ip.ip;
  } catch (error) {
    console.warn(error);
    return null;
  }
};
