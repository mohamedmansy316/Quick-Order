$(document).ready(function name() {
    // this is show pass and hide code
    $(".eye").click(function () {
        $(this).toggleClass("active");
        $(this).toggleClass("fa-eye-slash");
        if ($(this).hasClass("active")) {
            $(this).siblings("input").attr("type", "text");
        } else {
            $(this).siblings("input").attr("type", "password");
            
        }
    });
})