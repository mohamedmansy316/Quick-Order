$(".cartembtyA").click(function () {
  iziToast.show({
    rtl: false,
    class: "alertbox",
    title: "Card Embty",
    message: "Put Some Products in Your Cart",
    messageSize: "16",
    timeout: 5000000000000,
    iconUrl: "../assets/embtyr.svg",
    imageWidth: 500,
    close: false,
    buttons: [
      [
        "<button>Go To Cart</button>",
        function (instance, toast) {
          window.location = "#";
        },
      ],
    ],
  });
});
$(".Shop").click(function () {
  iziToast.show({
    rtl: false,
    class: "alertbox",
    title: "Done Successfully",
    message: "Products has been added to the cart",
    messageSize: "16",
    timeout: 5000000000000,
    iconUrl: "../assets/donecheack.svg",
    imageWidth: 500,
    close: false,

    buttons: [
      [
        "<button>Open Shop</button>",
        function (instance, toast) {
          window.location = "#";
        },
      ],
    ],
  });
});

$(".Sent").click(function () {
  iziToast.show({
    rtl: false,
    class: "alertbox",
    title: "Done Successfully",
    message: "Order has been Sent",
    messageSize: "16",
    timeout: 5000000000000,
    iconUrl: "../assets/donecheack.svg",
    imageWidth: 500,
    close: false,

    buttons: [
      [
        "<button>Go to order</button>",
        function (instance, toast) {
          window.location = "#";
        },
      ],
    ],
  });
});

$(".info").click(function () {
  iziToast.info({
    timeout: 000,
    overlay: true,
    displayMode: "once",
    id: "inputs",
    zindex: 999,
    title: "Inputs",
    position: "center",
    backgroundColor: "#FFF",
    drag: false,
    icon: "",
    inputs: [
      [
        '<input type="text" class="form-control">',
        "keyup",
        function (instance, toast, input, e) {
          console.info(input.value);
        },
        true,
      ],
    ],
    buttons: [
      [
        '<button class="btn btn-light"> Done</button>',
        function (instance, toast) {
          instance.hide({ transitionOut: "fadeOut" }, toast, "button");
        },
        true,
      ],
    ],
  });
});
