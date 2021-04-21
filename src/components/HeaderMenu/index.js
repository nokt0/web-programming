import './headerMenu.scss';
import {UpdateButton} from '../UpdateButton';
import {initializeWeatherMain, WeatherMain} from '../WeatherMain';
import {createWeatherDetailed} from '../WeatherDetailed';
import {updateCurrentGeolocationWeather} from "../../js/stateManagement";

export const headerMenuContainer = 'header-menu-container';
const updateButtonId = 'update-geolocation-button';

export function initializeHeaderMenu({weatherDetails, ...headerData}){
    const updateButton = document.getElementById(updateButtonId);
    const headerMenuTop = document.getElementById('header-menu-top');

    if(updateButton){
        headerMenuTop.insertAdjacentHTML("beforeend", UpdateButton);
        updateButton.onclick = updateCurrentGeolocationWeather;
    }

    document.getElementById('header-menu-weather-main').innerHTML= WeatherMain;
    initializeWeatherMain(headerData);

    const weatherDetailed = createWeatherDetailed('header-menu', weatherDetails);

    if(weatherDetailed){
        document.getElementById('header-menu-weather-detailed').replaceChildren(weatherDetailed);
    }
}

export HeaderMenu from './headerMenu.html';

