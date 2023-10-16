class Coin extends MovableObject {
    height = 150;
    width = 150;
    posX = 50;
    posY = 50;
    

    images_coin = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];


    constructor() {
        super(),this.loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.images_coin);
        this.posX += Math.random() * 2000;
        this.posY += Math.random() * 180;
        this.coinsAnimation();
    }


    coinsAnimation() {
        setInterval(() => {
            this.playAnimation(this.images_coin);
        }, 240);
    }
}