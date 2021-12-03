// @ts-nocheck
//toggle the left nav bar
// var opennav = document.getElementById("humbergur"),
//   closenav = document.getElementById("closeme"),
//   sidebar = document.querySelector(".left_bar");

// closenav.onclick = function () {
//   sidebar.style.marginLeft = "-270px";
// };
// opennav.onclick = function () {
//   sidebar.style.marginLeft = "0";
// };


// 000000000000000
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let buttonphonebar = document.querySelector("#openingphone");
let homesectt = document.querySelector(".home-section");
let ulinsidebar = document.querySelector(".nav-list");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

if (typeof (element) != 'undefined' && element != null) {
  searchBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
  });
}

function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("fa-bars", "fa-times");
  } else {
    closeBtn.classList.replace("fa-times", "fa-bars");
  }
}


buttonphonebar.addEventListener("click", () => {
  sidebar.classList.toggle("inphoneul");
  homesectt.classList.toggle("default-phone");
  sidebar.classList.toggle("open");
  ulinsidebar.classList.toggle("openul");


  phoneBtnChange();
});

function phoneBtnChange() {
  if (sidebar.classList.contains("inphoneul")) {
    buttonphonebar.classList.replace("fa-align-right", "fa-times");
  } else {
    buttonphonebar.classList.replace("fa-times", "fa-align-right");
  }
}
