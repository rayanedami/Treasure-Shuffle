function initGame() {

    updateHUD();

    startMusic();

    document.getElementById("pauseButton").onclick = pauseGame;

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

    document.getElementById(`chest${game.treasureChest}`).src =
        "assets/images/treasure.png";

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

    updateHUD();

    startMusic();

    resetRound();

}