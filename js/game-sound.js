/**
 * Sounds
 */
characterJumpSound = new Audio('./audio/character_jump_sound.mp3');
characterDeadSound = new Audio('./audio/character_dead_sound.mp3');
characterHurtSound = new Audio('./audio/character_jump_sound.mp3');

chickenDeadSound = new Audio('./audio/chicken_dead_sound.mp3');

throwBottleSound = new Audio('./audio/throw_bottle_sound.mp3');
collectBottleSound = new Audio('./audio/collect_bottle_sound.mp3');
bottleSplashSound = new Audio('./audio/bottle_splash_sound.mp3');

collectCoinSound = new Audio('./audio/collect_coin_sound.mp3');

endbossHurtSound = new Audio('./audio/chicken_dead_sound.mp3');
endbossAttentionSound = new Audio('./audio/chicken_dead_sound.mp3');
endbossAttackSound = new Audio('./audio/chicken_dead_sound.mp3');

gameBackgroundMusic = new Audio('./audio/game_bgr_sound.mp3');
gameEndbossMusic = new Audio('./audio/endboss_attention_sound.mp3');

gameWonSound = new Audio('./audio/game_won_sound.mp3');
gameLostSound = new Audio('./audio/game_won_sound.mp3');


/**
 * Checking if audioelements are loaded correctly
 */
characterDeadSound.load();
characterDeadSound.load();
characterHurtSound.load();
chickenDeadSound.load();
throwBottleSound.load();
collectBottleSound.load();
bottleSplashSound.load();
collectCoinSound.load();
endbossHurtSound.load();
endbossAttentionSound.load();
endbossAttackSound.load();
gameBackgroundMusic.load();
gameEndbossMusic.load();
gameWonSound.load();
gameLostSound.load();

let gameMusicOff = false;


/**
 * Resets 'game' + 'endboss' music at tht start of the game
 * -> Checks whether music is on of off -> on: music on loop
 */
function gameSounds() {
    resetSoundsToBegin();
    checkGameMusic();
    gameBackgroundMusic.loop = true;
    gameBackgroundMusic.play();
}


/**
 * Reset the time of 'game' + 'endboss' sounds
 */
function resetSoundsToBegin() {
    gameBackgroundMusic.currentTime = 0;
    gameEndbossMusic.currentTime = 0;
}


/**
 * Checks wherther music is on (true) or off (false) based on global variable 'gameMusicOff'
 * -> If on volume of sounds is 1, if off valome is 0
 */
function checkGameMusic() {
    if (!gameMusicOff) {
        allSoundsVolumeOn();
    } else {
        allSoundsVolumeOff();
    }
}


/**
 * Sets globale variable 'gameMusicOff' to true
 * -> Display sound off button (Volume of all sounds = 0)
 */
function soundOff() {
    gameMusicOff = true;
    showSoundOffButton();
    allSoundsVolumeOff();
}


/**
 * Function for "sound off" button
 */
function showSoundOffButton() {
    document.getElementById('sound-off').classList.add('d-none');
    document.getElementById('sound-on').classList.remove('d-none');
}


/**
 * Sets the volume of all game sounds to 0
 */
function allSoundsVolumeOff() {
    characterJumpSound.volume = 0;
    characterDeadSound.volume = 0;
    characterHurtSound.volume = 0;

    chickenDeadSound.volume = 0;

    throwBottleSound.volume = 0;
    collectBottleSound.volume = 0;
    bottleSplashSound.volume = 0;

    collectCoinSound.volume = 0;

    endbossHurtSound.volume = 0;
    endbossAttentionSound.volume = 0;
    endbossAttackSound.volume = 0;

    gameBackgroundMusic.volume = 0;
    gameEndbossMusic.volume = 0;

    gameWonSound.volume = 0;
    gameLostSound.volume = 0;
}


/**
 * Sets globale variable 'gameMusicOff' to false
 * -> Display sound on button (Volume of all sounds = 1)
 */
function soundOn() {
    gameMusicOff = false;
    showSoundOnButton();
    allSoundsVolumeOn();
}


/**
 * Function for "sound on" button
 */
function showSoundOnButton() {
    document.getElementById('sound-off').classList.remove('d-none');
    document.getElementById('sound-on').classList.add('d-none');
}


/**
 * Sets the volume of all game sounds to 1
 */
function allSoundsVolumeOn() {
    characterJumpSound.volume = 1;
    characterDeadSound.volume = 1;
    characterHurtSound.volume = 1;

    chickenDeadSound.volume = 1;

    throwBottleSound.volume = 1;
    collectBottleSound.volume = 1;
    bottleSplashSound.volume = 1;

    collectCoinSound.volume = 1;

    endbossHurtSound.volume = 1;
    endbossAttentionSound.volume = 1;
    endbossAttackSound.volume = 1;

    gameBackgroundMusic.volume = 1;
    gameEndbossMusic.volume = 1;

    gameWonSound.volume = 1;
    gameLostSound.volume = 1;
}


/**
 * Function mutes all game sound except for 'gameWonSound' and 'gameLostSound'
 * -> After 300 ms
 */
function setGameSoundsToNull() {
    setTimeout(() => {
        characterJumpSound.value = 1;
        characterDeadSound.value = 1;
        characterHurtSound.value = 1;

        chickenDeadSound.value = 1;

        throwBottleSound.value = 1;
        collectBottleSound.value = 1;
        bottleSplashSound.value = 1;

        collectCoinSound.value = 1;

        endbossHurtSound.value = 1;
        endbossAttentionSound.value = 1;
        endbossAttackSound.value = 1;

        gameBackgroundMusic.value = 1;
        gameEndbossMusic.value = 1;
    }, 300);
}


