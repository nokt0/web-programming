import './headerMenu.scss';
import {UpdateButton} from '../UpdateButton';
import {initializeWeatherMain, WeatherMain} from '../WeatherMain';
import {createWeatherDetailed} from '../WeatherDetailed';
import {updateCurrentGeolocationWeather} from "../../js/stateManagement";
export HeaderMenu from './headerMenu.html';

export const headerMenuContainer = 'header-menu-container';
const updateButtonId = 'update-geolocation-button';

export function initializeHeaderMenu({weatherDetails, ...headerData}){
    let updateButton = document.getElementById(updateButtonId);

    if(!updateButton){
        document.getElementById('header-menu-top').insertAdjacentHTML("beforeend", UpdateButton);
        updateButton = document.getElementById(updateButtonId);
        updateButton.onclick = updateCurrentGeolocationWeather;
    }

    document.getElementById('header-menu-weather-main').innerHTML= WeatherMain;
    initializeWeatherMain(headerData);

    const weatherDetailed = createWeatherDetailed('header-menu', weatherDetails);

    if(weatherDetailed){
        document.getElementById('header-menu-weather-detailed').replaceChildren(weatherDetailed);
    }


}
