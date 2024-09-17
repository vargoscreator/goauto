function toggleCheckbox(element) {
    let checkbox = element.querySelector('.main__block-delivery');
    checkbox.checked = true;
    let paymentCheckboxes = element.parentElement.querySelectorAll('.main__block-delivery');
    let isChecked = checkbox.checked;
    let isPaymentToFOP = checkbox.parentElement.innerText.includes("Оплата на рахунок ФОП");
    let isPaymentOnDelivery = checkbox.parentElement.innerText.includes("Оплата при отриманні");
  
    paymentCheckboxes.forEach(function (otherBox) {
      if (otherBox !== checkbox && ((isChecked && isPaymentToFOP && otherBox.parentElement.innerText.includes("Оплата при отриманні")) ||
          (isChecked && isPaymentOnDelivery && otherBox.parentElement.innerText.includes("Оплата на рахунок ФОП")))) {
        otherBox.checked = false;
      }
    });
  }
  
  function focusInput(input) {
    input.nextElementSibling.classList.add('focused');
  }
  
  function blurInput(input) {
    if (!input.value) {
        input.nextElementSibling.classList.remove('focused');
    }
  }
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    var orderItems = document.querySelectorAll('.order__item');
    var totalSumText = document.querySelectorAll('.order__item, .order__bottom-total');
  
    let totalSum = 0
    orderItems.forEach(function (item) {
        var amountNumber = item.querySelector('.amount-number');
        var priceElement = item.querySelector('.order__item-budget');
        var amountPlus = item.querySelector('.amount-plus');
        var amountMinus = item.querySelector('.amount-minus');
        if (amountPlus && amountMinus) {
          item.querySelector('.amount-plus').addEventListener('click', function () {
                var currentAmount = parseInt(amountNumber.textContent);
                amountNumber.textContent = currentAmount + 1;
                updateTotalPrice(item, amountNumber, priceElement);
            });
  
            amountMinus.addEventListener('click', function () {
                var currentAmount = parseInt(amountNumber.textContent);
                if (currentAmount > 1) {
                    amountNumber.textContent = currentAmount - 1;
                    updateTotalPrice(item, amountNumber, priceElement);
                }
            });
        }
    });
  
    function updateTotalPrice(item, amountNumber, priceElement) {
        var currentAmount = parseInt(amountNumber.textContent);
        var price = parseInt(priceElement.getAttribute('data-price').replace(/\D/g, ''));
        var totalPrice = currentAmount * price;
        priceElement.textContent = totalPrice.toLocaleString('ru-RU') + '₴';
        totalSum += totalPrice
        console.log(totalSum)
    }
  });
  
  