/* eslint-disable default-case */
/* eslint-disable no-undef */

const wrongInputError = (error) => {
    $('.current-weather h2').text('No such city found. Try again!');
    $('.current-weather-icon').attr('src', './src/assets/error-icons/sad-1.svg');

    $('.more-info').hide();
    $('.clock').hide();
    $('.current-weather h3').hide();
    $('#current-weather-words').hide();
    $('.three-hours-container').hide();
    $('.five-days-container').hide();
};


const geolocationError = (error) => {
    $('.current-weather h2').text('Geolocation is not supported by this browser. Type your city in the search filed.');
    $('.current-weather-icon').attr('src', './src/assets/error-icons/sad-1.svg');

    $('.more-info').hide();
    $('.clock').hide();
    $('.current-weather h3').hide();
    $('#current-weather-words').hide();
    $('.three-hours-container').hide();
    $('.five-days-container').hide();
};

const displayCurrentData = (data) => {
    // console.log('We are inside Display Current Data');

    // in case of wrong input into the search field:
    // console.log(data);

    $('.more-info').show();
    $('.clock').show();
    $('.current-weather h3').show();
    $('#current-weather-words').show();
    $('.three-hours-container').show();
    $('.five-days-container').show();

    // middle container:
    const currentCity = data.name;
    $('.current-weather h2').text(currentCity);

    const currentTemp = Math.round(data.main.temp);
    $('.current-weather h3').text(currentTemp + '°');

    const currentCondition = data.weather[0].main;
    $('#current-weather-words').text(currentCondition);

    const iconName = data.weather[0].icon;
    $('.current-weather-icon').attr('src', './src/assets/weather-icons/' + iconName + '.svg');


    // right container:
    const sunriseUNIX = new Date(data.sys.sunrise*1000);
    let sunriseHour = sunriseUNIX.getUTCHours().toString();
    if (sunriseHour.length === 1) {
        sunriseHour = '0' + sunriseHour;
    }
    let sunriseMin = sunriseUNIX.getUTCMinutes().toString();
    if (sunriseMin.length === 1) {
        sunriseMin = '0' + sunriseMin;
    }
    const sunrise = sunriseHour + ':' + sunriseMin;
    $('#sunrise').text('Sunrise: ' + sunrise);

    const sunsetUNIX = new Date(data.sys.sunset*1000);
    let sunsetHour = sunsetUNIX.getUTCHours().toString();
    if (sunsetHour.length === 1) {
        sunsetHour = '0' + sunsetHour;
    }
    let sunsetMin = sunsetUNIX.getUTCHours().toString();
    if (sunsetMin.length === 1) {
        sunsetMin = '0' + sunsetMin;
    }
    const sunset = sunsetHour + ':' + sunsetMin;
    $('#sunset').text('Sunset: ' + sunset);

    const wind = data.wind.speed;
    $('#wind').text('Wind: ' + wind + ' m/s');

    const humidity = data.main.humidity;
    $('#humidity').text('Humidity: ' + humidity + ' %');

    const pressure = data.main.pressure;
    $('#pressure').text('Pressure: ' + pressure + ' hPa');


    // left container(clock and data):
    const date = new Date(data.dt*1000);
    const currentDate = date.getUTCDate() + '/' + Number(1+date.getUTCMonth()) + '/' + date.getUTCFullYear();
    let dayOfWeek = date.getUTCDay();
    switch (dayOfWeek) {
    case 0: dayOfWeek = 'Sunday'; break;
    case 1: dayOfWeek = 'Monday'; break;
    case 2: dayOfWeek = 'Tuesday'; break;
    case 3: dayOfWeek = 'Wednesday'; break;
    case 4: dayOfWeek = 'Thursday'; break;
    case 5: dayOfWeek = 'Friday'; break;
    default: dayOfWeek = 'Saturday';
    }
    const hours = date.getUTCHours();
    const minutes = '0' + date.getUTCMinutes();
    const formattedTime = hours + ':' + minutes.substr(-2);
    $('#hour-in-digits').text(formattedTime);
    $('#date').text(currentDate);
    $('#day-in-words').text(dayOfWeek);
};

export {
    displayCurrentData
};

export {
    wrongInputError
};

export {
    geolocationError
};
