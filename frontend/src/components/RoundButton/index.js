import RoundButton from './roundButton.html';
import './roundButton.scss';

export function createRoundButton(text){
    const buttonHtml = new DOMParser().parseFromString(RoundButton, 'text/html');
    const roundButton = buttonHtml?.getElementsByTagName('button')[0];
    roundButton.innerText = text;

    return roundButton;
}
