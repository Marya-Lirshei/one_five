new Swiper('.swiper',{
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 'auto',
  spaceBetween:16,

});

let text = document.querySelector('.show-all');
let one = document.querySelector('.second-half__wrapper');
let two = document.querySelector('.desctop-content');
let show = document.querySelector('.show-all__text');
let arrow = document.querySelector('.show-all img');

  text.addEventListener('click',function(){
    one.classList.toggle('second-half__wrapper--click');
    two.classList.toggle('desctop-content--click');
    arrow.classList.toggle('show-all__arrow');

    let txt = show.textContent;
    show.textContent = (txt === 'Показать все' && 'Скрыть все') || 'Показать все';


  })



