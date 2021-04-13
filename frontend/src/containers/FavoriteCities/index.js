import './favoriteCities.scss';
import {AddCity, initializeAddCity} from '../../components/AddCity'
export FavoriteCities from './favoriteCities.html';

export const favoriteCitiesContainerId = 'favorite-cities-cities';

export function initializeFavoriteCities(){
    document.getElementById('favorite-cities-add').innerHTML = AddCity;
    initializeAddCity();
}
