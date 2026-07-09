function updateHUD() {

    document.getElementById("levelValue").textContent = game.level;

    document.getElementById("scoreValue").textContent = game.score;

}

function nextLevel() {

    game.score += 100;

    if (game.level >= 20) {

        showPanel(

            "CONGRATULATIONS!",

            "🏴‍☠️ You found the Deadhand Treasure!\n\n🏆 All 20 Levels Completed\n\n💰 Final Score: " + game.score,

            [

                {

                    text: "Play Again",

                    action: () => {

                        location.reload();

                    }

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

    showPanel(

        "GAME OVER",

        "Reached Level: " + game.level + "\n\nFinal Score: " + game.score,

        [

            {

                text: "Restart",

                action: () => {

                    location.reload();

                }

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