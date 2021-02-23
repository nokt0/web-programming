import './cityCard.scss';
import cityCard from 'cityCard.html';

export function createCityCard(){
    const card = new DOMParser().parseFromString(cityCard, 'text/html');

}
