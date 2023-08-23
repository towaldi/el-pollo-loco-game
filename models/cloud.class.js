class Cloud extends MovableObject {
    
    posY = 20;
    width = 480;
    height = 240;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        
        this.posX = Math.random() * 360;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.posX -= 0.1;
        }, 1000 / 60)
    }
}