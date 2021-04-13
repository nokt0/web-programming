import {HeaderMenu} from '../components/HeaderMenu/';
import {FavoriteCities, initializeFavoriteCities} from '../containers/FavoriteCities';
import {App, headerRoot, bodyRoot} from '../containers/App';
import '../components/HeaderMenu/headerMenu.scss'
import {storageChangesListener, syncCardsFromStorage, updateCurrentGeolocationWeather} from "./stateManagement";

const defaultCity = 'Санкт-Петербург';

window.onload = function () {
    document.getElementById('root').innerHTML = App;
    document.getElementById(headerRoot).innerHTML = HeaderMenu;
    document.getElementById(bodyRoot).innerHTML = FavoriteCities;


    updateCurrentGeolocationWeather(defaultCity);
    initializeFavoriteCities();
    syncCardsFromStorage();
}

window.addEventListener('storageChanged', storageChangesListener);



