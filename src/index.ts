import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();
const container = document.getElementById('map');

function initMap(): void {
  new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center: { lat: 0, lng: 0 },
    zoom: 1,
  });
}

initMap();
