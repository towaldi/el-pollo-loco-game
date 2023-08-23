class Cloud extends MovableObject {
    posY = 20;
    width = 200;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        
        this.posX = Math.random() * 100;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= 0.1;
        }, 1000 / 60)
    }
}