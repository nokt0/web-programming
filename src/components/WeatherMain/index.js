import './weatherMain.scss'
import {createWeatherIcon} from "../WeatherIcon";
import {WeatherTypes} from "../WeatherIcon/WeatherIcon.model";
export WeatherMain from './weatherMain.html'
export const iconContainerId = 'weather-main-icon';

export function initializeWeatherMain({weatherType, degree, city =''}){
    const weatherMainContainer = document.getElementById('weather-main-container');
    const iconContainer = document.getElementById(iconContainerId);
    const weatherDegree = document.getElementById('weather-main-degree');
    const weatherCity = document.getElementById('weather-main-city');

    if(weatherType === WeatherTypes.Update){
        weatherMainContainer.classList.add('updating');
    }

    const icon = createWeatherIcon('header-menu',weatherType);
    if(icon){
        iconContainer.appendChild(icon)
    }
    weatherDegree.innerText = degree && `${degree}°` || '';
    weatherCity.innerText = city;
}
