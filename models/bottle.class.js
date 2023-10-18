class Bottle extends MovableObject {
    height = 80;
    width = 80;
    posX = 200;
    posY = 360;

    images_bottle = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    constructor() {
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.loadImages(this.images_bottle);
        this.posX += Math.random() * 2000;
        this.collectablesAnimation();
    }

    collectablesAnimation() {
        setInterval(() => {
            this.playAnimation(this.images_bottle);
        }, 360);
    }
}