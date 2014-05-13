$(function() {

  setTimeout(function(){
    google.load('visualization',
    '1', {'callback': function () {},
    'packages':['corechart']})},
  2000);

  function getColor(val) {
    var color = '';
    switch(true) {
      case 0 == val :
        var color = 'grey';
        break;
      case 0 < val && val <= 2 :
        color = 'red'
        break;
      case 2 < val && val <= 4 :
        color = 'blue';
        break;
      case 4 < val && val <= 6 :
        color = 'orange';
        break;
      case 6 < val && val <= 8 :
        color = 'yellow';
        break;
      case 8 < val && val <= 10 :
        color = 'green';
        break;
      defalut:
        color = 'grey';
     };
     return color;
  }

  function setColor(e) {

    // --- Rating Attributes

    var $target = $(e.currentTarget);
    var sliderValue = $target.val();
    switch(true) {
      case 0 == sliderValue :
        $target.css('background-color', '');
        $target.siblings('.text-feedback').html('dont know');
        $target.siblings('input').val(sliderValue);
        break;
      case 0 < sliderValue && sliderValue <= 2 :
        $target.css('background-color', 'red');
        $target.siblings('.text-feedback').html('thumbs down');
        $target.siblings('input').val(sliderValue);
        break;
      case 2 < sliderValue && sliderValue <= 4 :
        $target.css('background-color', 'blue');
        $target.siblings('.text-feedback').html('its below average');
        $target.siblings('input').val(sliderValue);
        break;
      case 4 < sliderValue && sliderValue <= 6 :
        $target.css('background-color', 'orange');
        $target.siblings('.text-feedback').html('its average');
        $target.siblings('input').val(sliderValue);
        break;
      case 6 < sliderValue && sliderValue <= 8 :
        $target.css('background-color', 'yellow');
        $target.siblings('.text-feedback').html('its good');
        $target.siblings('input').val(sliderValue);
        break;
      case 8 < sliderValue && sliderValue <= 10 :
        $target.css('background-color', 'green');
        $target.siblings('.text-feedback').html('its super duper awesome');
        $target.siblings('input').val(sliderValue);
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

  var drawChart = function (displayArray) {
    var data = google.visualization.arrayToDataTable(displayArray);

    var options = {
      title: 'What People are saying',
      vAxis: {title: 'Attributes',  titleTextStyle: {color: 'red'}}
    };


    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    $('#rating').hide();
  }

  $('form.save_rating').on('submit', function(e) {
    e.preventDefault();
    var dataArray = $(this).serializeArray();
    var displayArray = [['Attribute', 'Rating', { role: 'style'}]]
    dataArray.forEach(function(attr) {
      displayArray.push([attr.name, parseFloat(attr.value), getColor(attr.value)])
    })
    drawChart(displayArray);
  });



});
