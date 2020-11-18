////// Toogle Function for NAV bar

function displayNav() {
  var links = document.getElementById("nav-container");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}
