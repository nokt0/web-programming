import {requestWeatherForCity, requestWeatherForCurrentLocation} from "./weatherApiWorker";
import {weatherToCardController} from "./controllers";
import {initializeHeaderMenu} from "../components/HeaderMenu";
import {WeatherTypes} from "../components/WeatherIcon/WeatherIcon.model";
import {createCityCard} from "../components/CityCard";
import {favoriteCitiesContainerId} from "../containers/FavoriteCities";
import {addCityToStorage, getCitiesState} from "./LocalStorage";
import {postFavoriteCity} from "./favoritesApiWorker";

const waitingString = 'Подождите, данные загружаются';

export async function submitCityForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputCity = formData.get('city');
    if (inputCity) {
        try {
            const postedCity = await postFavoriteCity(inputCity);
            if (postedCity?.data) {
                await addCityCard(postedCity);
                addCityToStorage(postedCity.data?.name);
            }
        } catch (e) {
            alert('Город уже добавлен в избранное');
        }
    }
    event?.target?.reset();
}

function setCurrentGeolocationWeatherUpdating() {
    initializeHeaderMenu({weatherType: WeatherTypes.Update, city: waitingString});
}

export async function updateCurrentGeolocationWeather(defaultCity) {
    let weather;
    try {
        setCurrentGeolocationWeatherUpdating();
        weather = await requestWeatherForCurrentLocation();

        if (weather) {
            const headerMenuData = weatherToCardController(weather);
            setTimeout(() => initializeHeaderMenu(headerMenuData), 500)
        }

    } catch (e) {
        console.log(e);
        alert('Пожалуйста, разрешите доступ к геолокации');
        if (defaultCity) {
            weather = await requestWeatherForCity(defaultCity);
            if (weather) {
                const headerMenuData = weatherToCardController(weather);
                setTimeout(() => initializeHeaderMenu(headerMenuData), 500)
            }
        }
    }
}

export async function addCityCard(weather) {
    const cardsContainer = document.getElementById(favoriteCitiesContainerId);
    const cardData = weatherToCardController(weather);
    const {city} = cardData;
    const cardLoading = createCityCard(city, {isLoading: true, city});
    cardsContainer.appendChild(cardLoading);

    try {
        const card = createCityCard(city, cardData);
        cardsContainer.removeChild(cardLoading);
        cardsContainer.appendChild(card);
    } catch (e) {
        console.log(e);
        alert('Произошла ошибка при добавлении города.');
        cardsContainer.removeChild(cardLoading);
    }
}

export function syncCardsFromStorage() {
    const cities = getCitiesState();
    const cardsContainer = document.getElementById(favoriteCitiesContainerId);
    const nodes = cardsContainer.childNodes;
    nodes.forEach((node) => {
        if (node.id) {
            const cityName = `${node.id}`.replace('city-card-', '');
            if (!cities.includes(cityName)) {
                cardsContainer.removeChild(node);
            }
        }
    })

    //Add new
    cities.forEach((city) => {
        const card = document.getElementById(`city-card-${city}`);
        if (!card) {
            requestWeatherForCity(city).then((json) => json && addCityCard(json));
        }
    })
}

export function storageChangesListener() {
    syncCardsFromStorage();
}
