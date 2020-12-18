import faker from 'faker';
import { LocationType } from './types';

export class Company {
  public name: string;
  public catchPhrase: string;
  public location: LocationType;

  constructor() {
    this.name = faker.company.companyName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
