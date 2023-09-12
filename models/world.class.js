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
            this.ctx.save();
            this.ctx.translate(movableObject.width, 0);
            this.ctx.scale(-1, 1);
            movableObject.posX = movableObject.posX * -1;
        }
        this.ctx.drawImage(movableObject.img, movableObject.posX, movableObject.posY, movableObject.width, movableObject.height);
        
        this.ctx.beginPath();
        this.ctx.lineWidth = '4';
        this.ctx.strokeStyle = 'blue';
        this.ctx.rect(movableObject.posX, movableObject.posY, movableObject.posX + movableObject.width, movableObject.posY + movableObject.height);
        this.ctx.stroke();
        
        if (movableObject.otherDirection) {
            movableObject.posX = movableObject.posX * -1;
            this.ctx.restore();
        }
    }


    setWorld() {
        this.character.world = this;
    }
}