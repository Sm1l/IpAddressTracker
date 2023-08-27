type Location = {
  city: string;
  country: string;
  region: string;
  timezone: string;
  lat: number;
  lng: number;
};

export interface IIpData {
  ip: string;
  isp: string;
  location: Location;
}
