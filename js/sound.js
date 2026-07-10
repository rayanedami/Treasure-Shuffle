// ===========================
// Sound Effects
// ===========================

const sounds = {

    click: new Audio("assets/sounds/click.mp3"),

    chest: new Audio("assets/sounds/chest.mp3"),

    treasure: new Audio("assets/sounds/treasure.mp3"),

    wrong: new Audio("assets/sounds/wrong.mp3"),

    victory: new Audio("assets/sounds/victory.mp3")

};

// ===========================
// Background Music
// ===========================

const backgroundMusic = new Audio("assets/sounds/music.mp3");

backgroundMusic.loop = true;
backgroundMusic.volume = 0.35;

// ===========================
// Play Sound Effect
// ===========================

function playSound(name){

    const sound = sounds[name];

    if(!sound) return;

    sound.pause();

    sound.currentTime = 0;

    sound.play().catch(error=>{

        console.log(error);

    });

}

// ===========================
// Start Music
// ===========================

function startMusic(){

    if(!backgroundMusic.paused){

        return;

    }

    backgroundMusic.currentTime = 0;

    backgroundMusic.play().catch(error=>{

        console.log(error);

    });

}

// ===========================
// Pause Music
// ===========================

function pauseMusic(){

    backgroundMusic.pause();

}

// ===========================
// Resume Music
// ===========================

function resumeMusic(){

    if(backgroundMusic.paused){

        backgroundMusic.play().catch(error=>{

            console.log(error);

        });

    }

}

// ===========================
// Stop Music
// ===========================

function stopMusic(){

    backgroundMusic.pause();

    backgroundMusic.currentTime = 0;

}