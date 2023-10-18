class Chicken extends MovableObject {
    
    posY = 350;
    height = 80;
    width = 60;

    images_walking = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.images_walking);
        
        this.posX = 360 + Math.random() * 2000;
        this.speed = 0.1 + Math.random() * 0.4;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

		setInterval(() => {
			this.playAnimation(this.images_walking);
		}, 1000 / 12);

        this.moveLeft();
	}
}