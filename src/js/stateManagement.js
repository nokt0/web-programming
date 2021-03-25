import {requestWeatherForCity, requestWeatherForCurrentLocation} from "./weatherApiWorker";
import {weatherToCardController} from "./controllers";
import {initializeHeaderMenu} from "../components/HeaderMenu";
import {WeatherTypes} from "../components/WeatherIcon/WeatherIcon.model";
import {createCityCard} from "../components/CityCard";
import {favoriteCitiesContainerId} from "../containers/FavoriteCities";
import {addCityToStorage, deleteCityFromStorage, getCitiesState} from "./LocalStorage";

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
        alert('Пожалуйста, разрешите доступ к геолокации');
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
        try{
            addCityToStorage(inputCity);
        }catch (e){
            alert('Город уже добавлен в избранное');
        }
    }
    event?.target?.reset();
}

export async function addCityCard(city, onPosition){
    const cardsContainer = document.getElementById(favoriteCitiesContainerId);
    const cardLoading = createCityCard(city, {isLoading: true,city});
    cardsContainer.appendChild(cardLoading);

    try{
        const weather = await requestWeatherForCity(city);
        const cardData = weatherToCardController(weather);
        const card = createCityCard(city,cardData);
        cardsContainer.removeChild(cardLoading);

        if(onPosition){
            cardsContainer.insertBefore(card, cardsContainer.children[onPosition]);
        }else{
            cardsContainer.appendChild(card);
        }
        return cardsContainer;
    }catch (e){
        console.log(e);
        deleteCityFromStorage(city);
        alert('Произошла ошибка при добавлении города.');
        cardsContainer.removeChild(cardLoading);
    }
}

export function syncCardsFromStorage(){
    const cities = getCitiesState();
    const cardsContainer = document.getElementById(favoriteCitiesContainerId);
    const nodes = cardsContainer.childNodes;
    console.log(nodes);
    // Delete necessary
    nodes.forEach((node) => {
        if(node.id){
            const cityName = `${node.id}`.replace('city-card-','');
            if(!cities.includes(cityName)){
                cardsContainer.removeChild(node);
            }
        }
    })

    const cityPromises = [];

    //Add new
    cities.forEach((city,index) => {
        const card = document.getElementById(`city-card-${city}`);
        if(!card){
            cityPromises.push(addCityCard(city, index));
        }
    })

    Promise.all(cityPromises).catch((e)=> alert(`Не удалось загрузить все города ${e}`));

}

export function storageChangesListener(){
    syncCardsFromStorage();
}
