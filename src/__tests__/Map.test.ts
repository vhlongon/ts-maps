import { Map } from '../Map';
import * as googleMapUtils from '../googleMap';
import createGoogleMapsMock from 'jest-google-maps-mock';
import { User } from '../User';

describe('Map', () => {
  const googleMaps = createGoogleMapsMock();
  const mockedMap = new googleMaps.Map();
  const mockedMarker = new googleMaps.Marker();
  jest.spyOn(googleMapUtils, 'generateGoogleMap').mockReturnValue(mockedMap);
  jest.spyOn(googleMapUtils, 'generateGoogleMapMarker').mockReturnValue(mockedMarker);

  test('it creates a map using google maps and a marker for a user or company', () => {
    const map = new Map('id');

    expect(map.googleMap).toEqual(mockedMap);
    expect(googleMapUtils.generateGoogleMap).toHaveBeenCalledWith('id', {
      center: { lat: 0, lng: 0 },
      zoom: 1,
    });
    const user = new User();
    map.addMarker(user);

    expect(map.marker).toEqual(mockedMarker);
    expect(googleMapUtils.generateGoogleMapMarker).toHaveBeenCalledWith(
      mockedMap,
      user.location,
      user.name,
    );
  });
});
