import {HeaderMenu} from '../components/HeaderMenu/';
import {FavoriteCities, initializeFavoriteCities} from '../containers/FavoriteCities';
import {App, headerRoot, bodyRoot} from '../containers/App';
import '../components/HeaderMenu/headerMenu.scss'
import {storageChangesListener, syncCardsFromStorage, updateCurrentGeolocationWeather} from "./stateManagement";
import {getFavoriteCities} from "./favoriteCities";
import {addAllCities, cleanCitiesState} from "./LocalStorage";

const defaultCity = 'Санкт-Петербург';

window.onload = async function () {
    document.getElementById('root').innerHTML = App;
    document.getElementById(headerRoot).innerHTML = HeaderMenu;
    document.getElementById(bodyRoot).innerHTML = FavoriteCities;


    updateCurrentGeolocationWeather(defaultCity);
    initializeFavoriteCities();
    if (process.env.FAVORITES_FROM_BACKEND) {
        cleanCitiesState();
        const favoriteCities = await getFavoriteCities();
        const cities = favoriteCities?.data?.map((item) => item?.name);
        addAllCities(cities);
    }

    syncCardsFromStorage();
    window.addEventListener('storageChanged', storageChangesListener);
}




