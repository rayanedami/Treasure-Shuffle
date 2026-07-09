async function loadScreen(screen){

    const response = await fetch(`screens/${screen}.html`);

    const html = await response.text();

    document.getElementById("app").innerHTML = html;

    switch(screen){

        case "menu":
            initMenu();
            break;

        case "game":
            initGame();
            break;

    }

}

loadScreen("menu");