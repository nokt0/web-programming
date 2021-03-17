import {HeaderMenu} from '../components/HeaderMenu/';
import {FavoriteCities, initializeFavoriteCities} from '../containers/FavoriteCities';
import {App, headerRoot, bodyRoot} from '../containers/App';
import '../components/HeaderMenu/headerMenu.scss'
import {updateCurrentGeolocationWeather} from "./stateManagement";


window.onload = async function () {
    document.getElementById('root').innerHTML = App;
    document.getElementById(headerRoot).innerHTML = HeaderMenu;
    document.getElementById(bodyRoot).innerHTML = FavoriteCities;

    await updateCurrentGeolocationWeather();


    initializeFavoriteCities();
}
