import './weatherMain.scss'
import {createWeatherIcon} from "../WeatherIcon";
export WeatherMain from './weatherMain.html'
export const iconContainerId = 'weather-main-icon';

export function initializeWeatherMain({weatherType, degree, city}){
    const iconContainer = document.getElementById(iconContainerId);
    const weatherDegree = document.getElementById('weather-main-degree');
    const weatherCity = document.getElementById('weather-main-city');

    const icon = createWeatherIcon('header-menu',weatherType);
    if(icon){
        iconContainer.appendChild(icon)
    }
    weatherDegree.innerText = `${degree}°`;
    weatherCity.innerText = city;
}
