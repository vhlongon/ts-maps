import { LocationType, Mappable } from './types';
import faker from 'faker';

export class User implements Mappable {
  name: string;
  location: LocationType;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<h1>User Name is ${this.name}</h1>`;
  }
}
