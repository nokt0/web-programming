import {HeaderMenu, initializeHeaderMenu} from '../components/HeaderMenu/';
import {App, headerRoot, bodyRoot} from '../components/App';
import '../components/HeaderMenu/headerMenu.scss'

window.onload = function() {
  document.getElementById('root').innerHTML = App;
  document.getElementById(headerRoot).innerHTML = HeaderMenu;
  initializeHeaderMenu();
}
