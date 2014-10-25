$(function () {

  var positions = {0: {degree: "-5deg", z: 1000}, 1: {degree: "5deg", z: 950}, 2: {degree: "15deg", z: 900}, 3: {degree: "25deg", z: 850}, 4: {degree: "35deg", z: 800}, 5: {degree: "-35deg", z: 850}, 6: {degree: "-25deg", z: 900}, 7: {degree: "-15deg", z: 950}};
  var windowSize = $(".shanzi-container").offset().top + 10;
  var flag = true;
  var start = function () {
    flag = false;
    $(".shanzi li").each(function () {
      var li = $(this);
      var e = li.data("index");
      var f = positions[e].degree;
      li.css({"-webkit-transform": "rotate(" + f + ")", "-moz-transform": "rotate(" + f + ")", "ms-transform": "rotate(" + f + ")", "z-index": positions[e].z})
    })
  };
  if ($(window).height() > windowSize) {
    start()
  }
  $(window).scroll(function () {
    var scrollTop = $(document).scrollTop();
    if (flag && scrollTop + $(window).height() > windowSize) {
      start()
    }

    $('body').css({"backgroundPosition": 0+'px '+(-scrollTop/4)+'px'});
  });
  $(".shanzi li").click(function () {
    var e = $(this).data("index");
    $(".shanzi li").each(function () {
      var i = $(this);
      var f = i.data("index");
      var g = (f - e + 8) % 8;
      var h = positions[g].degree;
      i.data("index", g);
      i.css({"-webkit-transform": "rotate(" + h + ")", "-moz-transform": "rotate(" + h + ")", "ms-transform": "rotate(" + h + ")", "z-index": positions[g].z})
    })
  })

})
;