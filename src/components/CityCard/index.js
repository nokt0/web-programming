import './cityCard.scss';
import cityCard from 'cityCard.html';
import {createWeatherDetailed} from "../WeatherDetailed";

export function createCityCard(id, weatherDetails){
    if(!id || !weatherDetails){
        return null;
    }

    const card = new DOMParser().parseFromString(cityCard, 'text/html');
    const cityCardData = card.getElementById('city-card-data');
    card.id += `-${id}`;
    cityCardData.id = `-${id}`;
    const weatherDetailed = createWeatherDetailed(id,weatherDetails);
    cityCardData.appendChild(weatherDetailed);

    return card;
}
