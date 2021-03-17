const API_KEY = 'b332962152d1ba0bb3f785794f1dc02d';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru';

const geolocation = navigator.geolocation;


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
    return fetch(`${API_URL}&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json());
}

export async function requestWeatherForCurrentLocation(){
    const {latitude,longitude} = await getCurrentLocation();
    return await requestWeather(latitude,longitude)
}
