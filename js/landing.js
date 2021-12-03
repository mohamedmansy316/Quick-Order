// @ts-nocheck
var buttontarget = document.querySelector('.timbox');


$(document).ready(function() {

    $('.timbox').click(function(e) {
        e.preventDefault();
        $('.yVedio').attr("src", $(this).attr("href"));
    })

})