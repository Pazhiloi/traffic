const dropDownBtn = document.querySelector('.vacancies__title'),
      dropDownWrapper = document.querySelector('.vacancies__wrapper'),
      menuBtn = document.querySelector('.menu__btn'),
      menuList = document.querySelector('.menu__list');
      
      menuBtn.addEventListener('click', () => {
        menuList.classList.toggle('menu__list--active')
      });
      dropDownBtn.addEventListener('click', () =>{
        dropDownWrapper.classList.toggle('active');
        dropDownBtn.classList.toggle('active');
      });

    window.onscroll = function showHeader() {
    const header = document.querySelector('.header__inner');
    if(window.pageYOffset > 200) {
      header.classList.add('header__fixed');
    } else{
      header.classList.remove('header__fixed');
    }
   }