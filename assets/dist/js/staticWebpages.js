// Roadmap / Static Webpages
function openStaticWebpages(buttonId) {
    var sidebar = document.getElementById("static");
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

  function closeStatic() {
    var sidebar = document.getElementById("static");
    sidebar.classList.toggle("open-sidebar");
  }