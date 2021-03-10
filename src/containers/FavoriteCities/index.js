import './favoriteCities.scss';
import {favoriteCitiesData} from './favoriteCities.data';
import {AddCity} from '../../components/AddCity'
import {createCityCard} from "../../components/CityCard";
export FavoriteCities from './favoriteCities.html';


export function initializeFavoriteCities(){
    document.getElementById('favorite-cities-add').innerHTML = AddCity;
    const cities = document.getElementById('favorite-cities-cities');
    const cards = favoriteCitiesData.map((data,index) => createCityCard(index + 1, data));
    cards.forEach((card)=>{cities.appendChild(card)});
}
