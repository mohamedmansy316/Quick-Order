$(function () {

  $('.demo').each(function (index) {
    var pvalue = $(this).attr("data-pvalue");
    $(this).circleProgress({
      value: pvalue,
      // size: 180,
      fill: {
        gradient: ['#05A9EC', '#D40F92',]
      },
    });
  })

  //scroll to top
  $("#to_top_arrow").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 700);
  });
})