import './weatherMain.scss'
import {createWeatherIcon} from "../WeatherIcon";
export WeatherMain from './weatherMain.html'
export const iconContainerId = 'weather-main-icon';

export function initializeWeatherMain(weather){
    const iconContainer = document.getElementById(iconContainerId);
    const icon = createWeatherIcon('header-menu',weather);
    if(icon){
        iconContainer.appendChild(icon)
    }
}
