class World {
    /**
     * Variables
     */

    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    cameraPosX = 0;
    statusBar = new StatusBar();
    coinBar = new CoinBar();
    bottlebar = new BottleBar();
    endbossBar = new EndbossBar();
    throwableObjects = [];
    bottleStrikesEndboss = false;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    /**
     * Links the Character and World class.
     */

    setWorld() {
        this.character.world = this;
    }


    /**
     * Checks for collisions and game updates at a set interval.
     */

    run() {
        setInterval(() => {
            this.checkCollision();
            this.checkThrowObject();
        }, 200);
    }


    /**
     * Checks for thrown bottles at a set interval.
     */

    runBottles() {
        setStoppableInterval(() => {
            this.checkThrowObjects();
        }, 700);
    }


    /**
     * Checks for collisions between the character and chickens.
     */

    checkCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                console.log('Collision with character!', this.character.energy);
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }


    /**
     * Kills a chicken enemy.
     * @param {object} enemy - The enemy to be killed.
     */

    killChicken(enemy) {
        this.character.speedY = 30;
        this.chickenIsDead(enemy);

        setTimeout(() => {
            this.deleteEnemy(enemy);
        }, 500);
    }


    /**
     * Sets the enemy's energy to 0 and plays a death sound.
     * @param {object} enemy - The enemy that is dying.
     */

    chickenIsDead() {
        enemy.energy = 0;
        // ChickenDeadSound.play();
    }


    /**
     * Removes the killed enemy from the enemy array.
     * @param {object} enemy - The enemy to be removed.
     */

    deleteEnemy(enemy) {
        let i = this.level.enemies.indexOf(enemy);
        if (i > -1) {
            this.level.enemies.splice(i, 1);
            checkKilledChciken();
        }
    }


    // --> to continue!


    checkThrowObject() {
       if (this.keyboard.d) {
            let bottle = new ThrowableObject(this.character.posX + 100, this.character.posY + 100);
            this.throwableObjects.push(bottle)
       }
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // Move hole canvas
        this.ctx.translate(this.cameraPosX, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.cameraPosX, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottlebar);
        this.addToMap(this.endbossBar);
        this.ctx.translate(this.cameraPosX, 0);

        this.ctx.translate(-this.cameraPosX, 0);

        // 'draw()' called again and again
        let self = this;
	    requestAnimationFrame(function() {
		    self.draw();
	    });
    }


    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }


    addToMap(movableObject) {
        if (movableObject.otherDirection) {
            this.flipImage(movableObject);
        }

        movableObject.draw(this.ctx);
        movableObject.drawFrame(this.ctx);
        
        if (movableObject.otherDirection) {
            this.flipImageBack(movableObject);
        }
    }


    flipImage(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.posX = movableObject.posX * -1;
    }


    flipImageBack(movableObject) {
        movableObject.posX = movableObject.posX * -1;
        this.ctx.restore();
    }
}