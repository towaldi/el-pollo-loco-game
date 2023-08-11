/**
 * Global variables
 */

let canvas;
let ctx;
let character = new Image();


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
    character.src = '../img/2_character_pepe/2_walk/W-21.png';

    setTimeout( function() {
        ctx.drawImage(character, 20, 20, 30, 60);
    }, 2000);
}