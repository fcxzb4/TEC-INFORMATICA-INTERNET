import { createHeader } from "./../../view/js/header.js";
import { createCards } from "./../../view/js/projects/cards.js";

import { switchMenu } from "./../menu.js";
import { switchBanner } from "./banner.js";

window.switchMenu = switchMenu
window.switchBanner = switchBanner

document.addEventListener('DOMContentLoaded', ()=>{
    createHeader()
    createCards()
});