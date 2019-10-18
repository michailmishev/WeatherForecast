/* eslint-disable no-undef */
import { getCurrentWeatherByCoordinates } from '../helpers/api-calls.js';
import { getEvery3HoursWeatherByCoordinates } from '../helpers/api-calls.js';

import { displayCurrentData } from '../helpers/display-current-weather-data.js';
import { display3Hours } from '../helpers/display-3-hours-data.js';

import { geolocationError } from '../helpers/display-current-weather-data.js';

const currentLocationListener = () => {
    $('.current-location').click(function() {
        const showPosition = (position) => {
            // console.log('Latitude: ' + position.coords.latitude);
            // console.log('Longitude : ' + position.coords.longitude);

            const myLatitude = position.coords.latitude;
            const myLongitude = position.coords.longitude;

            // console.log(getCurrentWeatherByCoordinates(myLatitude, myLongitude));
            // console.log(getEvery3HoursWeatherByCoordinates(myLatitude, myLongitude));

            getCurrentWeatherByCoordinates(myLatitude, myLongitude).then(displayCurrentData).catch(geolocationError);
            getEvery3HoursWeatherByCoordinates(myLatitude, myLongitude).then(display3Hours);
        };


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            // alert('Geolocation is not supported by this browser.');
            geolocationError();
        }
    });
};


export {
    currentLocationListener
};

