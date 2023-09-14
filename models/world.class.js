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


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollissions();
    }

    setWorld() {
        this.character.world = this;
    }


    checkCollissions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    console.log('Collision with character!', this.character.energy);
                }
            });
        }, 200);
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // Move hole canvas
        this.ctx.translate(this.cameraPosX, 0);

        // Display objects
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);

        // Move hole canvas reverse
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