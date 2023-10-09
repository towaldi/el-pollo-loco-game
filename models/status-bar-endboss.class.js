class EndbossBar extends StatusBar {

    statusbar_images = [
        'img/7_statusbars/2_statusbar_endboss/blue/0.png',
        'img/7_statusbars/2_statusbar_endboss/blue/20.png',
        'img/7_statusbars/2_statusbar_endboss/blue/40.png',
        'img/7_statusbars/2_statusbar_endboss/blue/60.png',
        'img/7_statusbars/2_statusbar_endboss/blue/80.png',
        'img/7_statusbars/2_statusbar_endboss/blue/100.png'
    ];


    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.statusbar_images);
        this.setPercentage(100);
        this.posX = 490;
        this.posY = 28;
        this.width = 200;
        this.height = 40;
    }
}