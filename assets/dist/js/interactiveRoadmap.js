/**
 * Interactive Roadmap
 */


/**
 * Opens the programming languages sidebar based on the button clicked.
 *
 * @param {string} buttonId - The ID of the button clicked.
 * @return {void} This function does not return a value.
 */

function openProgrammingLanguages(buttonId) {
    var check = document.getElementsByClassName("open-sidebar");

    // Roadmap / Programming Languages and External Packages
    var python = document.getElementById("python");
    var go = document.getElementById("go");
    var tailwind = document.getElementById("tailwind");
    var react = document.getElementById("react");
    var javascript = document.getElementById("javascript");
    var node = document.getElementById("node");

    switch (buttonId) {
        case "python":
            python.style.display = "block";
            go.style.display = "none";
            tailwind.style.display = "none";
            react.style.display = "none";
            javascript.style.display = "none";
            node.style.display = "none";
            if (check.length === 1) {
                closeProgramming();
            }
            break;
        case "go":
            python.style.display = "none";
            go.style.display = "block";
            tailwind.style.display = "none";
            react.style.display = "none";
            javascript.style.display = "none";
            node.style.display = "none";
            if (check.length === 1) {
                closeProgramming();
            }
            break;
        case "tailwind":
            python.style.display = "none";
            go.style.display = "none";
            tailwind.style.display = "block";
            react.style.display = "none";
            javascript.style.display = "none";
            node.style.display = "none";
            if (check.length === 1) {
                closeProgramming();
            }
            break;
        case "react":
            python.style.display = "none";
            go.style.display = "none";
            tailwind.style.display = "none";
            react.style.display = "block";
            javascript.style.display = "none";
            node.style.display = "none";
            if (check.length === 1) {
                closeProgramming();
            }
            break;
        case "javascript":
            python.style.display = "none";
            go.style.display = "none";
            tailwind.style.display = "none";
            react.style.display = "none";
            javascript.style.display = "block";
            node.style.display = "none";
            if (check.length === 1) {
                closeProgramming();
            }
            break;
        case "node":
            python.style.display = "none";
            go.style.display = "none";
            tailwind.style.display = "none";
            react.style.display = "none";
            javascript.style.display = "none";
            node.style.display = "block";
            if (check.length === 1) {
                closeProgramming();
            }
            break;
        default:
            buttonId = null;
    }
    closeProgramming();
}

/**
 * Opens static webpages based on the given button ID.
 *
 * @param {string} buttonId - The ID of the button that was clicked.
 * @return {undefined} This function does not return a value.
 */

function openStaticWebpages(buttonId) {
    var check = document.getElementsByClassName("open-sidebar");

    var html = document.getElementById("html");
    var css = document.getElementById("css");

    switch (buttonId) {
        case "html":
            html.style.display = "block";
            css.style.display = "none";
            if (check.length === 1) {
                closeStatic();
            }
            break;
        case "css":
            html.style.display = "none";
            css.style.display = "block";
            if (check.length === 1) {
                closeStatic();
            }
            break;
        default:
            buttonId = null;
    }
    closeStatic()
}

/**
 * Open the operating systems based on the button ID.
 *
 * @param {string} buttonId - The ID of the button clicked.
 * @return {undefined} This function does not return a value.
 */

function openOperatingSystems(buttonId) {
    var check = document.getElementsByClassName("open-sidebar");

    var windows = document.getElementById("windows");
    var ubuntu = document.getElementById("ubuntu");
    var rhel = document.getElementById("rhel");

    switch (buttonId) {
        case "windows":
            windows.style.display = "block";
            ubuntu.style.display = "none";
            rhel.style.display = "none";
            if (check.length === 1) {
                closeSystems();
            }
            break;
        case "ubuntu":
            windows.style.display = "none";
            ubuntu.style.display = "block";
            rhel.style.display = "none";
            if (check.length === 1) {
                closeSystems();
            }
            break;
        case "rhel":
            windows.style.display = "none";
            ubuntu.style.display = "none";
            rhel.style.display = "block";
            if (check.length === 1) {
                closeSystems();
            }
            break;
        default:
            buttonId = null;
    }

    closeSystems();
}

/**
 * Opens a scripting based on the button ID.
 *
 * @param {string} buttonId - The ID of the button.
 * @return {undefined} This function does not return a value.
 */

function openScripting(buttonId) {
    var check = document.getElementsByClassName("open-sidebar");

    var bash = document.getElementById("bash");
    var powershell = document.getElementById("powershell");
    var batch = document.getElementById("batch");

    switch (buttonId) {
        case "bash":
            bash.style.display = "block";
            powershell.style.display = "none";
            batch.style.display = "none";
            if (check.length === 1) {
                closeScripting();
            }
            break;
        case "powershell":
            bash.style.display = "none";
            powershell.style.display = "block";
            batch.style.display = "none";
            if (check.length === 1) {
                closeScripting();
            }
            break;
        case "batch":
            bash.style.display = "none";
            powershell.style.display = "none";
            batch.style.display = "block";
            if (check.length === 1) {
                closeScripting();
            }
            break;
        default:
            buttonId = null;
    }

    closeScripting();
}

/**
 * Opens the VCS sidebar based on the provided button ID.
 *
 * @param {string} buttonId - The ID of the button that triggered the function.
 * @return {void} This function does not return anything.
 */

function openVCS(buttonId) {
    var check = document.getElementsByClassName("open-sidebar");

    var vcs = document.getElementById("vcs");

    if (buttonId === 'vcs') {
        vcs.style.display = "block";
    }

    if (check.length === 1) {
        closeVCS();
    }

    closeVCS();
}

/**
 * Opens the hosting based on the buttonId.
 *
 * @param {string} buttonId - The id of the button that was clicked.
 * @return {void} This function does not return anything.
 */

function openHosting(buttonId) {
    var check = document.getElementsByClassName("open-sidebar");

    var github = document.getElementById("github");
    var gitlab = document.getElementById("gitlab");
    var azdevops = document.getElementById("azdevops");

    switch (buttonId) {
        case "github":
            github.style.display = "block";
            gitlab.style.display = "none";
            azdevops.style.display = "none";
            if (check.length === 1) {
                closeHosting();
            }
            break;
        case "gitlab":
            github.style.display = "none";
            gitlab.style.display = "block";
            azdevops.style.display = "none";
            if (check.length === 1) {
                closeHosting();
            }
            break;
        case "azdevops":
            github.style.display = "none";
            gitlab.style.display = "none";
            azdevops.style.display = "block";
            if (check.length === 1) {
                closeHosting();
            }
            break;
        default:
            buttonId = null;
    }

    closeHosting();
}




/**
 * Toggles the "open-sidebar" class on the element with the specific ID 
 *
 * @param {None}
 * @return {None}
 */

function closeProgramming() {
    var sidebar = document.getElementById("programming");
    sidebar.classList.toggle("open-sidebar");
}

function closeSystems() {
    var sidebar = document.getElementById("systems");
    sidebar.classList.toggle("open-sidebar");
}

function closeScripting() {
    var sidebar = document.getElementById("scripting");
    sidebar.classList.toggle("open-sidebar");
}

function closeStatic() {
    var sidebar = document.getElementById("static");
    sidebar.classList.toggle("open-sidebar");
}

function closeVCS() {
    var sidebar = document.getElementById("vcs");
    sidebar.classList.toggle("open-sidebar");
}

function closeHosting() {
    var sidebar = document.getElementById("hosting");
    sidebar.classList.toggle("open-sidebar");
}