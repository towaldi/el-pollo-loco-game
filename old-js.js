/*
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
*/


/* Old version
    isColliding(movableObject) { 
        return  this.posX + this.width > movableObject.posX &&
                this.posY + this.height > movableObject.posY &&
                this.posX < movableObject.posX &&
                this.posY < movableObject.posY + movableObject.height;
    }
*/


/*   
jump() {
    this.speedPosY = 30;
}
*/


/* bottlebar - constuctor

constructor() {
        super();
        this.loadImages(this.statusbar_images);
        this.setPercentage(0);
        this.posX = 20;
        this.posY = 55;
        this.width = 180;
        this.height = 50;
    }
*/

/* checkColliding() old:
                this.character.hit();
                console.log('Collision with character!', this.character.energy);
                this.statusBar.setPercentage(this.character.energy);
*/

/** old game.js function
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    console.log('My character is', world.character);
}
 */
