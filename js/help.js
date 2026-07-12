const helpPages = [

    {
        title: "THE LEGEND",

        message:
            "🏴‍☠️ Captain Deadhand hid his legendary treasure before disappearing forever.\n\n" +
            "Many pirates searched for it...\n\n" +
            "None returned.\n\n" +
            "Only the cleverest pirate can follow the treasure through every shuffle."
    },

    {
        title: "HOW TO PLAY",

        message:
            "* Watch the treasure carefully.\n\n" +
            "* The treasure hides inside one chest.\n\n" +
            "* Follow the chests while they shuffle.\n\n" +
            "* Click the chest containing the treasure.\n\n" +
            "💰 Each correct answer gives you 100 points."
    },

    {
        title: "DIFFICULTY",

        message:
            "⚡ Every level becomes faster.\n\n" +
            "🔀 The number of swaps increases.\n\n" +
            "📦 There are always three chests.\n\n" +
            "🏆 Complete all 20 levels to find the legendary treasure."
    },

    {
        title: "CONTROLS",

        message:
            "🖱 Click a chest to choose it.\n\n" +
            "⏸ Use the Pause button during the game.\n\n" +
            "⌨ Press ESC to pause or resume.\n\n" +
            "⚙ Music and sound settings are available inside the Pause menu."
    }

];

let currentHelpPage = 0;

function openHelpPage(pageIndex) {

    if (pageIndex < 0 || pageIndex >= helpPages.length) {
        return;
    }

    currentHelpPage = pageIndex;

    const page = helpPages[currentHelpPage];
    const buttons = [];

    if (currentHelpPage > 0) {

        buttons.push({

            text: "◀ Previous",

            action: () => {

                playSound("click");

                openHelpPage(currentHelpPage - 1);

            }

        });

    }

    if (currentHelpPage < helpPages.length - 1) {

        buttons.push({

            text: "Next ▶",

            action: () => {

                playSound("click");

                openHelpPage(currentHelpPage + 1);

            }

        });

    } else {

        buttons.push({

            text: "Close",

            action: closeHelp

        });

    }

    showPanel(
    page.title,
    page.message,
    buttons,
    "helpPanel"
);

    const buttonContainer = document.getElementById("uiButtons");

    if (buttonContainer) {

        if (buttons.length === 1) {

            buttonContainer.className = "helpButtons singleButton";

        } else {

            buttonContainer.className = "helpButtons";

        }

    }

    const pageNumber = document.getElementById("pageNumber");

    if (pageNumber) {

        pageNumber.textContent =
            `Page ${currentHelpPage + 1} / ${helpPages.length}`;

    }

}

function closeHelp() {

    playSound("click");

    const buttonContainer = document.getElementById("uiButtons");

    if (buttonContainer) {
        buttonContainer.className = "";
    }

    const pageNumber = document.getElementById("pageNumber");

    if (pageNumber) {
        pageNumber.textContent = "";
    }

    hidePanel();

    currentHelpPage = 0;

}