import { LocationType } from './types';
import faker from 'faker';

export class User {
  constructor(
    public name: string = faker.name.firstName(),
    public location: LocationType = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    },
  ) {}
}
