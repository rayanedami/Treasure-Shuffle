function pauseGame() {

    game.paused = true;
    pauseMusic();
    game.canChoose = false;

    showPanel(

        "PAUSED",

        "The treasure awaits...",

        [

            {

                text: "Resume",

                action: () => {

                    game.paused = false;
                    resumeMusic();
                    

                    hidePanel();

                    enablePlayer();

                }

            },

            {

                text: "Restart",

                action: restartGame

            }

        ]

    );

}

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        if (!game.paused) {

            pauseGame();

        }

    }

});