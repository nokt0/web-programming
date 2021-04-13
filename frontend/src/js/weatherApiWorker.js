const API_KEY = 'b332962152d1ba0bb3f785794f1dc02d';
const API_URL = `http://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&appid=${API_KEY}`;

let geolocation = navigator.geolocation;

function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            resolve({latitude, longitude});
        },
            (err) => {
            console.error(err);
            reject(err);
        }, {enableHighAccuracy: true});
    })
}

function requestWeather(latitude, longitude) {
    return fetch(`${API_URL}&lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .catch((e)=>{
            console.log(e);
            alert(`Ошибка во время выполнения запроса ${e}`)});
}

export async function requestWeatherForCurrentLocation(){
    let latitude,longitude;
    try{
        const coords = await getCurrentLocation();
        latitude = coords.latitude;
        longitude = coords.longitude;
    }catch (e){
        throw new Error('Cant get geolocation')
    }
    return await requestWeather(latitude,longitude)
}

export async function requestWeatherForCity(city){
    return fetch(`${API_URL}&q=${city}`)
        .then(response => response.json())
        .catch((e)=>{
            console.log(e);
            alert(`Ошибка во время выполнения запроса ${e}`)});
}
