/**
*Exampe from https://kottenator.github.io/jquery-circle-progress/
*/
var progressBarOptions = {
    startAngle: -1.55,
    size: 130,
    value: 0.75,
    fill: {
        color: '#5465cf'
    }
}

$('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function (event, progress, stepValue) {
    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});

$('#circle-b').circleProgress({
    value: 0.50,
    size: 100,

    fill: {
        color: '#f56f3c'
    }
});

$('#circle-c').circleProgress({
    value: 0.92,
    size: 70,

    fill: {
        color: '#f938d9'

    }
});



