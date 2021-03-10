import './addCity.scss';
import {createRoundButton} from "../RoundButton";
export AddCity from './addCity.html';

const cityInputContainerId = 'add-city-input-container';

export function initializeAddCity(){
    const inputContainer = document.getElementById(cityInputContainerId);
    const createdButton = createRoundButton('+');
    inputContainer.appendChild(createdButton);
}
