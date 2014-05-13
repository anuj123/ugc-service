$(function() {

  setTimeout(function(){
    google.load('visualization',
    '1', {'callback': function () {},
    'packages':['corechart']})},
  2000);

  function setColor(e) {

    // --- Rating Attributes

    var $target = $(e.currentTarget);
    var sliderValue = $target.val();
    console.log(sliderValue);
    switch(true) {
      case 0 == sliderValue :
        $target.css('background-color', '');
        $target.siblings('.text-feedback').html('dont know');
        break;
      case 0 < sliderValue && sliderValue <= 2 :
        $target.css('background-color', 'red');
        $target.siblings('.text-feedback').html('thumbs down');
        break;
      case 2 < sliderValue && sliderValue <= 4 :
        $target.css('background-color', 'orange');
        $target.siblings('.text-feedback').html('its below average');
        break;
      case 4 < sliderValue && sliderValue <= 6 :
        $target.css('background-color', 'yellow');
        $target.siblings('.text-feedback').html('its average');
        break;
      case 6 < sliderValue && sliderValue <= 8 :
        $target.css('background-color', 'orange');
        $target.siblings('.text-feedback').html('its good');
        break;
      case 8 < sliderValue && sliderValue <= 10 :
        $target.css('background-color', 'green');
        $target.siblings('.text-feedback').html('its super duper awesome');
        break;
      defalut:
        $target.css('background-color', 'grey');
    }
  };

  var $sliders = $("#rating .property")

  $sliders.noUiSlider({
    start: 0,
    range: {
      'min': 0,
      'max': 10
    }
  });

  $sliders.on('slide', setColor);

  //----- Display Ratings
  //
  //display ratings

  var drawChart = function () {
    var data = google.visualization.arrayToDataTable([
     ['Attribute', 'Rating', { role: 'style' }],
     ['Ambience',  5, 'yellow'],
     ['Parking', 10, 'green' ],
     ['Price',  7, 'orange'],
     ['Service',  1, 'grey'],
     ['Food', 8, 'orange']
    ]);

    var options = {
      title: 'What People are saying',
      vAxis: {title: 'Attributes',  titleTextStyle: {color: 'red'}}
    };


    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    $('#rating').hide();
  }

  $('.save-rating').on('click', function(e) {
    e.preventDefault();
    drawChart();
  });



});
