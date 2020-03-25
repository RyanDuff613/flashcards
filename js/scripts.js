$(document).ready(function() {
  
  $('#javascript').click(function(){
    $('#definition').slideToggle();
    $('#javascript').slideToggle();
  });

  $('#definition').click(function(){
    $('#javascript').slideToggle();
    $('#definition').slideToggle();
  });


});