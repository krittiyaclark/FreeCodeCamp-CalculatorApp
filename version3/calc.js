/*
 * Implement all your JavaScript in this file!
 */


  $(document).ready(function() {
    var num1 = 0;
    var num2 = 0;

    var operator = '';
    var total = '';
    var clearDisplay = false;

    $('button').on('click', function(e) {
        var btn = e.target.innerHTML;

        if (btn >= '0' && btn <= '9') {
          handleNumber(btn);
          console.log('number');
        } else {
          handleOperator(btn);
          console.log('operator');
        }
    });

    function handleNumber(num) {
      if (num1 == '') {
          num1 = num;
        } else {
          num2 = num;
        }
        displayButton(num);
    }

    function handleOperator(op) {
      if (operator == '') {
          operator = op;
        } else {
          handleTotal();
          operator = op;
        }
        if (op != '=') {
          displayButton(op);
        }
    }

    function handleTotal() {
        switch (operator) {
            case '+':
                total = parseInt(num1) + parseInt(num2);
                showResultOnButton(total);
                break;
            case '-':
                total = parseInt(num1) - parseInt(num2);
                showResultOnButton(total);
                break;
            case '/':
                total = parseInt(num1) / parseInt(num2);
                showResultOnButton(total);
                break;
            case '*':
                total = parseInt(num1) * parseInt(num2);
                showResultOnButton(total);
                break;
        }
        updateVariables();
    }

    function displayButton(btn) {
      // clearDisplay = true;
      $('#display').val($('#display').val() + btn);
    }

    function showResultOnButton(btn) {
      // clearDisplay = false;
      $('#display').val(btn);
    }

    function updateVariables() {
      num1 = total;
      num2 = 0;
    }


    $('#clearButton').on('click', function() {
      num1 = 0;
      num2 = 0;

      operator = '';
      total = '';
      // clearDisplay = false;

      $('#display').val('');
    });

});
