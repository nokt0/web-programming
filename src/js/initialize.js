import {HeaderMenu, initializeHeaderMenu} from '../components/HeaderMenu/';
import {FavoriteCities, initializeFavoriteCities} from '../containers/FavoriteCities';
import {App, headerRoot, bodyRoot} from '../containers/App';
import '../components/HeaderMenu/headerMenu.scss'
import { requestWeatherForCurrentLocation} from "./weatherApiWorker";
import {weatherToCardController} from "./controllers";


window.onload = async function () {
    document.getElementById('root').innerHTML = App;
    document.getElementById(headerRoot).innerHTML = HeaderMenu;
    document.getElementById(bodyRoot).innerHTML = FavoriteCities;

    try{
        const weather = await requestWeatherForCurrentLocation();
        const headerMenuData = weatherToCardController(weather);
        initializeHeaderMenu(headerMenuData);
    }catch (e){
        console.log(e);
    }


    initializeFavoriteCities();
}
