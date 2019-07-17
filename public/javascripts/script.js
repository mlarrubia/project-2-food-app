$(document).ready(function () {



  //  -----------------    Home Page Parallax   -----------------------------
  $("#container").mousemove(function (e) {
    parallaxIt(e, ".wheel", 30);
    parallaxIt(e, ".fruits", 100);
  });

  function parallaxIt(e, target, movement) {
    var $this = $("#container");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }


  // -------------------   World Map  ------------------------------


  $(document).ready(function () {
    tippy('.tippy', {
      theme: 'light',
      size: 'big',
      arrow: true
    })
  });

})