

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
    return fetch(`${process.env.API_URL || secrets.API_URL}/weather/coordinates?lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .catch((e)=>{
            console.log(e);
            alert(`Ошибка во время выполнения запроса ${e}`)});
}

export async function requestWeatherForCity(city){

    return fetch(`${process.env.API_URL || secrets.API_URL}/weather/city?name=${decodeURI(city)}`)
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


