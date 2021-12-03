// @ts-nocheck
var ddData = [{
        text: "saudi-arabia",
        value: 1,
        selected: false,
        imageSrc: "../assets/saudi-arabia.png"
    },
    {
        text: "iraq",
        value: 2,
        selected: false,
        imageSrc: "../assets/iraq.png"
    },
    {
        text: "kwait",
        value: 3,
        selected: true,
        imageSrc: "../assets/kwait.png"
    },
    {
        text: "oman",
        value: 4,
        selected: false,
        imageSrc: "../assets/oman.png"
    }
];
$('#demoShowSelected').ddslick({
    data: ddData,
    selectText: "Country",
});
$('#showSelectedData').on('click', function() {
    var ddData = $('#demoShowSelected').data('ddslick');
    displaySelectedData("2: Getting Selected Dropdown Data", ddData);
});
$('#myDropdown').ddslick({
    data: ddData,
    width: 363,
    selectText: "Country",
    imagePosition: "left",
    onSelected: function(selectedData) {
        //callback function: do something with selectedData;
    }
});
// ==================== cont

$(document).ready(function() {
    $('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function() {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});