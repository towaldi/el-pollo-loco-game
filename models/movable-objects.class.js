/**
 * Template
 * 
 * Variables: osition x, position y and image
 * Function
 */

class MovableObject {
    posX = 60;
    posY = 30;
    height = 120;
    width = 60;
    img;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveLeft() {
        
    }

    moveRight() {
        console.log('moving right');
    }
}