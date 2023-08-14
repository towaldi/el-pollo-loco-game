/**
 * Template
 * 
 * Variables: osition x, position y and image
 * Function
 */

class MovableObject {
    posX;
    posY;
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