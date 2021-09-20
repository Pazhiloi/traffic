window.onscroll = function showHeader() {
    const header = document.querySelector('.header__inner');
    if(window.scrollY > 200) {
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
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
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
      store = document.querySelector('.store'),
      storeWrapper = document.querySelector('.store__wrapper'),
      dropDownWrapper = document.querySelector('.vacancies__wrapper'),
      menuBtn = document.querySelector('.menu__btn'),
      menuList = document.querySelector('.menu__list'),
      aboutBtn = document.querySelector('.about__button'),
      aboutFormBtn = document.querySelector('.about__form-button'),
      aboutForm = document.querySelector('.about__form'),
      coursesWrapper = document.querySelector('.courses__wrapper'),
      coursesListWrapper = document.querySelector('.courses__list-wrapper'),
      coursesPreview = document.querySelectorAll('.courses__preview'),
      cardBtn = document.querySelectorAll('.card__button'),
      faqItems = document.querySelectorAll('.faq__item'),
      enter = document.querySelectorAll('.enter'),
      signup = document.querySelector('.top__button'),
      popupLog = document.getElementById('popup-log'),
      popupReg = document.getElementById('popup-reg'),
      lazyImages = document.querySelectorAll('img[data-src]'),
      windowHeight = document.documentElement.clientHeight;



      store.addEventListener('click', () =>{
        storeWrapper.classList.toggle('active');
      });
       let lazyImagesPosition = [];

      if (lazyImages.length > 0) {
        lazyImages.forEach(img => {
          if (img.dataset.src) {
            lazyImagesPosition.push(img.getBoundingClientRect().top + scrollY);
            lazyScrollCheck();
          }
        });
      }

      window.addEventListener('scroll', lazyScroll);

      function lazyScroll() {
        if (document.querySelectorAll('img[data-src]').length > 0) {
          lazyScrollCheck();
        }
      }

      function lazyScrollCheck() {
        let imgIndex = lazyImagesPosition.findIndex(
          item => scrollY > item - windowHeight
        );
        if (imgIndex >= 0) {
          if (lazyImages[imgIndex].dataset.src) {
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
            lazyImages[imgIndex].removeAttribute('data-src');
          } 
          delete lazyImagesPosition[imgIndex];
        }
      };
       faqItems.forEach(item => {
        item.addEventListener('click', () => {
          item.classList.toggle('active');
        })
      });   
       cardBtn.forEach(btn => {
        btn.addEventListener('click', () =>{
          btn.classList.add('active');
        })
      });
     
      menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        menuList.classList.toggle('menu__list--active');
      });
      dropDownBtn.addEventListener('click', () =>{
        dropDownWrapper.classList.toggle('active');
        dropDownBtn.classList.toggle('active');
      });
       enter.forEach(enterBtn => {
         enterBtn.addEventListener('click', (e) =>{
         e.preventDefault();
         openModal(popupLog);
       } );
      });
      
      
       function closeModalListener(selector) {
         selector.addEventListener('click', (e) => {
           if (e.target === selector) {
             closeModal(selector);
           }
         });
          document.addEventListener('keydown', (e) => {
          if (e.code === "Escape" && selector.classList.contains('active')) { 
            closeModal(selector);
           }
        });
       }
       closeModalListener(popupLog);
       closeModalListener(popupReg);
      
     function openModal(modalSelector) {
       modalSelector.classList.add('active');
       document.body.style.overflow = 'hidden';
     }
     function closeModal(modalSelector) {
       modalSelector.classList.remove('active');
       document.body.style.overflow = '';
     }
     
      
      
     coursesPreview.forEach(item => {
        item.addEventListener('click', () =>{
          item.classList.toggle('active');
        })
      });
         coursesWrapper.addEventListener('click', () => {
        coursesWrapper.classList.toggle('active');
        coursesListWrapper.classList.toggle('active');
      });
      
        aboutBtn.addEventListener('click', () => {
        aboutForm.classList.add('active');
        aboutBtn.classList.add('hide');
      });
  
      aboutFormBtn.addEventListener('click', () => {
        aboutForm.classList.remove('active');
        aboutBtn.classList.remove('hide');
      });  
      try {
        signup.addEventListener('click', (e) =>{
         e.preventDefault();
        openModal(popupReg);
       } );
      } catch (error) {
        console.log('error');
      }
   });