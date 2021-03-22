const citiesStorageKey = 'app-cities-data'
const localStorage = window.localStorage;

export function getCitiesState(){
    return JSON.parse(localStorage.getItem(citiesStorageKey));
}

function setCitiesState(cities){
    localStorage.setItem(citiesStorageKey, JSON.stringify(cities));
}

function checkStorageExist() {
    if (!getCitiesState()) {
        localStorage.setItem(citiesStorageKey, JSON.stringify([]));
    }
}

export function addCityToStorage(city) {
    if (city) {
        checkStorageExist();
        const citiesState = getCitiesState();
        citiesState.push(city);
        setCitiesState(citiesState);
        window.dispatchEvent(new Event('storageChanged'));
    }
}

export function deleteCityFromStorage(city) {
    if (city) {
        checkStorageExist();
        const citiesState = getCitiesState();
        const newCities = citiesState.filter((item) => item !== city);
        setCitiesState(newCities);
        window.dispatchEvent(new Event('storageChanged'));
    }
}
