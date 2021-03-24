import {requestWeatherForCity, requestWeatherForCurrentLocation} from "./weatherApiWorker";
import {weatherToCardController} from "./controllers";
import {initializeHeaderMenu} from "../components/HeaderMenu";
import {WeatherTypes} from "../components/WeatherIcon/WeatherIcon.model";
import {createCityCard} from "../components/CityCard";
import {favoriteCitiesContainerId} from "../containers/FavoriteCities";
import {addCityToStorage, getCitiesState} from "./LocalStorage";

const waitingString = 'Подождите, данные загружаются';

function setCurrentGeolocationWeatherUpdating(){
    initializeHeaderMenu({weatherType: WeatherTypes.Update, city: waitingString});
}

export async function updateCurrentGeolocationWeather(defaultCity){
    let weather;
    try{
        setCurrentGeolocationWeatherUpdating();
        weather = await requestWeatherForCurrentLocation();

        if(weather){
            const headerMenuData = weatherToCardController(weather);
            setTimeout(() => initializeHeaderMenu(headerMenuData),500)
        }

    }catch (e){
        console.log(e);
        if(defaultCity){
            weather = await requestWeatherForCity(defaultCity);
            if(weather){
                const headerMenuData = weatherToCardController(weather);
                setTimeout(() => initializeHeaderMenu(headerMenuData),500)
            }
        }
    }
}

export function submitCityForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputCity = formData.get('city');
    if(inputCity){
        addCityToStorage(inputCity);
    }
    event?.target?.reset();
}

export async function addCityCard(city, onPosition){
    try{
        const cardLoading = createCityCard(city, {isLoading: true,city});
        console.log(cardLoading);
        const cardsContainer = document.getElementById(favoriteCitiesContainerId);
        cardsContainer.appendChild(cardLoading);

        const weather = await requestWeatherForCity(city);
        const cardData = weatherToCardController(weather);
        const card = createCityCard(city,cardData);
        cardsContainer.removeChild(cardLoading);
        cardsContainer.appendChild(card);

        if(onPosition){
            cardsContainer.insertBefore(card, cardsContainer.children[onPosition]);
        }else{
            cardsContainer.appendChild(card);
        }

        console.log(cardData);
    }catch (e){
        console.log(e);
    }
}

export function syncCardsFromStorage(){
    const cities = getCitiesState();
    const cardsContainer = document.getElementById(favoriteCitiesContainerId);
    const nodes = cardsContainer.childNodes;
    console.log(nodes);
    // Delete necessary
    nodes.forEach((node) => {
        console.log(node);
        if(node.id){
            const cityName = `${node.id}`.replace('city-card-','');
            if(!cities.includes(cityName)){
                cardsContainer.removeChild(node);
            }
        }
    })

    //Add new
    cities.forEach((city,index) => {
        const card = document.getElementById(`city-card-${city}`);
        console.log(card);
        if(!card){
            addCityCard(city, index);
        }
    })
}

export function storageChangesListener(){
    console.log('storage event');
    syncCardsFromStorage();
}
