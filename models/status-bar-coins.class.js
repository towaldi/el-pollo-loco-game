class CoinBar extends StatusBar {

    statusbar_images = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png'
    ];

    
    collected = 0;


    constructor() {
        super();
        this.loadImages(this.statusbar_images);
        this.setPercentage(0);
        this.posX = 20;
        this.posY = 110;
        this.width = 200;
        this.height = 60;
    }
}