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

}
else{

    buttons.push({

        text:"Close",

        action:closeHelp

    });

}