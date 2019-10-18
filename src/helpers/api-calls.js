/* eslint-disable no-undef */
const baseURL = 'https://api.openweathermap.org/data/2.5/';
const appID = 'c5af53fa2fa456e9875a4e0398b5790d';


const getCurrentWeatherByCityName = (city) => {
    return $.get(`${baseURL}weather?q=${city}&appid=${appID}&units=metric`);
};

const getEvery3HoursWeatherByCityName = (city) => {
    return $.get(`${baseURL}forecast?q=${city}&appid=${appID}&units=metric`);
};

const getCurrentWeatherByCoordinates = (latitude, longitude) => {
    return $.get(`${baseURL}weather?lat=${latitude}&lon=${longitude}&appid=${appID}&units=metric`);
};

const getEvery3HoursWeatherByCoordinates = (latitude, longitude) => {
    return $.get(`${baseURL}forecast?lat=${latitude}&lon=${longitude}&appid=${appID}&units=metric`);
};


export { getCurrentWeatherByCityName };
export { getEvery3HoursWeatherByCityName };
export { getCurrentWeatherByCoordinates };
export { getEvery3HoursWeatherByCoordinates };

