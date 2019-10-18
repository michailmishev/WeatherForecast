/* eslint-disable no-undef */
const display3HoursAnd5Days = (data) => {
    const unix = (t) => {
        const dt = new Date(t*1000);
        const hr = dt.getHours();
        const m = '0' + dt.getMinutes();
        return hr+ ':' + m.substr(-2);
    };

    const hours = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth'];
    hours.forEach(function(day, index) {
        const hourlyTemp = Math.round(data.list[index].main.temp);
        const icon = data.list[index].weather[0].icon;
        const time = data.list[index].dt;
        $('#' + day).attr('src', './src/assets/weather-icons/'+ icon + '.svg');
        $('#' + day + 'Temp').text(hourlyTemp + '°');
        $('#' + day + 'Time').text(unix(time));
    });

    const getDayEnd = (index) => {
        let dayEndIndex = 0;
        for (const element of data.list) {
            if (element.dt_txt[12] === '1') {
                dayEndIndex = data.list.indexOf(element) + index*8;
                break;
            }
        }
        return dayEndIndex;
    };

    const getMinMaxTemp = (endIndex) => {
        const temps = [];
        for (let i = endIndex; i > endIndex-8; i--) {
            if (i === 0) {
                break;
            }
            temps.push(data.list[i].main.temp);
        }
        const minTemp = Math.round(Math.min(...temps));
        const maxTemp = Math.round(Math.max(...temps));
        return [maxTemp, minTemp];
    };

    const getNextDayNames = (index) => {
        const date = new Date(data.list[index].dt*1000);
        let dayOfWeek = date.getUTCDay();
        switch (dayOfWeek) {
        case 0: dayOfWeek = 'Sun'; break;
        case 1: dayOfWeek = 'Mon'; break;
        case 2: dayOfWeek = 'Tue'; break;
        case 3: dayOfWeek = 'Wed'; break;
        case 4: dayOfWeek = 'Thu'; break;
        case 5: dayOfWeek = 'Fri'; break;
        default: dayOfWeek = 'Sat';
        }
        return dayOfWeek;
    };

    const days = ['first', 'second', 'third', 'fourth', 'fifth'];
    days.forEach(function(day, index) {
        const icon = data.list[index*8].weather[0].icon;
        $('#' + day + '-day').text(getMinMaxTemp(getDayEnd(index))[0] + '° / ' + getMinMaxTemp(getDayEnd(index))[1]);
        $('#' + day + '-day-name').text(getNextDayNames(index+index*8));
        $('#' + day + '-day-icon').attr('src', './src/assets/weather-icons/'+ icon + '.svg');
    });
};

export {
    display3HoursAnd5Days as display3Hours
};