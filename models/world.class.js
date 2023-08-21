class World {
    /**
     * Variables
     */

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    clouds = [
        new Cloud()
    ];
    ctx;
    canvas;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.character.img, this.character.posX, this.character.posY, this.character.width, this.character.height);
        // Display enemies
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.posX, enemy.posY, enemy.width, enemy.height);
            
        });
        // Display clouds
        this.clouds.forEach(cloud => {
            this.ctx.drawImage(cloud.img, cloud.posX, cloud.posY, cloud.width, cloud.height);
            
        });

        let self = this;
	        requestAnimationFrame(function() {
		    self.draw();
	    });
    }
}