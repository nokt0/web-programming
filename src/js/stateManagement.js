import {requestWeatherForCurrentLocation} from "./weatherApiWorker";
import {weatherToCardController} from "./controllers";
import {initializeHeaderMenu} from "../components/HeaderMenu";

export async function updateCurrentGeolocationWeather(){
    console.log('init');
    try{
        const weather = await requestWeatherForCurrentLocation();
        const headerMenuData = weatherToCardController(weather);
        initializeHeaderMenu(headerMenuData);
    }catch (e){
        console.log(e);
    }
}
