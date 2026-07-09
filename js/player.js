function enablePlayer() {

    game.canChoose = true;

    document.querySelectorAll(".chest").forEach(chest => {

        chest.onclick = chooseChest;

    });

}

function chooseChest(event) {

    if (!game.canChoose) return;

    game.canChoose = false;

    const clickedChest = Number(
        event.currentTarget.id.replace("chest", "")
    );

    if (clickedChest === game.treasureChest) {

        event.currentTarget.src = "assets/images/treasure.png";

       showScorePopup(100);

showLevelBanner();

setTimeout(()=>{

    nextLevel();

},1800);

    }

    else {

    // Open the wrong chest
    event.currentTarget.src = "assets/images/chest-empty.png";

    // Wait before revealing the treasure
    setTimeout(() => {

        document.getElementById(
            `chest${game.treasureChest}`
        ).src = "assets/images/treasure.png";

        // Wait again before showing Game Over
        setTimeout(() => {

            gameOver();

        }, 1500);

    }, 700);

}
    }

