class BackgroundObject extends MovableObject {

    width = 720;
    height = 150;

    constructor(imagePath, posX) {
        super().loadImage(imagePath);

        this.posX = posX;
        this.posY = 150 - this.height;
    }
}