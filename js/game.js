/**
 * Global variables
 */

let canvas;
let world;
let keyboard = new Keyboard();
let arrivedEndboss = false;
let intervalIds = [];

let bottlesCollectedInMenu = 0;
let bottlesThrowedInMenu = 0;
let coinsCollectedInMenu = 0;
let killedChickenInMenu = 0;


/**
 * Initializes the game
 * -> Displaying loading screen, drawing world, display overly (mobile buttons)
 */

function startGame() {
	switchContainer('start-screen', 'canvas');
	setTimeout(() => {
		// switchContainer('start-screen', 'canvas');
        // setEndgameStatisticToNull();
        gameSounds();
        initLevel();
		mobileButtons();
		document.getElementById('overlay').classList.remove('d-none');
		document.getElementById('won-screen').classList.add('d-none');
		document.getElementById('lost-screen').classList.add('d-none');
		canvas = document.getElementById('canvas');
    	world = new World(canvas, keyboard);
	}, 400);
}


/**
 * Shows keys in start screen
 */

function showKeysManual() {
	document.getElementById('manual-screen').classList.remove('d-none');
}


/**
 * Shows start screen again (if key manual is open)
 */

function showStartScreen() {
	document.getElementById('manual-screen').classList.add('d-none');
}


/**
 * Adds intervals controlling the game into an array
 * @param {function} fn -> Function called at regular intervals
 * @param {number} time -> Time in ms (milliseconds) between each call of the function
 */

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

/**
 * Stops all intervals that are contolling the game
 */

function stopAllIntervals() {
	intervalIds.forEach(clearInterval);
}


/**
 * Switches between 2 container elements on the webpage
 * @param {string} id1 -> Id of the first container to be hidden
 * @param {string} id2 -> Id of the second container to be displayed
 */
function switchContainer(id1, id2) {
    document.getElementById(id1).classList.add('d-none');
    document.getElementById(id2).classList.remove('d-none');
}


/**
 * Resets the game statistics.
 */

function setEndgameStatisticToNull() {
    bottlesCollectedInMenu = 0;
    bottlesThrowedInMenu = 0;
    coinsCollectedInMenu = 0;
    killedChickenInMenu = 0;
}


/**
 * Updates the count of bottles collected in the game.
 */

function checkCollectedBottles() {
    bottlesCollectedInMenu++;
}


/**
 * Updates the count of bottles thrown in the game.
 */

function checkThrowedBottles() {
    bottlesThrowedInMenu++;
}


/**
 * Updates the count of coins collected in the game.
 */

function checkCollectedCoins() {
    coinsCollectedInMenu++;
}


/**
 * Updates the count of chickens killed in the game.
 */

function checkKilledChicken() {
    killedChickenInMenu++;
}


/**
 * Displays the game statistics.
 * @param {string} id1 - Id of the element to display the number of collected bottles.
 * @param {string} id2 - Id of the element to display the number of thrown bottles.
 * @param {string} id2 - Id of the element to display the number of collected coins.
 * @param {string} id3 - Id of the element to display the number of killed chickens.
 */
// function showGameStatistic(id1, id2, id3, id4) {
//     document.getElementById(id1).innerHTML = bottlesCollectedInMenu;
//     document.getElementById(id2).innerHTML = bottlesThrowedInMenu;
//     document.getElementById(id3).innerHTML = coinsCollectedInMenu;
//     document.getElementById(id4).innerHTML = killedChickenInMenu;
// }


/**
 * Gets executed if character's energy = 0 -> game is lost
 */

function gameLost() {
	stopBackgroundMusic();
	showGameLostContainer();
}


/**
 * Pauses background music after game was won or lost
 */

function stopBackgroundMusic() {
	gameBackgroundMusic.pause();
	gameEndbossMusic.pause();
}


/**
 * Displayed if game lost (screen)
 * -> After 500ms.
 */

function showGameLostContainer() {
    setTimeout(() => {
        gameLostSound.play();
        // showGameStatistic('collected-bottles-ingame', 'throwed-bottles-ingame', 'collected-coins-ingame', 'killed-chicken-ingame');
        document.getElementById('lost-screen').classList.remove('d-none');
        // document.getElementById('canvas').classList.add('d-none');
    }, 500);
}


/**
 * Gets executed if endboss's energy = 0 -> game is won
 */

function gameWon() {
    stopBackgroundMusic();
    showGameWonContainer();
}


