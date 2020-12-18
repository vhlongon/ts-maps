import { LocationType, MapType, MarkerType } from './types';

export const generateGoogleMap = (
  id: string,
  options: { center: LocationType; zoom: number },
): MapType => {
  return new google.maps.Map(document.getElementById(id), options);
};

export const generateGoogleMapMarker = (
  map: MapType,
  position: LocationType,
  title: string,
): MarkerType => {
  return new google.maps.Marker({
    map,
    position,
    title,
  });
};
