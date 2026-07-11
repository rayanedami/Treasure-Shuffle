function initMenu() {

    const startButton = document.getElementById("startButton");
    const helpButton = document.getElementById("helpButton");

    if (startButton) {

        startButton.onclick = () => {

            playSound("click");

            startMusic();

            loadScreen("game");

        };

    }

    if (helpButton) {

        helpButton.onclick = () => {

            playSound("click");

            openHelpPage(0);

        };

    }

}