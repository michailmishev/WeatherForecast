/* eslint-disable no-undef */

import { getCurrentWeatherByCityName } from '../helpers/api-calls.js';
import { getEvery3HoursWeatherByCityName } from '../helpers/api-calls.js';

import { displayCurrentData } from '../helpers/display-current-weather-data.js';
import { display3Hours } from '../helpers/display-3-hours-data.js';

const bigCitiesListener = () => {
    $('.city-button').click(function() {
        const currentCity = $(this).text();
        // console.log(currentCity);

        // console.log(getCurrentWeatherByCityName(currentCity));
        // console.log(getEvery3HoursWeatherByCityName(currentCity));

        getCurrentWeatherByCityName(currentCity).then(displayCurrentData);
        getEvery3HoursWeatherByCityName(currentCity).then(display3Hours);
    });
};


export {
    bigCitiesListener
};
