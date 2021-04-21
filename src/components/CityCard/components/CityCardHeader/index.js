import './cityCardHeader.scss';
import CityCardHeader from './cityCardHeader.html';
import {createRoundButton} from "../../../RoundButton";
import {createWeatherIcon} from "../../../WeatherIcon";
import {deleteCityFromStorage} from "../../../../js/LocalStorage";
import {deleteFavoriteCity} from "../../../../js/favoritesApiWorker";

const cityCardHeaderId = 'city-card-header';
const cityCardHeaderCityId = `${cityCardHeaderId}-city`;
const cityCardHeaderDegreeId = `${cityCardHeaderId}-degree`;
const cityCardHeaderIconId = `${cityCardHeaderId}-icon`;
const cityCardHeaderCloseId = `${cityCardHeaderId}-close`;
const buttonText = '✕';

export function createCityCardHeader(id, {weatherType, city, degree}) {
    const cardHeaderHtml = new DOMParser().parseFromString(CityCardHeader, 'text/html');
    const cityCardHeader = cardHeaderHtml.getElementById(cityCardHeaderId);
    const cityCardHeaderCity = cardHeaderHtml.getElementById(cityCardHeaderCityId);
    const cityCardHeaderDegree = cardHeaderHtml.getElementById(cityCardHeaderDegreeId);
    const cityCardHeaderIcon = cardHeaderHtml.getElementById(cityCardHeaderIconId);
    const cityCardHeaderClose = cardHeaderHtml.getElementById(cityCardHeaderCloseId);

    const weatherIcon = createWeatherIcon(id,weatherType);
    if(weatherIcon){
        cityCardHeaderIcon.appendChild(weatherIcon);
    }

    const deleteButton = createRoundButton(buttonText);
    const cityName = `${id}`.replace('city-card-','');
    if(cityName){
        deleteButton.onclick = async () => {
            await deleteFavoriteCity(cityName);
            deleteCityFromStorage(cityName);
        };
    }
    cityCardHeaderClose.appendChild(deleteButton);

    if(city){
        cityCardHeaderCity.innerText = city;
    }
    if(degree){
        cityCardHeaderDegree.innerText = `${degree}°C`;
    }

    cityCardHeader.id = `${cityCardHeaderId}-${id}`;
    cityCardHeaderCity.id = `${cityCardHeaderCityId}-${id}`;
    cityCardHeaderDegree.id = `${cityCardHeaderDegreeId}-${id}`;
    cityCardHeaderIcon.id = `${cityCardHeaderIconId}-${id}`;
    cityCardHeaderClose.id = `${cityCardHeaderCloseId}-${id}`;

    return cityCardHeader;
}
