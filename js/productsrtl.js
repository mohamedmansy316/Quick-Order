$(".main-owl").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  rtl: true,
  touchDrag: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});



$('.productImgOwl').owlCarousel({
  loop: false,
  touchDrag: false,
  margin: 0,
  // nav:true,
  // navigation: !0,
  // slideSpeed: 300,
  rtl: true,
  // paginationSpeed: 400,
  // dots: !1,
  items: 1,
  // loop: !0,
  nav: null,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  // autoplayTimeout: 3000,
  // responsive: {
  //   item: 1
  // }

  touchDrag: false,
});





