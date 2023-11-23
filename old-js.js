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


/* Old level1.js:
 const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new SmallChicken(),
        new SmallChicken(),
        new SmallChicken(),
        new SmallChicken(),
        new Endboss()
    ], 

    [
        new Cloud()
    ],

    [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
    ],

    [
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
    ],

    [
        // Next images (-1)
        new BackgroundObject('img/5_background/layers/air.png', -719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),
        // Next images (1)
        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
        // Next images (2)
        new BackgroundObject('img/5_background/layers/air.png', 719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('img/5_background/layers/air.png', 719*2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*2),
        // Next images (2)
        new BackgroundObject('img/5_background/layers/air.png', 719*3),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*3),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719*3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*3),
    ],
);
 */



// @media only screen and (max-width: 660px) {
//     .fullscreen {
//         /* Display & box model */
//         display: none;
//     }

//     .mobile-screen {
//         /* Display & box model */
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         padding: 32px;
//         gap: 16px;
//         height: 100%;
//         width: 100%;
//         /* Other */
//         background-color: rgba(247, 192, 101, 0.6);
//     }
// }


// <!-- Collected items (bottles) -->
//                 <div class="collected-items">
//                     <p>Collected Bottle:</p>
//                     <p id="collected-bottles-ingame">6</p>
//                 </div>
//                 <!-- Collected items (coins) -->
//                 <div class="collected-items">
//                     <p>Collected Coins:</p>
//                     <p id="collected-coins-ingame">6</p>
//                 </div>