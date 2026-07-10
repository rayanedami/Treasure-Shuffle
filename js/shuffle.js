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

    enablePlayer();

}

function swap(i, j) {

    const temp = game.chestOrder[i];

    game.chestOrder[i] = game.chestOrder[j];

    game.chestOrder[j] = temp;

    updatePositions();

}

function updatePositions() {

    document.getElementById(`box${game.chestOrder[0]}`).style.transform =
        "translateX(-300px)";

    document.getElementById(`box${game.chestOrder[1]}`).style.transform =
        "translateX(0px)";

    document.getElementById(`box${game.chestOrder[2]}`).style.transform =
        "translateX(300px)";

}