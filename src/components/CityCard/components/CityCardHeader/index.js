import './cityCardHeader.scss';
import CityCardHeader from './cityCardHeader.html';

const cityCardHeaderId = 'city-card-header';
const cityCardHeaderCityId = `${cityCardHeaderId}-city`;
const cityCardHeaderDegreeId = `${cityCardHeaderId}-degree`;

export function createCityCardHeader(id, {city,degree}){
    const cardHeaderHtml = new DOMParser().parseFromString(CityCardHeader, 'text/html');
    const cityCardHeader = cardHeaderHtml.getElementById(cityCardHeaderId);
    const cityCardHeaderCity = cardHeaderHtml.getElementById(cityCardHeaderCityId);
    const cityCardHeaderDegree = cardHeaderHtml.getElementById(cityCardHeaderDegreeId);

    cityCardHeaderCity.innerText = city;
    cityCardHeaderDegree.innerText = degree;

    cityCardHeader.id = `${cityCardHeaderId}-${id}`;
    cityCardHeaderCity.id = `${cityCardHeaderCity}-${id}`;
    cityCardHeaderDegree.id = `${cityCardHeaderDegreeId}-${id}`;

    return cityCardHeader;
}
