import faker from 'faker';
import { LocationType } from './types';

export class Company {
  constructor(
    public name: string = faker.company.companyName(),
    public catchPhrase: string = faker.company.catchPhrase(),
    public location: LocationType = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    },
  ) {}
}
