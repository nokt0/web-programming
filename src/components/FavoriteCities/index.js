import './favoriteCities.scss';
import {AddCity} from '../AddCity'
export FavoriteCities from './favoriteCities.html';


export function initializeFavoriteCities(){
    document.getElementById('favorite-cities-add').innerHTML = AddCity;
    document.getElementById('favorite-cities-cities');
}
