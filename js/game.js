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
    world = new World(canvas, keyboard);

    console.log('My character is', world.character);
}


window.addEventListener("keydown", (event) => {
    if (event.keyCode == 37) {
		keyboard.left = true;
	}
	
	if (event.keyCode == 39) {
		keyboard.right = true;
	}
	
	if (event.keyCode == 38) {
		keyboard.up = true;
	}
	
	if (event.keyCode == 40) {
		keyboard.down = true;
	}
	
	if (event.keyCode == 32) {
		keyboard.space = true;
	}
	// console.log(event);
});


window.addEventListener("keyup", (event) => {
	if (event.keyCode == 37) {
		keyboard.left = false;
	}
	
	if (event.keyCode == 39) {
		keyboard.right = false;
	}
	
	if (event.keyCode == 38) {
		keyboard.up = false;
	}
	
	if (event.keyCode == 40) {
		keyboard.down = false;
	}
	
	if (event.keyCode == 32) {
		keyboard.space = false;
	}
    // console.log(event);
});