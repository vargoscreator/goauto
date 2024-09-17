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
});







const scrollWrapper = document.querySelector('.partners__slider');

let isDown = false;
let startX;
let scrollLeft;

scrollWrapper.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - scrollWrapper.offsetLeft;
  scrollLeft = scrollWrapper.scrollLeft;
});

scrollWrapper.addEventListener('mouseleave', () => {
  isDown = false;
});

scrollWrapper.addEventListener('mouseup', () => {
  isDown = false;
});

scrollWrapper.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollWrapper.offsetLeft;
  const walk = (x - startX) * 1;
  scrollWrapper.scrollLeft = scrollLeft - walk;
});



document.addEventListener('click', function(event) {
  if (event.target.classList.contains('main__select-categories')) {
      let filterItem = event.target.closest('.main__select-item.filter-selector');
      let dropdown = filterItem.querySelector('.filter-dropdown');
      if (dropdown.classList.contains('active')) {
          dropdown.classList.remove('active');
          filterItem.classList.remove('active');
      } else {
          document.querySelectorAll('.filter-dropdown.active').forEach(function(dropdown) {
              dropdown.classList.remove('active');
              dropdown.closest('.main__select-item.filter-selector').classList.remove('active');
          });
          dropdown.classList.add('active');
          filterItem.classList.add('active');
      }
  } else {

      if (!event.target.closest('.main__select-categories') && !event.target.closest('.filter-dropdown')) {
          document.querySelectorAll('.filter-dropdown.active').forEach(function(dropdown) {
              dropdown.classList.remove('active');
              dropdown.closest('.main__select-item.filter-selector').classList.remove('active');
          });
      }
  }
});