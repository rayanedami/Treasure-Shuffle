function openSettings() {

    const musicText = game.musicEnabled ? "Music: ON" : "Music: OFF";
    const soundText = game.soundEnabled ? "Sound FX: ON" : "Sound FX: OFF";

    showPanel(

        "SETTINGS",

        "",

        [

            {

                text: musicText,

                action: () => {

                    setMusicEnabled(!game.musicEnabled);

                    openSettings();

                }

            },

            {

                text: soundText,

                action: () => {

                    setSoundEnabled(!game.soundEnabled);

                    openSettings();

                }

            },

            {

                text: "Reset Best Score",

                action: () => {

                    game.bestScore = 0;

                    localStorage.setItem("bestScore", 0);

                    updateHUD();

                    openSettings();

                }

            },

            {

                text: "Back",

                action: () => {

                    hidePanel();

                }

            }

        ]

    );

}