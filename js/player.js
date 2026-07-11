function enablePlayer() {

    game.canChoose = true;

    document.querySelectorAll(".chest").forEach(chest => {

        chest.onclick = chooseChest;

    });

}

function chooseChest(event) {

    if (!game.canChoose || game.paused) return;

    game.canChoose = false;

    playSound("chest");

    const clickedChest = Number(

        event.currentTarget.id.replace("chest", "")

    );

    if (clickedChest === game.treasureChest) {

        const rect = event.currentTarget.getBoundingClientRect();

createSparkles(

    rect.left + rect.width / 2,

    rect.top + rect.height / 2

);
        playSound("treasure");

        event.currentTarget.src = "assets/images/treasure.png";

        showScorePopup(100);

        showLevelBanner();

        setTimeout(() => {

            nextLevel();

        }, 1800);

    }

    else {

        playSound("wrong");
        shakeScreen();

        event.currentTarget.src = "assets/images/chest-empty.png";

        setTimeout(() => {

            document.getElementById(

                `chest${game.treasureChest}`

            ).src = "assets/images/treasure.png";

            setTimeout(() => {

                gameOver();

            }, 1500);

        }, 700);

    }

}