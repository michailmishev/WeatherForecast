/* eslint-disable no-undef */

import { getCurrentWeatherByCityName } from '../helpers/api-calls.js';
import { getEvery3HoursWeatherByCityName } from '../helpers/api-calls.js';

import { cookieHandler } from '../helpers/cookie-handler.js';
import { displayCurrentData } from '../helpers/display-current-weather-data.js';
import { display3Hours } from '../helpers/display-3-hours-data.js';


const favouriteCityListener = () => {
    $(document).ready(function() {
        const favouriteCityCookie = cookieHandler.getCookie('favouriteCityCookie');
        if (favouriteCityCookie !== null) {
            getCurrentWeatherByCityName(favouriteCityCookie).then(displayCurrentData);
            getEvery3HoursWeatherByCityName(favouriteCityCookie).then(display3Hours);
        }
    });

    const saveFavouriteCity = (name) => {
        cookieHandler.setCookie('favouriteCityCookie', name, 50);
    };

    $('.favourite-city').click(() => {
        const elem = $('.current-weather > h2');
        const currentCity = elem[0].innerText;
        saveFavouriteCity(currentCity);
    });
};


export {
    favouriteCityListener
};
