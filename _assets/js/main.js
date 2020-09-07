// general js for the project that wouldn't be a reuseable component

$('.js-question-1').click(function(){
  $('#question-1').hide();
  $('#question-2').show();
});

$('.js-question-2').click(function(){
  $('#question-2').hide();
  $('#question-3').show();
});

$('.js-question-3').click(function(){
  $('#question-3').hide();
  $('#question-4').show();
  $('#complete-entry').show();
});