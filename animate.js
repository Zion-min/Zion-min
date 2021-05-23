var $mouseX = 0, $mouseY = 0;
var $xp = 0, $yp = 0;
var $xm = 0, $ym = 0;

$(document).mousemove(function (e) {
  $mouseX = e.clientX;
  $mouseY = e.clientY;
});

// Pointer hover actions
$(document).ready(function () {
  $("body").on("mouseenter", ".project-link-container.demo, .project-link-container.source, .card-tags, .icon, .header-intro a", function () {
    $("#mouse-pointer").css({
      "background-color": "rgb(71, 93, 187, 0.411)",
      width: '60px',
      height: '60px',
      transform: 'translateX(-20px) translateY(-20px)'
    });
  });

  $("body").on("mouseleave", ".project-link-container.demo, .project-link-container.source, .card-tags, .icon, .header-intro a ", function () {
    $("#mouse-pointer").css({
      "background-color": " rgb(71, 93, 187)",
      width: '20px',
      height: '20px',
      transform: 'translateX(0px) translateY(0px)'
    });
  });
});


var $loop = setInterval(function () {
  $xm += (($mouseX - $xm) / 4);
  $ym += (($mouseY - $ym) / 4);
  $(".mouse-pointer").css({
    left: $xm - 10 + 'px',
    top: $ym - 10 + 'px'
  });

  $xp += (($mouseX - $xp) / 12);
  $yp += (($mouseY - $yp) / 12);

}, 30);