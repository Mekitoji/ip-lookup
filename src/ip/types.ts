type Security = {
  anonymous: boolean;
  proxy: boolean;
  vpn: boolean;
  tor: boolean;
  hosting: boolean;
};

type Currency = {
  name: string;
  code: string;
  symbol: string;
  plural: string;
  exchange_rate: number;
};

type Timezone = {
  id: string;
  abbr: string;
  is_dst: boolean;
  offset: number;
  utc: string;
  current_time: string;
};

type Flag = {
  img: string;
  emoji: string;
  emoji_unicode: string;
};

type Connection = {
  asn: number;
  org: string;
  isp: string;
  domain: string;
};

export type IpData = {
  ip: string;
  success: boolean;
  type: 'IPv4' | 'IPv6';
  continent: string;
  continent_code: string;
  country: string;
  country_code: string;
  region: string;
  region_code: string;
  city: string;
  latitude: number;
  longitude: number;
  is_eu: boolean;
  postal: string;
  calling_code: string;
  capital: string;
  borders: string;
  flag: Flag;
  connection: Connection;
  timezone: Timezone;
  currency: Currency;
  security: Security;
};
