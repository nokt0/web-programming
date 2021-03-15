import './weatherMain.scss'
import {createWeatherIcon} from "../WeatherIcon";
export WeatherMain from './weatherMain.html'
export const iconContainerId = 'weather-main-icon';

export function initializeWeatherMain({weatherType, degree}){
    const iconContainer = document.getElementById(iconContainerId);
    const weatherDegree = document.getElementById('weather-main-degree');

    const icon = createWeatherIcon('header-menu',weatherType);
    if(icon){
        iconContainer.appendChild(icon)
    }
    if(degree){
        weatherDegree.innerText = degree;
    }
}
