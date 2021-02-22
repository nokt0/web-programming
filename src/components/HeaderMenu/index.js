import './headerMenu.scss';
import {UpdateButton} from './components/UpdateButton';
import {WeatherMain} from '../WeatherMain';
import {createWeatherDetailed} from '../WeatherDetailed';
import {headerMenuData} from "./HeaderMenu.data";
export HeaderMenu from './headerMenu.html';

export function initializeHeaderMenu(){
    document.getElementById('header-menu-top').insertAdjacentHTML("beforeend", UpdateButton);
    document.getElementById('header-menu-weather-main').innerHTML= WeatherMain;
    createWeatherDetailed(headerMenuData, 'header-menu-weather-detailed');
}
