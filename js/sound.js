const sounds = {
    click: new Audio("assets/sounds/click.mp3"),
    chest: new Audio("assets/sounds/chest.mp3"),
    treasure: new Audio("assets/sounds/treasure.mp3"),
    wrong: new Audio("assets/sounds/wrong.mp3"),
    victory: new Audio("assets/sounds/victory.mp3")
};

const backgroundMusic = new Audio("assets/sounds/music.mp3");

backgroundMusic.loop = true;
backgroundMusic.volume = 0.35;

function playSound(name) {
    if (!game.soundEnabled) return;

    const sound = sounds[name];

    if (!sound) return;

    sound.pause();
    sound.currentTime = 0;

    sound.play().catch(error => {
        console.log("Sound error:", error);
    });
}

function startMusic() {
    if (!game.musicEnabled) return;

    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;

    backgroundMusic.play().catch(error => {
        console.log("Music error:", error);
    });
}

function pauseMusic() {
    backgroundMusic.pause();
}

function resumeMusic() {
    if (!game.musicEnabled) return;

    backgroundMusic.play().catch(error => {
        console.log("Music error:", error);
    });
}

function stopMusic() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
}

function setMusicEnabled(enabled) {
    game.musicEnabled = enabled;

    localStorage.setItem("musicEnabled", String(enabled));

    if (enabled) {
        resumeMusic();
    } else {
        pauseMusic();
    }
}

function setSoundEnabled(enabled) {
    game.soundEnabled = enabled;

    localStorage.setItem("soundEnabled", String(enabled));
}