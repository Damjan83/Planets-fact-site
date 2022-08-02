import burgerMenu from './components/mobile-menu';
import * as planet from './components/renderData';
import getData from "./utility/getData";

getData(planet.renderPlanet)

planet.changePlanet();
burgerMenu();
planet.infoMenu();




