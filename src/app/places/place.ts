export class Place {
  Id: number;
  DFC: string; // Indexed
  DLC: string;
  User: string;
  Country: string; // Indexed 1.6
  Did: number; // Indexed
  Pid: number; // Indexed
  Name: string; // Indexed 1.6
  Lat: number; // Indexed 1.6
  Lng: number; // Indexed 1.6
  GeoType: string;
  GeoQual: string;
  GeoSource: number;
  GeoPlaceId: number;
  MapAddress: string;
}
