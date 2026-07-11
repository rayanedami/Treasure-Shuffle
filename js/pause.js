let couldChooseBeforePause = false;

function pauseGame() {

    if (game.paused) {
        return;
    }

    couldChooseBeforePause = game.canChoose;

    game.paused = true;
    game.canChoose = false;

    pauseMusic();

    showPausePanel();

}

function resumeGame() {

    game.paused = false;

    resumeMusic();

    hidePanel();

    /*
     * Le joueur peut choisir seulement si les coffres
     * avaient déjà terminé leur mélange avant la pause.
     */
    game.canChoose = couldChooseBeforePause;

}

function showPausePanel() {

    showPanel(

        "PAUSED",

        "The treasure awaits...",

        [
            {
                text: "Resume",
                action: resumeGame
            },

            {
                text: "Settings",
                action: openPauseSettings
            },

            {
                text: "Restart",
                action: restartGame
            }
        ]

    );

}

function openPauseSettings() {

    const musicText = game.musicEnabled
        ? "Music: ON"
        : "Music: OFF";

    const soundText = game.soundEnabled
        ? "Sound FX: ON"
        : "Sound FX: OFF";

    showPanel(

        "SETTINGS",

        "",

        [
            {
                text: musicText,

                action: () => {

                    setMusicEnabled(!game.musicEnabled);

                    openPauseSettings();

                }
            },

            {
                text: soundText,

                action: () => {

                    setSoundEnabled(!game.soundEnabled);

                    openPauseSettings();

                }
            },

            {
                text: "Reset Best Score",

                action: () => {

                    game.bestScore = 0;

                    localStorage.setItem("bestScore", "0");

                    updateHUD();

                    openPauseSettings();

                }
            },

            {
                text: "Back",
                action: showPausePanel
            }
        ]

    );

}

document.addEventListener("keydown", event => {

    if (event.key !== "Escape") {
        return;
    }

    if (game.paused) {
        resumeGame();
    } else {
        pauseGame();
    }

});