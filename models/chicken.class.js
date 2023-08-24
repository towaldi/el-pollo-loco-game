class Chicken extends MovableObject {

    posY = 400;
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
        
        this.posX = 360 + Math.random() * 200;
        this.speed = 0.1 + Math.random() * 0.4;
        this.animate();
    }

    animate() {
		setInterval(() => {
			let i = this.currentImage % this.images_walking.length; 
			let path = this.images_walking[i];
			this.img = this.imageCache[path];
			this.currentImage++;
		}, 1000 / 12);

        this.moveLeft();
	}
}