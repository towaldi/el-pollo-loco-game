/**
 * Template
 * 
 * Variables: osition x, position y and image
 * Function
 */

class MovableObject {
    posX = 0;
    posY = 80;
    height = 60;
    width = 50;
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