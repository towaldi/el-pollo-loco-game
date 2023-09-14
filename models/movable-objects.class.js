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
    speedPosY = 0;
    acceleration = 2.5;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedPosY > 0) {
                this.posY -= this.speedPosY;
                this.speedPosY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    isAboveGround() {
        return this.posY < 120;
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);
    }


    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '4';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.posX, this.posY, this.width, this.height);
            ctx.stroke();
        }
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
        this.posX -= this.speed;
    }


    moveRight() {
        this.posX += this.speed;
    }


    jump() {
        this.speedPosY = 30;
    } 


    playAnimation(images) {
        let i = this.currentImage % this.images_walking.length; 
		let path = images[i];
		this.img = this.imageCache[path];
		this.currentImage++;
    }
}