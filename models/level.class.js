class Level {
    enemies;
    clouds;
    coins;
    backgroundObjects;
    levelEndX = 2200;

    constructor (enemies, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
    }
}