class BottleBar extends StatusBar {

    statusbar_images = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png'  
    ];


    constructor() {
        super();
        this.loadImages(this.statusbar_images);
        this.setPercentage(0);
        this.posX = 20;
        this.posY = 60;
        this.width = 200;
        this.height = 60;
    }
}