class Chicken extends MovableObject {
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        
        this.posX = 180 + Math.random()*100;
    }
}