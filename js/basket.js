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
  let orderItems = document.querySelectorAll('.order__item');
  let totalSumText = document.querySelectorAll('.order__total-price');
  let orderItemBudgets = document.querySelectorAll('.order__item-budget');
  let numberGoods = document.getElementById('product-number');


  orderItems.forEach(function (item) {
     let amountNumber = item.querySelector('.amount-number');
     let priceElement = item.querySelector('.order__item-budget');
     let amountPlus = item.querySelector('.amount-plus');
     let amountMinus = item.querySelector('.amount-minus');
     if (amountPlus && amountMinus) {
        item.querySelector('.amount-plus').addEventListener('click', function () {
           let currentAmount = parseInt(amountNumber.textContent);
           amountNumber.textContent = currentAmount + 1;
           updateTotalPrice(amountNumber, priceElement);
        });

        amountMinus.addEventListener('click', function () {
           let currentAmount = parseInt(amountNumber.textContent);
           if (currentAmount > 1) {
              amountNumber.textContent = currentAmount - 1;
              updateTotalPrice(amountNumber, priceElement);
           }
        });
     }
  });
  function updateOrderItems() {
    return Array.from(document.querySelectorAll('.order__item'));
  }
  updateTotalAmount()

  function updateTotalAmount() {

     let totalAmount = 0;
     updateOrderItems().forEach(function (item) {
      let priceElement = item.querySelector('.order__item-budget');
      let priceString = priceElement.textContent.trim();
      let price = parseInt(priceString.replace(/\D/g, ''));
      totalAmount += price;
    });

    let formattedTotalAmount = totalAmount.toLocaleString();
    totalSumText.forEach(element => {
      element.textContent = formattedTotalAmount.toLocaleString('ru-RU') + '₴';
    });

    numberGoods.textContent = updateOrderItems().length;
  }
  function updateTotalPrice(amountNumber, priceElement) {
     let currentAmount = parseInt(amountNumber.textContent);
     let price = parseInt(priceElement.getAttribute('data-price').replace(/\D/g, ''));
     let totalPrice = currentAmount * price;
     priceElement.textContent = totalPrice.toLocaleString('ru-RU') + '₴';
     updateTotalAmount();
  }
  function deleteOrderItem(orderItem) {
    if (orderItem) {
      orderItem.remove();
      updateTotalAmount();
    }
  }
  let deleteButtons = document.querySelectorAll('.order__item-delete');
  deleteButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var orderItem = button.closest('.order__item');
      deleteOrderItem(orderItem);
    });
  });
  updateTotalAmount(); 
});


const form = document.getElementById("formSend");
const error = document.querySelector(".error");
const nameValue = document.getElementById("name");
const telValue = document.getElementById("phone-basket");
const submitBtn = document.querySelector(".main__form-btn.mobile-on");

form.addEventListener("submit", formSend);
submitBtn.addEventListener("click", confirmForm);

nameValue.addEventListener("input", removeErrorMessage);
telValue.addEventListener("input", removeErrorMessage);

function formSend(event) {
  event.preventDefault();
  let wasError = false;

  if (nameValue.value.trim() === '') {
    nameValue.classList.add('errorMessage');
    wasError = true;
  } else {
    nameValue.classList.remove('errorMessage');
  }

  if (telValue.value.trim() === '') {
    telValue.classList.add('errorMessage');
    wasError = true;
  } else {
    telValue.classList.remove('errorMessage');
  }

  if (wasError) {
    error.classList.add('show');
  } else {
    error.classList.remove('show');
    form.submit();
  }
}

function removeErrorMessage() {
  if (nameValue.value.trim() !== '' || telValue.value.trim() !== '') {
    this.classList.remove('errorMessage');
  }
    if (nameValue.value.trim() !== '' && telValue.value.trim() !== '') {
    error.classList.remove('show');
  }
}

function confirmForm(event) {
  formSend(event)
}




const phoneInputBasket = document.getElementById("phone-basket");
const maskOptions2 = {
  mask: '+38(000)-000-00-00',
  lazy: true
};
const mask2 = new IMask(phoneInputBasket, maskOptions2);