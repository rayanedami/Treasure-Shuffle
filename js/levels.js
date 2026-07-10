function updateHUD() {

    document.getElementById("levelValue").textContent = game.level;

    document.getElementById("scoreValue").textContent = game.score;

}

function nextLevel() {

    game.score += 100;

    if (game.level >= 20) {

        playSound("victory");

        stopMusic();

        showPanel(

            "🏆 VICTORY!",

            "🏴‍☠️ You found the Deadhand Treasure!\n\n🏆 All 20 Levels Completed\n\n💰 Final Score: " + game.score,

            [

                {

                    text: "Play Again",

                    action: restartGame

                }

            ]

        );

        return;

    }

    game.level++;

    updateHUD();

    setTimeout(() => {

        resetRound();

    }, 1000);

}

function gameOver() {

    stopMusic();

    showPanel(

        "GAME OVER",

        "Reached Level: " + game.level + "\n\nFinal Score: " + game.score,

        [

            {

                text: "Restart",

                action: restartGame

            }

        ]

    );

}

function getShuffleCount() {

    return Math.min(3 + (game.level - 1) * 2, 25);

}

function getShuffleSpeed() {

    return Math.max(700 - (game.level - 1) * 40, 220);

}