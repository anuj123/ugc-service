$(function() {

  function setColor(e) {

    // --- Rating Attributes

    var $target = $(e.currentTarget);
    var sliderValue = $target.val();
    console.log(sliderValue);
    switch(true) {
      case 0 < sliderValue && sliderValue <= 2 :
        $target.css('background', 'red');
        $target.siblings('.text-feedback').html('This is c***');
        break;
      case 2 < sliderValue && sliderValue <= 4 :
        $target.css('background', 'orange');
        $target.siblings('.text-feedback').html('its below average');
        break;
      case 4 < sliderValue && sliderValue <= 6 :
        $target.css('background', 'yellow');
        $target.siblings('.text-feedback').html('its average');
        break;
      case 6 < sliderValue && sliderValue <= 8 :
        $target.css('background', 'orange');
        $target.siblings('.text-feedback').html('its good');
        break;
      case 8 < sliderValue && sliderValue <= 10 :
        $target.css('background', 'green');
        $target.siblings('.text-feedback').html('its super duper awesome');
        break;
      defalut:
        $target.css('background', 'blue');
    }
  };

  var $sliders = $("#rating .property")

  $sliders.noUiSlider({
    start: 5,
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

  $('.save-rating').on('click', function(e){
    e.preventDefault();
    setTimeout(function(){
      google.load('visualization',
      '1', {'callback': drawChart,
      'packages':['corechart']})},
    2000);
  });

});
