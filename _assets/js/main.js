// general js for the project that wouldn't be a reuseable component


// Fill form
$('.js-form-fill').click(function(){
  var target = $(this).data('target-id');
  var mask = $('#mask-' + target);
  // deselect other mask components in group
  var maskgroup = mask.data('form-group');
  $(".form-mask[data-form-group='" + maskgroup + "'].selected").removeClass('selected');
  // select
  $('#' + target).prop('checked', true);
  mask.addClass('selected');
});

