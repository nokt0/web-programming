import {HeaderMenu, initializeHeaderMenu} from '../components/HeaderMenu/';
import {FavoriteCities, initializeFavoriteCities} from '../components/FavoriteCities';
import {App, headerRoot, bodyRoot} from '../components/App';
import '../components/HeaderMenu/headerMenu.scss'

window.onload = function() {
  document.getElementById('root').innerHTML = App;
  document.getElementById(headerRoot).innerHTML = HeaderMenu;
  document.getElementById(bodyRoot).innerHTML = FavoriteCities;

  initializeHeaderMenu();
  initializeFavoriteCities();
}
