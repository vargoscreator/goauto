$(document).ready(function(){
  $('.recommendations__slider').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ]
  });
  $('.main__image-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="main__image-slider--prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <g clip-path="url(#clip0_297_1720)"> <path d="M7.00013 11.9993C7.00013 12.9343 7.36413 13.8123 8.02513 14.4743L17.3161 23.8513C17.4141 23.9503 17.5431 23.9993 17.6711 23.9993C17.7981 23.9993 17.9261 23.9513 18.0231 23.8543C18.2191 23.6603 18.2211 23.3433 18.0271 23.1473L8.73413 13.7683C8.25913 13.2933 8.00013 12.6653 8.00013 11.9983C8.00013 11.3313 8.26013 10.7033 8.73213 10.2303L18.0271 0.851265C18.2211 0.655265 18.2191 0.338265 18.0231 0.144265C17.8281 -0.0507346 17.5101 -0.0467346 17.3161 0.148265L8.02313 9.52727C7.36413 10.1863 7.00013 11.0653 7.00013 12.0003V11.9993Z" fill="#111111"/> </g> <defs> <clipPath id="clip0_297_1720"> <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)"/> </clipPath> </defs> </svg></div>',
    nextArrow: '<div class="main__image-slider--next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <g clip-path="url(#clip0_297_1718)"> <path d="M16.9999 11.9993C16.9999 12.9343 16.6359 13.8123 15.9749 14.4743L6.68387 23.8513C6.58587 23.9503 6.45687 23.9993 6.32887 23.9993C6.20187 23.9993 6.07387 23.9513 5.97687 23.8543C5.78087 23.6603 5.77887 23.3433 5.97287 23.1473L15.2659 13.7683C15.7409 13.2933 15.9999 12.6653 15.9999 11.9983C15.9999 11.3313 15.7399 10.7033 15.2679 10.2303L5.97287 0.851265C5.77887 0.655265 5.78087 0.338265 5.97687 0.144265C6.17187 -0.0507346 6.48987 -0.0467346 6.68387 0.148265L15.9769 9.52727C16.6359 10.1863 16.9999 11.0653 16.9999 12.0003V11.9993Z" fill="#111111"/> </g> <defs> <clipPath id="clip0_297_1718"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg></div>',
  });
});

function fillDots() {
  let articleBlocks = document.querySelectorAll('.main__characteristics-item');

  articleBlocks.forEach(function (block) {
    let textWidth = block.querySelector('.text').offsetWidth;
    let numberWidth = block.querySelector('.descr').offsetWidth;
    let blockWidth = block.offsetWidth;
    let dotsSpan = block.querySelector('.dots');
    let availableWidth = blockWidth - textWidth - numberWidth;
    dotsSpan.style.width = availableWidth + 'px';
    dotsSpan.textContent = '.'.repeat(availableWidth);
  });
}

window.addEventListener('load', fillDots);
window.addEventListener('resize', fillDots);




document.addEventListener("DOMContentLoaded", function () {
  var amountNumber = document.querySelector('.amount-number');
  var priceElement = document.querySelector('.main__top-price');

  document.querySelector('.amount-plus').addEventListener('click', function () {
      var currentAmount = parseInt(amountNumber.textContent);
      amountNumber.textContent = currentAmount + 1;
      updateTotalPrice();
  });

  document.querySelector('.amount-minus').addEventListener('click', function () {
      var currentAmount = parseInt(amountNumber.textContent);
      if (currentAmount > 1) {
          amountNumber.textContent = currentAmount - 1;
          updateTotalPrice();
      }
  });

  function updateTotalPrice() {
      var currentAmount = parseInt(amountNumber.textContent);
      var price = parseInt(priceElement.getAttribute('data-price').replace(/\D/g, ''));
      var totalPrice = currentAmount * price;
      priceElement.textContent = totalPrice.toLocaleString('ru-RU') + '₴';
  }
});

