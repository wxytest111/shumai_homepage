$(function () {

//  var rotate = function (startIndex) {
//    $('.shanzi li').each(function (index) {
//      var offset = (startIndex + index) % 6;
//      var deg = -50 + 20 * offset;
//      var zIndex = deg === 0 ? 50 : (50 - deg) % 50;
//      $(this).css({
//        '-webkit-transform': 'rotate(' + deg + 'deg)',
//        '-moz-transform': 'rotate(' + deg + 'deg)',
//        'ms-transform': 'rotate(' + deg + 'deg)',
//        'z-index': zIndex
//      });
//    });
//  };
//
//  rotate(0);
//
//  $('.shanzi li').click(function () {
//    var startIndex = $(this).index();
//    rotate(-startIndex);
//  });


  var b = {0: {degree: "0deg", z: 1000}, 1: {degree: "10deg", z: 950}, 2: {degree: "20deg", z: 900}, 3: {degree: "30deg", z: 850}, 4: {degree: "40deg", z: 800}, 5: {degree: "-30deg", z: 850}, 6: {degree: "-20deg", z: 900}, 7: {degree: "-10deg", z: 950}};
  var c = $(".shanzi-container").offset().top + 10;
  var d = true;
  var a = function () {
    d = false;
    $(".shanzi li").each(function () {
      var g = $(this);
      var e = g.data("index");
      var f = b[e].degree;
      g.css({"-webkit-transform": "rotate(" + f + ")", "-moz-transform": "rotate(" + f + ")", "ms-transform": "rotate(" + f + ")", "z-index": b[e].z})
    })
  };
  if ($(window).height() > c) {
    a()
  }
  $(window).scroll(function () {
    var e = $(document).scrollTop();
    if (d && e + $(window).height() > c) {
      a()
    }
  });
  $(".shanzi li").click(function () {
    var e = $(this).data("index");
    $(".shanzi li").each(function () {
      var i = $(this);
      var f = i.data("index");
      var g = (f - e + 8) % 8;
      var h = b[g].degree;
      i.data("index", g);
      i.css({"-webkit-transform": "rotate(" + h + ")", "-moz-transform": "rotate(" + h + ")", "ms-transform": "rotate(" + h + ")", "z-index": b[g].z})
    })
  })
})
;