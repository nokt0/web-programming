
export const WeatherTypes = {
    Update: 'Update',
    Clouds: 'Clouds',
    Drizzle: 'Drizzle',
    Snow: 'Snow',
    Thunderstorm: 'Thunderstorm',
    Rain: 'Rain',
    Clear: 'Clear',
    Tornado: 'Tornado',
    Mist: 'Mist',
    Smoke: 'Smoke',
    Haze: 'Haze',
    Dust: 'Dust',
    Fog: 'Fog',
    Sand: 'Sand',
    Ash: 'Ash',
    Squall: 'Squall',
}

const fogIcon = './assets/img/017-foog.svg'

export const WeatherIcons = {
    [WeatherTypes.Update]: './assets/img/update-arrows.svg',
    [WeatherTypes.Clouds]: './assets/img/001-cloud.svg',
    [WeatherTypes.Drizzle]: './assets/img/003-rainy.svg',
    [WeatherTypes.Thunderstorm]: './assets/img/036-storm-4.svg',
    [WeatherTypes.Snow]: './assets/img/012-snowy-1.svg',
    [WeatherTypes.Rain]: './assets/img/004-rainy-1.svg',
    [WeatherTypes.Clear]: './assets/img/039-sun.svg',
    [WeatherTypes.Tornado]: './assets/img/046-tornado.svg',
    [WeatherTypes.Mist]: fogIcon,
    [WeatherTypes.Smoke]: fogIcon,
    [WeatherTypes.Haze]: fogIcon,
    [WeatherTypes.Dust]: fogIcon,
    [WeatherTypes.Fog]: fogIcon,
    [WeatherTypes.Sand]: fogIcon,
    [WeatherTypes.Ash]: fogIcon,
    [WeatherTypes.Squall]: fogIcon,
}
