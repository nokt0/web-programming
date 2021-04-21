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

export async function submitCityForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputCity = formData.get('city');
    if (inputCity) {
        try {
            const requestedCity = await requestWeatherForCity(inputCity);
            if (requestedCity?.message === 'city not found') {
                throw new Error('Город с таким названием не найден');
            }
            const currentCities = getCitiesState();
            if(!requestedCity?.name){
                throw new Error('Не удалось получить данные с api');
            }
            if(currentCities.includes(requestedCity?.name)){
                throw new Error('Город уже добавлен в избранное');
            }
            addCityToStorage(requestedCity.name);
        } catch (e) {
            alert(e.message || 'Город уже добавлен в избранное');
        }
    }
    event?.target?.reset();
}


export async function addCityCard(weather){
    const cardsContainer = document.getElementById(favoriteCitiesContainerId);
    const cardData = weatherToCardController(weather);
    const {city} = cardData;
    const cardLoading = createCityCard(city, {isLoading: true,city});
    cardsContainer.appendChild(cardLoading);

    try{
        const card = createCityCard(cardData.city,cardData);
        cardsContainer.removeChild(cardLoading);
        cardsContainer.appendChild(card);

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
    cities.forEach((city) => {
        const card = document.getElementById(`city-card-${city}`);
        if(!card){
            cityPromises.push(requestWeatherForCity(city));
        }
    })

    Promise.all(cityPromises)
        .then((citiesWeather)=>{
            citiesWeather.forEach((weather) => addCityCard(weather))
            return citiesWeather;
        })
        .catch((e)=> alert(`Не удалось загрузить все города ${e}`));

}

export function storageChangesListener(){
    syncCardsFromStorage();
}
