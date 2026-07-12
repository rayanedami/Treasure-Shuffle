function showPanel(
    title,
    message,
    buttons,
    panelType = "normalPanel"
) {

    const overlay = document.getElementById("uiOverlay");
    const panel = document.getElementById("uiPanel");
    const titleElement = document.getElementById("uiTitle");
    const messageElement = document.getElementById("uiMessage");
    const buttonsContainer = document.getElementById("uiButtons");

    if (
        !overlay ||
        !panel ||
        !titleElement ||
        !messageElement ||
        !buttonsContainer
    ) {
        return;
    }

    panel.className = panelType;

    titleElement.textContent = title;

    messageElement.textContent = message;

    buttonsContainer.innerHTML = "";
    buttonsContainer.className = "";

    buttons.forEach(button => {

        const element = document.createElement("button");

        element.type = "button";
        element.className = "uiButton";
        element.textContent = button.text;
        element.onclick = button.action;

        buttonsContainer.appendChild(element);

    });

    overlay.style.display = "flex";

}

function hidePanel() {

    const overlay = document.getElementById("uiOverlay");
    const panel = document.getElementById("uiPanel");
    const buttonsContainer = document.getElementById("uiButtons");

    if (overlay) {
        overlay.style.display = "none";
    }

    if (panel) {
        panel.className = "normalPanel";
    }

    if (buttonsContainer) {
        buttonsContainer.className = "";
    }

}