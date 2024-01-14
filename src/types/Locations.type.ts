type LocationsType = {
  locations: LocationDataType[];
};
export type LocationDataType = {
  id: number;
  lat: string;
  lng: string;
  userId: number;
};
export default LocationsType;
