class Bottle extends MovableObject {
    height = 100;
    width = 100;
    posY = 300;

    images_bottle = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    constructor() {
        super().loadImages('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.loadImages(this.images_bottle);
        this.posX = 200 + Math.random() * 2000;
        this.collectablesAnimation();
    }

    collectablesAnimation() {
        setInterval(() => {
            this.playAnimation(this.images_bottle);
        }, 240);
    }
}}