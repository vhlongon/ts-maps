import faker from 'faker';
import { LocationType, Mappable } from './types';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: LocationType;

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <h1>Company Name is ${this.name}</h1>
    <h3>Catchprhase: ${this.catchPhrase}</h3>
    `;
  }
}
