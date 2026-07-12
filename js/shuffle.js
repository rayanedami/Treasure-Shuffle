async function startShuffle() {

    game.chestOrder = [1, 2, 3];

    updatePositions();

    let shuffleCount = getShuffleCount();

    while (shuffleCount > 0) {

        while (game.paused) {
            await new Promise(resolve => requestAnimationFrame(resolve));
        }

        const first = Math.floor(Math.random() * 3);

        let second = Math.floor(Math.random() * 3);

        while (second === first) {
            second = Math.floor(Math.random() * 3);
        }

        swap(first, second);

        shuffleCount--;

        await wait(getShuffleSpeed());

    }

    while (game.paused) {
        await new Promise(resolve => requestAnimationFrame(resolve));
    }

    enablePlayer();

}

function swap(i, j) {

    const temporaryChest = game.chestOrder[i];

    game.chestOrder[i] = game.chestOrder[j];
    game.chestOrder[j] = temporaryChest;

    updatePositions();

}

function getChestDistance() {

    const screenWidth = window.innerWidth;

    if (screenWidth <= 380) return 78;
    if (screenWidth <= 500) return 92;
    if (screenWidth <= 700) return 125;
    if (screenWidth <= 900) return 155;
    if (screenWidth <= 1100) return 190;

    return 300;

}

function updatePositions() {

    const distance = getChestDistance();

    const leftBox = document.getElementById(
        `box${game.chestOrder[0]}`
    );

    const centerBox = document.getElementById(
        `box${game.chestOrder[1]}`
    );

    const rightBox = document.getElementById(
        `box${game.chestOrder[2]}`
    );

    if (!leftBox || !centerBox || !rightBox) {
        return;
    }

    leftBox.style.transform =
        `translateX(${-distance}px)`;

    centerBox.style.transform =
        "translateX(0px)";

    rightBox.style.transform =
        `translateX(${distance}px)`;

}

window.addEventListener("resize", () => {

    if (document.getElementById("chests")) {
        updatePositions();
    }

});