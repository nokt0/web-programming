import './cityCard.scss';
import CityCard from './cityCard.html';
import {createCityCardHeader} from './components/CityCardHeader';
import {createWeatherDetailed} from "../WeatherDetailed";

export function createCityCard(id, {weatherDetails,weatherType, city, degree}){
    if(!id || !weatherDetails){
        return null;
    }

    const card = new DOMParser().parseFromString(CityCard, 'text/html');
    const cityCard = card.getElementById('city-card');
    const cityCardData = card.getElementById('city-card-data');
    cityCard.id += `-${id}`;
    cityCardData.id = `-${id}`;
    const weatherDetailed = createWeatherDetailed(id, weatherDetails);
    cityCardData.appendChild(weatherDetailed);

    const cityCardHeader = card.getElementById('city-card-header');
    const createdHeader = createCityCardHeader(id,{weatherType,city,degree});
    cityCardHeader.appendChild(createdHeader);

    return cityCard;
}
