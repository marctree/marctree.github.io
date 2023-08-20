/*function openNav() {
    
    document.getElementById("mySidepanel").style.width = "400px";
  }
  
  // Set the width of the sidebar to 0 (hide it) 
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
*/
function openSidebar(buttonId) {
  var sidebar = document.getElementById("sidebar");
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
