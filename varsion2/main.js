$(document).ready(function() {

  var add = function(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a + b;
  }

  var subtract = function(a, b) {
    return a - b;
  }

  var multiply = function(a, b) {
    return a * b;
  }

  var divide = function(a, b) {
    return a / b;
  }
  
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

  var ops = {
    '+': add,
    '-': subtract,
    'x': multiply,
    '/': divide
  };

  $('.equal').click(function() {
    var input = $('.screen').val();
    var parts = input.match(/^(\d+)(\D)(\d+)/);
    //var func = add + subtract + multiply + divide;
    var result = input += parts;
    $('.screen').val(Math.round(result));
    });
});
