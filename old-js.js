setInterval(() => {
    this.walkingSound.pause();
    // Move right
    if (this.world && this.world.keyboard.right && this.posX < this.world.level.levelEndX) {
        this.moveRight();
        this.otherDirection = false;
        this.walkingSound.play();
    }
    // move left
    if (this.world && this.world.keyboard.left && this.posX > 0) {
        this.moveLeft();
        this.otherDirection = true;
        this.walkingSound.play();
    }
    // Jump
    if (this.world && this.world.keyboard.space && !this.isAboveGround()) {
        this.jump();
    }

    this.world.cameraPosX = -this.posX + 80;

}, 1000 / 24);