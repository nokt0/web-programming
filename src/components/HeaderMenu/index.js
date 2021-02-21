import './headerMenu.scss'
import {UpdateButton} from './components/UpdateButton'
export HeaderMenu from './headerMenu.html'

export function initializeHeaderMenu(){
    document.getElementById('header-menu-top').insertAdjacentHTML("beforeend", UpdateButton);
}
