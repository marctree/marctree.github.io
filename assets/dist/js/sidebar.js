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

  if (buttonId === "python") {
    python.style.display = "block";
    go.style.display = "none";
  } else if (buttonId === "go") {
    python.style.display = "none";
    go.style.display = "block";
  }

  sidebar.classList.toggle("open-sidebar");
}
