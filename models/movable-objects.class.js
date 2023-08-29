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
    currentImage = 0;
    speed = 0.1;
    otherDirection = false;

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
            this.imageCache[path] = img;
        });
    }


    moveLeft() {
        setInterval(() => {
            this.posX -= this.speed;
        }, 1000 / 60)
    }


    moveRight() {
        console.log('moving right');
    }


    playWalkingAnimation(images) {
        let i = this.currentImage % this.images_walking.length; 
		let path = images[i];
		this.img = this.imageCache[path];
		this.currentImage++;
    }
}