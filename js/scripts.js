$(document).ready(function() {
  
  $('.term-showing').click(function(){
    $('.definition-hidden').removeClass();
    $('.definition-hidden').addClass('.definition-showing');
    $('.term-showing').toggleClass();
    //$('.term-showing').addClass('term-hidden');
  });

  $('.definition-showing').click(function(){
    $('term-hidden').removeClass();
    $('term-hidden').addClass('.term-showing');
  });


});