function openProgrammingLanguages(buttonId) {
  var sidebar = document.getElementById("programming");
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
      if(check.length === 1) {
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
      if(check.length === 1) {
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
      if(check.length === 1) {
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
      if(check.length === 1) {
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
      if(check.length === 1) {
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
      if(check.length === 1) {
        closeProgramming();
      }
      break;
    default:
      buttonId = null;
  }
  closeProgramming();
}

function closeProgramming() {
  var sidebar = document.getElementById("programming");
  sidebar.classList.toggle("open-sidebar");
}

