import * as faker from 'faker';
import { Company } from '../Company';

describe('Company', () => {
  test('random generates an object with name and latitute/longitude', () => {
    jest.spyOn(faker.company, 'companyName');
    jest.spyOn(faker.address, 'latitude');
    jest.spyOn(faker.address, 'longitude');
    const company = new Company();
    expect(typeof company.name).toBe('string');
    expect(Object.keys(company.location)).toEqual(['lat', 'lng']);
    expect(faker.company.companyName).toHaveBeenCalled();
    expect(faker.address.latitude).toHaveBeenCalled();
    expect(faker.address.longitude).toHaveBeenCalled();
  });
});
