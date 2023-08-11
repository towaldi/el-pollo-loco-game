/**
 * Global variables
 */

let canvas;
let ctx;
let character = new MovableObject();


/**
 * Function init() get's executed when page is loaded
 * 
 * 1. Load 'canvas'
 * 2. Object responsible to display sth. in 2d on canvas
 * 3. Load image for 'character'
 */
function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    console.log('My character is', character);
}