function createSparkles(x, y) {

    for (let i = 0; i < 15; i++) {

        const sparkle = document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.style.left = x + "px";

        sparkle.style.top = y + "px";

        sparkle.style.setProperty("--dx", (Math.random() * 180 - 90) + "px");
        sparkle.style.setProperty("--dy", (Math.random() * 180 - 90) + "px");

        document.body.appendChild(sparkle);

        setTimeout(() => {

            sparkle.remove();

        }, 800);

    }

}
function shakeScreen(){

    const game = document.getElementById("game");

    game.classList.remove("shake");

    void game.offsetWidth;

    game.classList.add("shake");

}