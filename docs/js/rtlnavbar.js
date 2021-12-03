// @ts-nocheck
var opennav = document.getElementById("humbergur"),
  closenav = document.getElementById("closeme"),
  sidebar = document.querySelector(".left_bar");

closenav.onclick = function () {
  sidebar.style.marginRight = "-270px";
};
opennav.onclick = function () {
  sidebar.style.marginRight = "0";
};
