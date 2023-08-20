function openProgrammingLanguages(buttonId) {
  var sidebar = document.getElementById("sidebar");

  // Roadmap / Programming Languages and External Packages
  var python = document.getElementById("python");
  var go = document.getElementById("go");
  var tailwind = document.getElementById("tailwind");
  var react = document.getElementById("react");
  var javascript = document.getElementById("javascript");
  var node = document.getElementById("node");


  // Roadmap / Programming Languages and External Packages
  if (buttonId === "python") {
    python.style.display = "block";
    go.style.display = "none";
    tailwind.style.display = "none";
    react.style.display = "none";
    javascript.style.display = "none";
    node.style.display = "none";
  } else if (buttonId === "go") {
    python.style.display = "none";
    go.style.display = "block";
    tailwind.style.display = "none";
    react.style.display = "none";
    javascript.style.display = "none";
    node.style.display = "none";
  } else if (buttonId === "tailwind") {
    python.style.display = "none";
    go.style.display = "none";
    tailwind.style.display = "block";
    react.style.display = "none";
    javascript.style.display = "none";
    node.style.display = "none";
  }
  else if (buttonId === "react") {
    python.style.display = "none";
    go.style.display = "none";
    tailwind.style.display = "none";
    react.style.display = "block";
    javascript.style.display = "none";
    node.style.display = "none";
  }
  else if (buttonId === "javascript") {
    python.style.display = "none";
    go.style.display = "none";
    tailwind.style.display = "none";
    react.style.display = "none";
    javascript.style.display = "block";
    node.style.display = "none";
  }
  else if (buttonId === "node") {
    python.style.display = "none";
    go.style.display = "none";
    tailwind.style.display = "none";
    react.style.display = "none";
    javascript.style.display = "none";
    node.style.display = "block";
  }
  
  sidebar.classList.toggle("open-sidebar");

}

// Roadmap / Static Webpages
function openStaticWebpages(buttonId) {
  var sidebar = document.getElementById("sidebar");
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  if (buttonId === "html") {
    html.style.display = "block";
    css.style.display = "none";
  } else if (buttonId === "css") {
    html.style.display = "none";
    css.style.display = "block";
  }

  sidebar.classList.toggle("open-sidebar");
}


// Roadmap / Operating Systems
function openOperatingSystems(buttonId) {
  var sidebar = document.getElementById("sidebar");
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

function closeSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open-sidebar");
}

