$(document).ready(function() {

  var operation = "";

  $('.number').click(function() {
    var v = $(this).val();
		$('.screen').val($('.screen').val() + v);

  });

  $('.operator').click(function() {
    operation = $(this).val();
    var v = $(this).val();
		$('.screen').val($('.screen').val() + v);
  });

  $('.clear').click(function() {
     $('.screen').val('');
  });

  $('.equal').click(function() {
    var input = $('.screen').val();
    $('.screen').val(eval(input));
  });

 });
