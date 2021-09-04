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