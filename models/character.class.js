class Character extends MovableObject {

    posY = 60;
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

    images_jumping = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];
    
    world;
    walkingSound = new Audio('audio/walking_on_sand.mp3');


    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.images_walking);
        this.loadImages(this.images_jumping);
        this.applyGravity();
        this.animate();
    }


    animate() {

        setInterval(() => {
            this.walkingSound.pause();
            // Move right
            if (this.world.keyboard.right && this.posX < this.world.level.levelEndX) {
                this.moveRight();
                this.otherDirection = false;
                this.walkingSound.play();
            }
            // move left
            if (this.world.keyboard.left && this.posX > 0) {
                this.moveLeft();
                this.otherDirection = true;
                this.walkingSound.play();
            }
            // Jump
            if (this.world.keyboard.space && !this.isAboveGround()) {
                this.jump();
            }

            this.world.cameraPosX = -this.posX + 80;

		}, 1000 / 24);
        
		setInterval(() => {
            if (this.isAboveGround()) {
                this.playAnimation(this.images_jumping);
            } else if (this.world.keyboard.right || this.world.keyboard.left) {
                // Walk animation
                this.playAnimation(this.images_walking);

            }

		}, 1000 / 24);
	}
}