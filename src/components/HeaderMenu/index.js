import './headerMenu.scss';
import {UpdateButton} from './components/UpdateButton';
import {initializeWeatherMain, WeatherMain} from '../WeatherMain';
import {createWeatherDetailed} from '../WeatherDetailed';
export HeaderMenu from './headerMenu.html';

export function initializeHeaderMenu({weatherDetails, ...headerData}){
    document.getElementById('header-menu-top').insertAdjacentHTML("beforeend", UpdateButton);
    document.getElementById('header-menu-weather-main').innerHTML= WeatherMain;
    initializeWeatherMain(headerData);

    const weatherDetailed = createWeatherDetailed('header-menu', weatherDetails);


    if(weatherDetailed){
        document.getElementById('header-menu-weather-detailed').appendChild(weatherDetailed);
    }
}
