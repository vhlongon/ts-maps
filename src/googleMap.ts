import { LocationType, MapType, MarkerType, InfoWindowType } from './types';

export const generateGoogleMap = (
  id: string,
  options: { center: LocationType; zoom: number },
): MapType => new google.maps.Map(document.getElementById(id), options);

export const generateGoogleMapMarker = (
  map: MapType,
  position: LocationType,
  title: string,
): MarkerType =>
  new google.maps.Marker({
    map,
    position,
    title,
  });

export const generateGoogleMapInfoWindow = (content: string): InfoWindowType =>
  new google.maps.InfoWindow({
    content,
  });
