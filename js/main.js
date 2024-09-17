const body = document.querySelector('.body');
const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
burger.addEventListener('click', function() {
  headerMenu.classList.toggle('active');
  burger.classList.toggle('active');
  if (headerMenu.classList.contains('active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
});
window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);

function checkScreenWidth() {
    if (window.innerWidth > 940) {
        document.body.style.overflow = '';
        headerMenu.classList.remove('active');
        burger.classList.remove('active');
    }
}

const headerLinkName = document.querySelector('.header__link-name');
headerLinkName.addEventListener('click', function() {
  headerLinkName.classList.toggle('show');
});


let popupBtns = document.querySelectorAll('.advice__btn, .header__btn-advice, .popup-btn');
let popupClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
popupClose.addEventListener('click', addActiveToBlock);
popupBtns.forEach(function(button) {
    button.addEventListener('click', addActiveToBlock);
});
function addActiveToBlock() {
  popup.classList.toggle('active');
  if (popup.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}
popup.addEventListener('click', function(event) {
  if (event.target.classList.contains('popup')) {
    addActiveToBlock()
  }
});



const phoneInput = document.getElementById("phone");
const maskOptions = {
  mask: '+38(000)-000-00-00',
  lazy: true
};
const mask = new IMask(phoneInput, maskOptions);