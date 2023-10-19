class ThrowableObject extends MovableObject {


    images_throwing_bottle = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];


    images_splash_bottle = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];


    constructor(posX, posY) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.images_throwing_bottle);
        this.loadImages(this.images_splash_bottle);
        this.posX = posX;
        this.posY = posY;
        this.throw();
        this.bottleAnimation();
    }


    /**
     * Initiates the throwing action for the throwable object.
     */

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.posX += 10;
        }, 25)
    }


    /**
     * Handles the animations and interactions of the throwable object.
     */

    bottleAnimation() {
        this.splashOrThrowingAnimation();
        this.updateBottleStrikesEndboss();
    }


    /**
     * Determines whether to play the splash animation or the throwing animation based on the object's position and collision state.
     */

    splashOrThrowingAnimation() {
        this.splashAnimation = setInterval(() => {
            if (this.posY || world.bottleStrikesEndboss) {
                this.playSplashAnimation();
            } else {
                this.playAnimation(this.images_throwing_bottle);
            }
        }, 1000 / 15);
    }


    /**
     * Updates the world.bottleStrikesEndboss variable after a delay.
     */

    updateBottleStrikesEndboss() {
        setTimeout(() => {
            world.bottleStrikesEndboss = false;
        }, 50);
    }


    /**
     * Plays the splash animation and adjusts the throwable object's properties accordingly.
     */

    playSplashAnimation() {
        this.playAnimation(this.images_splash_bottle);
        // bottleSplashSound.play();
        this.speed = 0;
        this.height = 100;
        this.splashEffect();
        clearInterval(this.splashAnimation);
    }


    /**
     * Simulates a splash effect by continuously increasing the throwable object's y position.
     */
    
    splashEffect() {
        setInterval(() => {
            this.posY += 10;
            this.deleteBottle();
        }, 70);
    }


    /**
     * Simulates the deletion of the throwable object by moving it out of the visible area after a delay.
     */

    deleteBottle() {
        setTimeout(() => {
            this.posY = 500;
        }, 300);
    }
}