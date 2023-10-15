class Coin extends MovableObject {
    height = 150;
    width = 150;
    posY = 100;

    images_coin = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];


    constructor() {
        super(),this.loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.images_coin);
        this.posX = 400 + Math.random() * 2000;
        this.coinsAnimation();
    }


    coinsAnimation() {
        setInterval(() => {
            this.playAnimation(this.images_coin);
        }, 300);
    }
}