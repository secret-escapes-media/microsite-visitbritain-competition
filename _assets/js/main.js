// general js for the project that wouldn't be a reuseable component



$('.js-question-1').click(function(){
  // update form with answer
  var answer = $(this).attr('data-answer');
  $('#comp-' + answer ).prop('checked', true);
  // save answer in data attr to generate result
  var category = $(this).attr('data-category');
  $('#question-1').attr('data-answer',category);
  // setup country options in question 3
  if(category === 'coast'){
    $('#question-location-scotland').hide();
    $('#question-location-northern-ireland').hide();
  }else if(category === 'country'){
    $('#question-location-northern-ireland').hide();
    $('#question-location-wales').hide();
  }else if(category === 'city'){
    $('#question-location-wales').hide();
    $('#question-location-scotland').hide();
  }
  // progress questions
  $('#question-1').hide();
  $('#question-2').show();
});



$('.js-question-2').click(function(){
  // update form with answer
  var answer = $(this).attr('data-answer');
  $('#comp-' + answer ).prop('checked', true);
  $('#question-2').hide();
  $('#question-3').show();
});

$('.js-question-3').click(function(){
  var location = $(this).attr('data-answer');
  var type = $('#question-1').attr('data-answer');
  getResult(type,location);
});

function getResult(type,location){
  // update form with answer
  $('#comp-' + location + "-" + type ).prop('checked', true);
  // select result
  $('#result-' + location + "-" + type).addClass('selected').show();
  // hide all questions, show result
  $('.question').hide();
  $('#result').show();
  $('#complete-entry').show();

}