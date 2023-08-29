class Endboss extends MovableObject {

    posY = 150;
    height = 300;
    width = 230;

    images_walking = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];


    constructor() {
        super().loadImage(this.images_walking[0]);
        this.loadImages(this.images_walking);
        
        this.posX = 2000;
        this.animate();
    }


    animate() {
		setInterval(() => {
			this.playWalkingAnimation(this.images_walking);
		}, 1000 / 12);

        this.moveLeft();
	}

}