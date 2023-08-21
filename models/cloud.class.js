class Cloud extends MovableObject {
    posY = 20;
    width = 200;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        
        this.posX = Math.random()*100;
    }
}