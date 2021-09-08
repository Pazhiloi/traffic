window.onscroll = function showHeader() {
    const header = document.querySelector('.header__inner');
    if(window.pageYOffset > 200) {
      header.classList.add('header__fixed');
    } else{
      header.classList.remove('header__fixed');
    }
   }

$(function () {
  $('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    centerMode: true,
    centerPadding: '0px', 
     prevArrow:'<button type="button" class="results__prev"><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM4 10.5L2 10.5L2 13.5L4 13.5L4 10.5Z" fill="white" /></svg></button>',
    nextArrow: '<button type="button" class="results__next"><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM4 10.5L2 10.5L2 13.5L4 13.5L4 10.5Z"fill="white" /></svg></button>',
    infinite: false,
    responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false
      }
    },
    {
      breakpoint: 610,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
  });
  $('.review__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
     prevArrow:'<button type="button" class="review__prev"><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM4 10.5L2 10.5L2 13.5L4 13.5L4 10.5Z" fill="white" /></svg></button>',
    nextArrow: '<button type="button" class="review__next"><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM4 10.5L2 10.5L2 13.5L4 13.5L4 10.5Z"fill="white" /></svg></button>',
      infinite: false
  });
});
window.addEventListener('DOMContentLoaded', () => {
const dropDownBtn = document.querySelector('.vacancies__title'),
      dropDownWrapper = document.querySelector('.vacancies__wrapper'),
      menuBtn = document.querySelector('.menu__btn'),
      menuList = document.querySelector('.menu__list'),
      aboutBtn = document.querySelector('.about__button'),
      aboutFormBtn = document.querySelector('.about__form-button'),
      aboutForm = document.querySelector('.about__form'),
      coursesWrapper = document.querySelector('.courses__wrapper'),
      coursesListWrapper = document.querySelector('.courses__list-wrapper'),
      accordeons = document.querySelectorAll('.courses__item'),
      cardBtns = document.querySelectorAll('.card__button'),
      cards = document.querySelector('.card'),
      faqItems = document.querySelectorAll('.faq__item');
      faqItems.forEach(item => {
        item.addEventListener('click', () => {
          item.classList.toggle('active');
        })
      });

    //  cardBtns.forEach(btn => {
    //   btn.addEventListener('click', () =>{
    //     cards.classList.toggle('active');
    //   })
    //  });
      accordeons.forEach(item => {
        item.addEventListener('click', () =>{
          item.classList.toggle('active');
        })
      });
      
      menuBtn.addEventListener('click', () => {
        menuList.classList.toggle('menu__list--active')
      });
      dropDownBtn.addEventListener('click', () =>{
        dropDownWrapper.classList.toggle('active');
        dropDownBtn.classList.toggle('active');
      });

      aboutBtn.addEventListener('click', () => {
        aboutForm.classList.add('active');
        aboutBtn.classList.add('hide');
      });
      aboutFormBtn.addEventListener('click', () => {
        aboutForm.classList.remove('active');
        aboutBtn.classList.remove('hide');
      });
      coursesWrapper.addEventListener('click', () => {
        coursesWrapper.classList.toggle('active');
        coursesListWrapper.classList.toggle('active');
      });

    
   });