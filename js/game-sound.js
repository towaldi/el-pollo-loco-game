characterJumpSound = new Audio();
characterDeadSound = new Audio();
characterHurtSound = new Audio();

chickenDeadSound = new Audio();

throwBottleSound = new Audio();
collectBottleSound = new Audio();
bottleSplashSound = new Audio();

collectCoinSound = new Audio();

endbossHurtSound = new Audio();
endbossAttentionSound = new Audio();
endbossAttackSound = new Audio();

gameBackgroundMusic = new Audio();
gameEndbossMusic = new Audio();

gameWonSound = new Audio();
gameLostSound = new Audio();


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
    // document.getElementById('').classList.add('d-none');
    // document.getElementById('').classList.remove('d-none');
}


/**
 * Sets the volume of all game sounds to 0
 */

function allSoundsVolumeOff() {
    characterJumpSound.value = 0;
    characterDeadSound.value = 0;
    characterHurtSound.value = 0;

    chickenDeadSound.value = 0;

    throwBottleSound.value = 0;
    collectBottleSound.value = 0;
    bottleSplashSound.value = 0;

    collectCoinSound.value = 0;

    endbossHurtSound.value = 0;
    endbossAttentionSound.value = 0;
    endbossAttackSound.value = 0;

    gameBackgroundMusic.value = 0;
    gameEndbossMusic.value = 0;

    gameWonSound.value = 0;
    gameLostSound.value = 0;
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
    // document.getElementById('').classList.remove('d-none');
    // document.getElementById('').classList.add('d-none');
}


/**
 * Sets the volume of all game sounds to 0
 */

function allSoundsVolumeOff() {
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

    gameWonSound.value = 1;
    gameLostSound.value = 1;
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


