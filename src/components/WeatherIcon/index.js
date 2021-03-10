import {WeatherIcons} from "./WeatherIcon.model";


export function createWeatherIcon(id,weather){
    const iconPath = WeatherIcons[weather];
    if(!iconPath){
        return null;
    }

    const iconContainer = document.createElement('div');
    iconContainer.id = `weather-icon-container-${id}`;
    iconContainer.classList.add('weather-icon__container');

    const icon = document.createElement('img');
    icon.id = `weather-icon-${id}`;
    icon.classList.add('weather-icon__icon');
    icon.src = iconPath;

    iconContainer.appendChild(icon);
    return iconContainer;
}
