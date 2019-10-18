/* eslint-disable no-undef */

import { getCurrentWeatherByCityName } from '../helpers/api-calls.js';
import { getEvery3HoursWeatherByCityName } from '../helpers/api-calls.js';

import { displayCurrentData } from '../helpers/display-current-weather-data.js';
import { display3Hours } from '../helpers/display-3-hours-data.js';

import { wrongInputError } from '../helpers/display-current-weather-data.js';

const searchFieldListener = () => {
    $(document).ready(function() {
        $('.city-input-form').keypress(function(event) {
            if (event.keyCode === 13) {
                $('.search-button').click();
            }
        });
    });

    $('.search-button').click(() => {
        const searchedCity = $('.city-input-form').val();
        // console.log(searchedCity);

        // console.log(getCurrentWeatherByCityName(searchedCity));
        // console.log(getEvery3HoursWeatherByCityName(searchedCity));

        getCurrentWeatherByCityName(searchedCity).then(displayCurrentData).catch(wrongInputError);
        getEvery3HoursWeatherByCityName(searchedCity).then(display3Hours);
    });
};


export {
    searchFieldListener
};
