/**
 * Global variables
 */

let canvas;
let world;
let keyboard = new Keyboard();

/**
 * Function init() get's executed when page is loaded
 * 
 * 1. Load 'canvas'
 * 2. Object responsible to display sth. in 2d on canvas
 * 3. Load image for 'character'
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);

    console.log('My character is', world.character);
}


window.addEventListener("keypress", (event) => {
	console.log(event);
});