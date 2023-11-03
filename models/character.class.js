/**
 * Character class that extends 'MovableObject'
 * -> Character moves around, jumps and interacts with the other game objects
 * @extends MovableObject
 */

class Character extends MovableObject {

    posY = 60;
    height = 320;
    width = 100;
    speed = 8;
    longIdleState = 0;

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

    images_dead = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];

    images_hurt = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];

    world;
    walkingSound = new Audio('audio/walking_on_sand.mp3');


    /**
     * Creates new 'Chracter' instance
     * -> Loads image(s) of character in various states (walking. jumping, etc.)
     * -> Applies gravity to the character + starts animation loop for movement
     */

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.images_walking);
        this.loadImages(this.images_jumping);
        this.loadImages(this.images_dead);
        this.loadImages(this.images_hurt);
        this.applyGravity();
        this.animate();
    }


    /**
     * Controls character movement + animation based on current state
     * -> Updates character's position + applies vertical speed to jumoping
     * -> Adjusts camera position -> focus on character with a slight offset
     */

    animate() {
        setInterval(() => {
            this.walkingSound.pause();
            // Move right
            if (this.world && this.world.keyboard.right && this.posX < this.world.level.levelEndX) {
                this.moveRight();
                this.otherDirection = false;
                this.walkingSound.play();
            }
            // move left
            if (this.world && this.world.keyboard.left && this.posX > 0) {
                this.moveLeft();
                this.otherDirection = true;
                this.walkingSound.play();
            }
            // Jump
            if (this.world && this.world.keyboard.space && !this.isAboveGround()) {
                this.jump();
            }

            this.world.cameraPosX = -this.posX + 80;

		}, 1000 / 24);


        /**
         * Is used to control the character's animation based on it's current state
         * -> Checks if character is in various states like dead, hurt, jumping, walking, standing or idle state -> triggers corresponding animation
         * -> Interval 100ms -> smooth anaimations
         */
        
		setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.images_dead);
            } else if (this.isHurt()) {
                this.playAnimation(this.images_hurt);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.images_jumping);
            } else if (this.world.keyboard.right || this.world.keyboard.left) {
                // Walk animation
                this.playAnimation(this.images_walking);
            }
		}, 1000 / 24);
	}


    /**
         * Animation for character's death
         * -> Triggers 'characteDeadSound'
         * -> Stops game sound
         * -> Calls 'gameLost' function
         * -> Stops the game
         */

    deathAnimation() {
        this.playAnimation(this.images_dead);
        characterDeadSound.play();
        setGameSoundsToNull();
        gameLost();
        this.stopGameGeneral();
    }


    /**
     * Sets timeout to stop game + reset variable 'arrivedEndboss' = false (after short delay)
     */

    stopGameGeneral() {
        setTimeout(() => {
            this.stopGame();
            arrivedEndboss = false;
        },  700);
    }


    /**
     * Hurt animation of character
     * -> Plays hurt sound
     * -> Resets 'longIdleState'
     */

    hurtAnimation() {
        this.playAnimation(this.images_hurt);
        characterHurtSound.play();
        this.longIdleState = 0;
    }


    /**
     * Jump animation of character
     * -> Plays jump sound
     * -> Resets 'longIdleState'
     */

    jumpAnimation() {
        this.playAnimation(this.images_jumping);
        characterJumpSound.play();
        this.longIdleState = 0;
    }


    /**
     * Checks if character is moving to left or right based on the keyboard input
     * @returns {boolean} -> 'true' = character is moving, 'false' = not moving
     */

    isWalking() {
        return this.world.keyboard.right || this.world.keyboard.left;
    }


    /**
     * Plays walking animation
     * -> Resets 'longIdleState'
     */

    walkingAnimation() {
        this.playAnimation(this.images_walking);
        this.longIdleState = 0;
    }


    /**
     * Checks if character is standing -> comparing 'longIdleState' against threshold
     * @returns {boolean} -> 'true' = character is standing, 'false' = not standing
     */

    isStanding() {
        return this.longIdleState < 30;
    }


    /**
     * Plays idle animation of the character
     * -> Increase counter of 'longIdleState' to track the duration of the state
     */

    idleAnimation() {
        this.playAnimation(this.images_idle);
        this.longIdleState++;
    }


    /**
     * Plays long idle animation of the character
     * -> Used when character remains idle for an extende period of time
     */

    longIdleAnimation() {
        this.playAnimation(this.images_long_idle);
    }
}