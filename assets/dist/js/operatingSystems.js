function openOperatingSystems(buttonId) {
    var sidebar = document.getElementById('systems'); 

    var windows = document.getElementById("windows");
    var ubuntu = document.getElementById("ubuntu");
    var rhel = document.getElementById("rhel");

    // Roadmap / Operating Systems
    if (buttonId === "windows") {
        windows.style.display = "block";
        ubuntu.style.display = "none";
        rhel.style.display = "none";
    } else if (buttonId === "ubuntu") {
        windows.style.display = "none";
        ubuntu.style.display = "block";
        rhel.style.display = "none";
    } else if (buttonId === "rhel") {
        windows.style.display = "none";
        ubuntu.style.display = "none";
        rhel.style.display = "block";
    }

    sidebar.classList.toggle("open-sidebar");
}

function closeSystems() {
    var sidebar = document.getElementById("systems");
    sidebar.classList.toggle("open-sidebar");
}
  