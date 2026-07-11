const game = {
    level: 1,
    score: 0,
    bestScore: Number(localStorage.getItem("bestScore")) || 0,

    treasureChest: 1,
    chestOrder: [1, 2, 3],

    canChoose: false,
    paused: false,

    musicEnabled: localStorage.getItem("musicEnabled") !== "false",
    soundEnabled: localStorage.getItem("soundEnabled") !== "false"
};