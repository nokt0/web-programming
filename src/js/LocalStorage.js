const citiesStorageKey = 'app-cities-data'
const localStorage = window.localStorage;

export function getCitiesState(){
    const citiesState = JSON.parse(localStorage.getItem(citiesStorageKey));
    if(!citiesState){
        localStorage.setItem(citiesStorageKey, JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem(citiesStorageKey));
}

function setCitiesState(cities){
    localStorage.setItem(citiesStorageKey, JSON.stringify(cities));
}

export function addCityToStorage(city) {
    if (city) {
        const citiesState = getCitiesState();
        if(citiesState.includes(city)){
            throw Error('Город уже добавлен в избранное');
        }
        citiesState.push(city);
        setCitiesState(citiesState);
        window.dispatchEvent(new Event('storageChanged'));
    }
}

export function deleteCityFromStorage(city) {
    if (city) {
        const citiesState = getCitiesState();
        const newCities = citiesState.filter((item) => item !== city);
        setCitiesState(newCities);
        window.dispatchEvent(new Event('storageChanged'));
    }
}
