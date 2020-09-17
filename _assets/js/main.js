// general js for the project that wouldn't be a reuseable component


// Fill form
$('.js-form-fill').click(function(){
  var target = $(this).data('target-id');
  var mask = $('#mask-' + target);
  // deselect other mask components in group
  var maskgroup = mask.data('form-group');
  $(".form-mask[data-form-group='" + maskgroup + "']").removeClass('selected').addClass('disabled');
  // select
  $('#' + target).click();
  mask.removeClass('disabled').addClass('selected');

  validatePrizes();
});

// Validate prize selected
$('.js-form-btn').attr('disabled', true).html('Please select your escape');
function validatePrizes(){
  var prize_buttons = $('#form__input__prize .input-button');
  prize_buttons.each(function(){
    if( $(this).hasClass('is-selected') ){
      $('.js-form-btn').attr('disabled', false).html('Submit entry');
    }
  });
}
