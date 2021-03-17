import {requestWeatherForCurrentLocation} from "./weatherApiWorker";
import {weatherToCardController} from "./controllers";
import {initializeHeaderMenu} from "../components/HeaderMenu";
import {WeatherTypes} from "../components/WeatherIcon/WeatherIcon.model";

const waitingString = 'Подождите, данные загружаются';
const citiesStorageKey = 'app-cities-data'
const citiesState = window.localStorage.getItem(citiesStorageKey);

function setCurrentGeolocationWeatherUpdating(){
    initializeHeaderMenu({weatherType: WeatherTypes.Update, city: waitingString});
}

export async function updateCurrentGeolocationWeather(){
    console.log('init');
    try{
        setCurrentGeolocationWeatherUpdating();
        const weather = await requestWeatherForCurrentLocation();
        const headerMenuData = weatherToCardController(weather);
        setTimeout(() => initializeHeaderMenu(headerMenuData),500)
    }catch (e){
        console.log(e);
    }
}
