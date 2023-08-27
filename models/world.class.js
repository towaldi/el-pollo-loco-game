class World {
    /**
     * Variables
     */

    character = new Character();
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;
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
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // Move hole canvas
        this.ctx.translate(this.cameraPosX, 0);

        // Display objects
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
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
            this.ctx.save();
            this.ctx.translate(movableObject.width, 0);
            this.ctx.scale(-1, 1);
            movableObject.posX = movableObject.posX * -1;
        }
        this.ctx.drawImage(movableObject.img, movableObject.posX, movableObject.posY, movableObject.width, movableObject.height);
        if (movableObject.otherDirection) {
            movableObject.posX = movableObject.posX * -1;
            this.ctx.restore();
        }
    }


    setWorld() {
        this.character.world = this;
    }
}