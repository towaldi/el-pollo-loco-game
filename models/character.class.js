class Character extends MovableObject {

    posY = 120;
    height = 320;
    width = 100;
    speed = 8;

    images_walking = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    world;
    walkingSound = new Audio('audio/walking_on_sand.mp3');


    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.images_walking);

        this.animate();
    }


    animate() {

        setInterval(() => {
            this.walkingSound.pause();
            // Move right
            if (this.world.keyboard.right && this.posX < this.world.level.levelEndX) {
                this.posX += this.speed;
                this.otherDirection = false;
                this.walkingSound.play();
            }
            
            // move left
            if (this.world.keyboard.left && this.posX > 0) {
                this.posX -= this.speed;
                this.otherDirection = true;
                this.walkingSound.play();
            }

            this.world.cameraPosX = -this.posX + 80;

		}, 1000 / 24);
        
		setInterval(() => {
            if (this.world.keyboard.right || this.world.keyboard.left) {
                // Walk animation
                let i = this.currentImage % this.images_walking.length; 
			    let path = this.images_walking[i];
			    this.img = this.imageCache[path];
			    this.currentImage++;
            }
		}, 1000 / 24);
	}

     
    jump() {

    }
}