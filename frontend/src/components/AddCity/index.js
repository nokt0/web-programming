import './addCity.scss';
import {createRoundButton} from "../RoundButton";
import {submitCityForm} from "../../js/stateManagement";
export AddCity from './addCity.html';

const cityInputContainerId = 'add-city-input-container';

export function initializeAddCity(){
    const inputContainer = document.getElementById(cityInputContainerId);
    const form = inputContainer.querySelector('form');
    form.onsubmit = submitCityForm;

    const createdButton = createRoundButton('+');
    createdButton.type = 'submit';
    form.appendChild(createdButton);
}
