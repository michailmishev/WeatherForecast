import { currentLocationListener } from './features/current-location.js';
import { bigCitiesListener } from './features/big-cities.js';
import { searchFieldListener } from './features/search-field.js';
import { favouriteCityListener } from './features/favourite-city.js';

favouriteCityListener();
currentLocationListener();
bigCitiesListener();
searchFieldListener();

