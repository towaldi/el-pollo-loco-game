/**
 * Template
 * 
 * Variables: osition x, position y and image
 * Function
 */

class MovableObject extends DrawableObject {

    speed = 0.1;
    otherDirection = false;
    speedPosY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    

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


    isColliding(movableObject) { 
        return  this.posX + this.width > movableObject.posX &&
                this.posY + this.height > movableObject.posY &&
                this.posX < movableObject.posX &&
                this.posY < movableObject.posY + movableObject.height;
    }


    hit() {
		this.energy -= 5;
		if (this.energy < 0) {
			this.energy = 0;
		} else {
            this.lasHit = new Date().getTime();
        }
	}


    isHurt() {
        // Difference in ms
        let timepassed = new Date().getTime() - this.lastHit;
        // In seconds
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }


    isDead() {
        return this.energy == 0;
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
        let i = this.currentImage % images.length; 
		let path = images[i];
		this.img = this.imageCache[path];
		this.currentImage++;
    }
}