import { getJSON, getLocation } from './utilities.js';
import QuakesController from './QuakesController.js';

const controller = new QuakesController('#quakeList');
controller.init();
document.getElementById("radius").onchange = controller.init;
