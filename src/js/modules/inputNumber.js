import $ from 'jquery';
const inputNumber = () => {
  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="/assets/img/icon/plus.svg" alt="+"></div><div class="quantity-button quantity-down"><img src="/assets/img/icon/minus.svg" alt="-"></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  let summ = $('.sleep-nights').val() * $('.sleep-summ').data('night') + ($('.sleep-guests').val() - 1) * $('.sleep-summ').data('guest');


  $('.sleep-summ').html(summ);

  $('.sleep .quantity-button').click(() => {
      let summ = $('.sleep-nights').val() * $('.sleep-summ').data('night') + ($('.sleep-guests').val() - 1) * $('.sleep-summ').data('guest');


      $('.sleep-summ').html(summ);
  });

  $('.sleep-nights:input, .sleep-guests:input').on('propertychange input', function (e) {
    var valueChanged = false;

    if (e.type == 'propertychange') {
      valueChanged = e.originalEvent.propertyName == 'value';
    } else {
      valueChanged = true;
    }
    if (valueChanged) {
      let summ = $('.sleep-nights').val() * $('.sleep-summ').data('night') + ($('.sleep-guests').val() - 1) * $('.sleep-summ').data('guest');
      $('.sleep-summ').html(summ);
    }
  });

    
};

export default inputNumber;