export interface LocationType {
  lat: number;
  lng: number;
}

export interface Mappable {
  name: string;
  location: LocationType;
  markerContent(): string;
}

export type MapType = google.maps.Map;
export type MarkerType = google.maps.Marker;
export type InfoWindowType = google.maps.InfoWindow;
