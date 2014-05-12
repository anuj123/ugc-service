$(function() {
var $banner = $('#banner');
var $expanded = $banner.find('.expanded');
var $collapsed = $banner.find('.collapsed');

$banner.on('click', '.collapsed footer a', function (e) {
  $expanded.stop(true, false).slideToggle();
});


  
});
