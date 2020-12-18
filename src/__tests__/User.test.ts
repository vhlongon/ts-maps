import * as faker from 'faker';
import { User } from '../User';

describe('User', () => {
  test('random generates an object with name and latitute/longitude', () => {
    jest.spyOn(faker.name, 'firstName');
    jest.spyOn(faker.address, 'latitude');
    jest.spyOn(faker.address, 'longitude');
    const user = new User();
    expect(typeof user.name).toBe('string');
    expect(Object.keys(user.location)).toEqual(['lat', 'lng']);
    expect(faker.name.firstName).toHaveBeenCalled();
    expect(faker.address.latitude).toHaveBeenCalled();
    expect(faker.address.longitude).toHaveBeenCalled();
  });
});
