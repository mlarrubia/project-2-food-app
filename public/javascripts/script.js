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

  google.charts.load('current', { 'packages': ['geochart', 'corechart'] });
  google.charts.setOnLoadCallback(drawRegionsMap);
  google.charts.setOnLoadCallback(drawChart);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Customer Count', 'Agent Count'],
      ['Argentina', 999000, 100],
      ['Australia', 969000, 450],
      ['Belgium', 12000, 200],
      ['Brazil', 850000, 250],
      ['Canada', 1110000, 590],
      ['China', 3975000, 690],
      ['Colombia', 4500, 100],
      ['Denmark', 78600, 150],
      ['France', 67000, 400],
      ['Germany', 140000, 550],
      ['India', 1060000, 560],
      ['Japan', 60000, 420],
      ['Nigeria', 1054000, 305],
      ['Philippines', 120000, 230],
      ['Russia', 2904000, 180],
      ['Singapore', 79000, 450],
      ['South Korea', 15000, 290],
      ['Switzerland', 35000, 230],
      ['United Kingdom', 4015000, 750],
    ]);

    var options = {
      colorAxis: { colors: ['#eee8f3', '#ddd1e7', '#ccbadc', '#bba3d0', '#aa8cc5', '#9975b9', '#885ead', '#7647a2', '#663096', '#551a8b'] },
      legend: 'none',
      width: 900,
      height: 900,

    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
  }
})
