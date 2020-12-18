import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const user = new User();
const company = new Company();
const myMap = new Map('map');

myMap.addMarker(user);
myMap.addMarker(company);
