let gamePaused = false;

function showPanel(title, message, buttons) {

    const overlay = document.getElementById("uiOverlay");

    document.getElementById("uiTitle").textContent = title;

    document.getElementById("uiMessage").innerHTML =
        message.replace(/\n/g, "<br>");

    const container = document.getElementById("uiButtons");

    container.innerHTML = "";

    buttons.forEach(button => {

        const element = document.createElement("button");

        element.className = "uiButton";

        element.textContent = button.text;

        element.onclick = button.action;

        container.appendChild(element);

    });

    overlay.style.display = "flex";

}

function hidePanel() {

    document.getElementById("uiOverlay").style.display = "none";

}