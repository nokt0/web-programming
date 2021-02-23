import './weatherDetailed.scss';
export WeatherDetailed from './weatherDetailed.html'

export const weatherDetailedId = 'weather-detailed';

export function createWeatherDetailed(details = []){
    const list = document.createElement("ul");

    if(details.length === 0){
        return null;
    }

    list.classList.add('weather-detailed');
    //Create weather info list
    details.forEach(({title, value}) => {
        const listItem = document.createElement("li");
        const titleSpan = document.createElement("span");
        const detailsSpan = document.createElement("span");
        listItem.classList.add('weather-detailed__item');
        titleSpan.classList.add('weather-detailed__title');


        titleSpan.innerText = title;
        detailsSpan.innerText = value;

        listItem.appendChild(titleSpan);
        listItem.appendChild(detailsSpan);
        list.appendChild(listItem);
    });
    return list;
}
