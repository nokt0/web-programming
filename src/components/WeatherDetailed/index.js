import './weatherDetailed.scss';
export WeatherDetailed from './weatherDetailed.html'

export const weatherDetailedId = 'weather-detailed';

export function createWeatherDetailed(details = [], id){
    if(!id) {
        return null;
    }
    const list = document.createElement("ul");
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

    document.getElementById(id).appendChild(list);
}
