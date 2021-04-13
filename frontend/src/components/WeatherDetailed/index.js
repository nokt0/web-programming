import './weatherDetailed.scss';

export const weatherDetailedId = 'weather-detailed';
const itemClassName = 'weather-detailed__item';
const titleClassName = 'weather-detailed__title';

export function createWeatherDetailed(id,details = []){
    const list = document.createElement("ul");

    if(details.length === 0 || !id){
        return null;
    }

    list.id = `${weatherDetailedId}-${id}`;
    list.classList.add('weather-detailed');
    //Create weather info list
    details.forEach(({title, value}) => {
        const listItem = document.createElement("li");
        const titleSpan = document.createElement("span");
        const detailsSpan = document.createElement("span");
        listItem.classList.add(itemClassName);
        titleSpan.classList.add(titleClassName);


        titleSpan.innerText = title;
        detailsSpan.innerText = value;

        listItem.appendChild(titleSpan);
        listItem.appendChild(detailsSpan);
        list.appendChild(listItem);
    });
    return list;
}
