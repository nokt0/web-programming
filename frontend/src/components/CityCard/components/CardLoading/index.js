import './cardLoading.scss'
import {createWeatherIcon} from "../../../WeatherIcon";
import {WeatherTypes} from "../../../WeatherIcon/WeatherIcon.model";
import CardLoading from './CardLoading.html';

const cardLoadingId = 'card-loading';
const cardLoadingIconId = 'card-loading-icon-container';

export function createCardLoading(id){
    const cardLoadingHtml = new DOMParser().parseFromString(CardLoading, 'text/html');
    const cardLoadingContainer = cardLoadingHtml?.getElementById('card-loading');
    const iconContainer = cardLoadingHtml?.getElementById(cardLoadingIconId);

    cardLoadingContainer.id = `${cardLoadingId}-${id}`;
    iconContainer.id = `${cardLoadingIconId}-${id}`;

    const icon = createWeatherIcon(`card-loading-${id}`, WeatherTypes.Update);
    iconContainer.appendChild(icon);

    return cardLoadingContainer;
}
