class Coin extends MovableObject {
    height = 150;
    width = 150;
    posY = 100;

    images_coin = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];


    constructor() {
        super().loadImg(this.images_coin[0]);
        this.loadImages(this.images_coin);
        this.coinsAnimation();
        this.posY = y + Math.random() * 200;
    }


    coinsAnimation() {
        setInterval(() => {
            this.playAnimation(this.images_coin);
        }, 300);
    }
}