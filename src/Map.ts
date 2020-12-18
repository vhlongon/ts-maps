import {
  generateGoogleMap,
  generateGoogleMapMarker,
  generateGoogleMapInfoWindow,
} from './googleMap';
import { Mappable, MapType, MarkerType } from './types';

const defaultOptions = { center: { lat: 0, lng: 0 }, zoom: 1 };

export class Map {
  public googleMap: MapType;
  public marker: MarkerType;

  constructor(idId: string, options = defaultOptions) {
    this.googleMap = generateGoogleMap(idId, options);
  }

  addMarker(entity: Mappable): void {
    const { name, location } = entity;
    const marker = generateGoogleMapMarker(this.googleMap, location, name);
    const infoWindow = generateGoogleMapInfoWindow(entity.markerContent());

    marker.addListener('click', () => {
      infoWindow.open(this.googleMap, marker);
    });

    this.marker = marker;
  }
}
