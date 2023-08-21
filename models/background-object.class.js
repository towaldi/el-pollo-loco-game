class BackgroundObject extends MovableObject {

    width = 320;
    height = 150;

    constructor(imagePath, posX, posY) {
        super().loadImage(imagePath);

        this.posX = posX;
        this.posY = posY;
    }
}