/**
 * Displayed if game won (screen)
 * -> After 1200ms.
 */

function showGameWonContainer() {
    setTimeout(() => {
        // showGameStatistic('collected-bottles-ingame-win', 'throwed-bottles-ingame-win', 'collected-coins-ingame-win', 'killed-chicken-ingame-win');
        document.getElementById('won-screen').classList.remove('d-none');
        // document.getElementById('canvas').classList.add('d-none');
    }, 1200);
}


/**
 * Opens text containers specified by the parameters
 * @param {string} id1 -> Id of the first container to be displayed
 * @param {string} id2 -> Id of the second container to be hidden
 */

function openTextContainer(id1, id2) {
    document.getElementById(id1).classList.remove('d-none');
    document.getElementById(id2).classList.add('d-none');
}


/**
 * Closes text containers specified by the parameters
 * @param {string} id1 -> Id of the first container to be hidden
 * @param {string} id2 -> Id of the second container to be displayed
 */

function closeTextContainer(id1, id2) {
    document.getElementById(id1).classList.add('d-none');
    document.getElementById(id2).classList.remove('d-none');
}


/**
 * Returns to the main menu (after a win or loss)
 * @param {string} id1 -> Id of the first container to be hidden
 * @param {string} id2 -> Id of the second container to be displayed
 */

function goToMainMenu(id1, id2) {
    document.getElementById(id1).classList.add('d-none');
    document.getElementById(id2).classList.remove('d-none');
}


/**
 * Restarts the game (after a win or loss) 
 * -> The parameters are defined in the 'index.html' file
 * -> The startGame() function initializes a new game
 * @param {string} id -> Id of the HTML element to be manipulated.
 */

function restartGame(id) {
    document.getElementById(id).classList.add('d-none');
    startGame();
}


/**
 * Event listener for keyboard inputs
 * -> Listens for keydown events
 * -> Updates the keyboard object based on the keys that are pressed
 */

window.addEventListener("keydown", (event) => {
    if (event.keyCode == 37) {
		keyboard.left = true;
	}
	
	if (event.keyCode == 39) {
		keyboard.right = true;
	}
	
	if (event.keyCode == 38) {
		keyboard.up = true;
	}
	
	if (event.keyCode == 40) {
		keyboard.down = true;
	}
	
	if (event.keyCode == 32) {
		keyboard.space = true;
	}

	if (event.keyCode == 68) {
		keyboard.d = true;
	}
});


/**
 * Event listener for releasing keyboard keys
 * -> Listens for keyup events
 * -> Updates the keyboard object based on the keys that are released
 */

window.addEventListener("keyup", (event) => {
	if (event.keyCode == 37) {
		keyboard.left = false;
	}
	
	if (event.keyCode == 39) {
		keyboard.right = false;
	}
	
	if (event.keyCode == 38) {
		keyboard.up = false;
	}
	
	if (event.keyCode == 40) {
		keyboard.down = false;
	}
	
	if (event.keyCode == 32) {
		keyboard.space = false;
	}

	if (event.keyCode == 68) {
		keyboard.d = false;
	}
});


/**
 * Mobile buttons -> touch events
 */
function mobileButtons() {

	// Left
	document.getElementById('mobile-btn-move-left').addEventListener('touchstart', (event) => {
		event.preventDefault();
		keyboard.left = true;
	});

	document.getElementById('mobile-btn-move-left').addEventListener('touchend', (event) => {
		event.preventDefault();
		keyboard.left = false;
	});

	// Right
	document.getElementById('mobile-btn-move-right').addEventListener('touchstart', (event) => {
		event.preventDefault();
		keyboard.right = true;
	});

	document.getElementById('mobile-btn-move-right').addEventListener('touchend', (event) => {
		event.preventDefault();
		keyboard.right = false;
	});

	// Jump
	document.getElementById('mobile-btn-jump').addEventListener('touchstart', (event) => {
		event.preventDefault();
		keyboard.space = true;
	});

	document.getElementById('mobile-btn-jump').addEventListener('touchend', (event) => {
		event.preventDefault();
		keyboard.space = false;
	});

	// Throw
	document.getElementById('mobile-btn-throw').addEventListener('touchstart', (event) => {
		event.preventDefault();
		keyboard.d = true;
	});

	document.getElementById('mobile-btn-throw').addEventListener('touchend', (event) => {
		event.preventDefault();
		keyboard.d = false;
	});
}



/**
 * 
 */

