function initGame() {

    updateHUD();

    startMusic();

    const pauseButton = document.getElementById("pauseButton");

    if (pauseButton) {
        pauseButton.onclick = pauseGame;
    }

    resetRound();

}

function resetRound() {

    game.canChoose = false;
    game.chestOrder = [1, 2, 3];

    updatePositions();

    document.querySelectorAll(".chest").forEach(chest => {
        chest.src = "assets/images/chest-closed.png";
    });

    game.treasureChest = Math.floor(Math.random() * 3) + 1;

    revealTreasure();

}

async function revealTreasure() {

    const treasureChest = document.getElementById(
        `chest${game.treasureChest}`
    );

    if (!treasureChest) return;

    treasureChest.src = "assets/images/treasure.png";

    await wait(2000);

    document.querySelectorAll(".chest").forEach(chest => {
        chest.src = "assets/images/chest-closed.png";
    });

    startShuffle();

}

function restartGame() {

    hidePanel();

    stopMusic();

    game.level = 1;
    game.score = 0;
    game.paused = false;
    game.canChoose = false;
    game.chestOrder = [1, 2, 3];

    updateHUD();

    startMusic();

    resetRound();

}