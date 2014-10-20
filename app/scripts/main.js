$(function () {

  var rotate = function (startIndex) {
    $('.shanzi li').each(function (index) {
      var offset = (startIndex + index) % 24;
      var deg = 15 * offset;
      var zIndex = deg === 0 ? 360 : (360 - deg) % 360;
      $(this).css({
        '-webkit-transform': 'rotate(' + deg + 'deg)',
        '-moz-transform': 'rotate(' + deg + 'deg)',
        'ms-transform': 'rotate(' + deg + 'deg)',
        'z-index': zIndex
      });
    });
  };

  rotate(0);

  $('.shanzi li').click(function () {
    var startIndex = $(this).index();
    rotate(-startIndex);
  });

});