// @ts-nocheck
var ddData = [{
    text: "Twitter",
    value: 1,
    selected: false,
    imageSrc: "../assets/Path 20.png"
},
{
    text: " FaceBook",
    value: 2,
    selected: false,
    imageSrc: "../assets/Path 19.png"
},
{
    text: "WhatsApp",
    value: 3,
    selected: true,
    imageSrc: "../assets/Group 19.png"
},
{
    text: "Instagram",
    value: 4,
    selected: false,
    imageSrc: "../assets/Group 21.png"
}
];
$('#demoShowSelected').ddslick({
    data: ddData,
    selectText: "Country",
});
$('#showSelectedData').on('click', function () {
    var ddData = $('#demoShowSelected').data('ddslick');
    displaySelectedData("2: Getting Selected Dropdown Data", ddData);
});
$('#myDropdown').ddslick({
    data: ddData,
    width: 363,
    selectText: "Country",
    imagePosition: "left",
    onSelected: function (selectedData) {
        //callback function: do something with selectedData;
    }
});

const togglePassword = document.querySelectorAll('.togglePassword');

togglePassword.forEach((input) => {
    input.addEventListener('click', function (e) {
        const password = this.parentNode.querySelector(".id_password");
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
    });
})


// to change product img
var inputprof = document.querySelector(".inputproff");
inputprof.onchange = function (e) {
    if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(".profileimggg").attr("src", e.target.result);
        };
        reader.readAsDataURL(this.files[0]);
    }
};
var inputcoverr = document.querySelector(".inputcover");
inputcoverr.onchange = function (e) {
    if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(".coverimggg").attr("src", e.target.result);
        };
        reader.readAsDataURL(this.files[0]);
    }
};
