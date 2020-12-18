import { LocationType } from './types';
import faker from 'faker';

export class User {
  public name: string;
  public location: LocationType;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
