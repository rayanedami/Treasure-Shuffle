function initMenu(){

    const startButton = document.getElementById("startButton");

    startButton.addEventListener("click", () => {
        playSound("click");

        loadScreen("game");

    });

}