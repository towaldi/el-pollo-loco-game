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
    imageCache = {};

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...]
     */

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = path;
        });
    }


    moveLeft() {
        
    }


    moveRight() {
        console.log('moving right');
    }
}