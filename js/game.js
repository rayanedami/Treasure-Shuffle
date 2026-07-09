function initGame() {

    updateHUD();

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

function revealTreasure() {

    document.getElementById(`chest${game.treasureChest}`).src =
        "assets/images/treasure.png";

    setTimeout(() => {

        document.querySelectorAll(".chest").forEach(chest => {

            chest.src = "assets/images/chest-closed.png";

        });

        startShuffle();

    }, 2000);

}