class Coin extends MovableObject {
    height = 100;
    width = 100;
    posX = 50;
    posY = 50;
    

    images_coin = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];


    constructor() {
        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.images_coin);
        this.posX += Math.random() * 2000;
        this.posY += Math.random() * 180;
        this.collectablesAnimation();
    }


    collectablesAnimation() {
        setInterval(() => {
            this.playAnimation(this.images_coin);
        }, 240);
    }
}