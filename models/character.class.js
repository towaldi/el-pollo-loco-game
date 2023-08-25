class Character extends MovableObject {

    posY = 160;
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


    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.images_walking);

        this.animate();
    }


    animate() {

        setInterval(() => {
            // Mover right
            if (this.world.keyboard.right) {
                this.posX += this.speed;
                this.otherDirection = false;
            }
            
            // move left
            if (this.world.keyboard.left) {
                this.posX -= this.speed;
                this.otherDirection = true;
            }

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