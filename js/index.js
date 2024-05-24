
// Открытие корзины товаров
document.querySelector('.order__wrap-title').addEventListener('click', () => {
  document.querySelector('.order').classList.toggle('order__open');
  document.querySelector('.catalog__wrapper').classList.toggle('margin-top');
});

// Информация о товаре по нажатию каждой карточки
document.querySelectorAll('.catalog__item').forEach((item) => {
  item.addEventListener('click', () => {

    document.querySelector('.modal_product').classList.toggle('modal__open');

    document.querySelector('.modal__close').addEventListener('click', () => {
      document.querySelector('.modal_product').classList.remove('modal__open');
    })
  })
});



// Информация о товаре по нажатию карточки
document.querySelector('.order__submit').addEventListener('click', () => {
  document.querySelector('.modal_delivery').classList.toggle('modal__open');

  document.querySelector('.modal-close').addEventListener('click', () => {
    document.querySelector('.modal_delivery').classList.remove('modal__open');
  })
});



// табы
const tabItem = document.querySelectorAll('.navigation__btn');
const tabContent = document.querySelectorAll('.catalog__wrapper-list');

tabItem.forEach(function (element) {
  element.addEventListener('click', open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove('navigation__btn--active');
  })

  tabTarget.classList.add('navigation__btn--active');
  tabContent.forEach(function (item) {
    item.classList.remove('catalog__wrapper-list--active');
  });

  document.querySelector(`#${button}`).classList.add('catalog__wrapper-list--active');
}



// 1й бургер в корзине счетчик
let minus = document.getElementById("minus"), countminus = 0;
let number = document.getElementById("count");
let plus = document.getElementById("plus"), countplus = 0;


minus.onclick = function () {
  countminus -= 1;
  number.innerHTML = countminus + countplus;
};

plus.onclick = function () {
  countplus += 1;
  number.innerHTML = countminus + countplus;
};

// 2й бургер в корзине счетчик
let minus2 = document.getElementById("minus2"), countminus2 = 0;
let number2 = document.getElementById("count2");
let plus2 = document.getElementById("plus2"), countplus2 = 0;


minus2.onclick = function () {
  countminus2 -= 1;
  number2.innerHTML = countminus2 + countplus2;
};

plus2.onclick = function () {
  countplus2 += 1;
  number2.innerHTML = countminus2 + countplus2;
};


// 3й бургер в корзине счетчик
let minus3 = document.getElementById("minus3"), countminus3 = 0;
let number3 = document.getElementById("count3");
let plus3 = document.getElementById("plus3"), countplus3 = 0;


minus3.onclick = function () {
  countminus3 -= 1;
  number3.innerHTML = countminus3 + countplus3;
};

plus3.onclick = function () {
  countplus3 += 1;
  number3.innerHTML = countminus3 + countplus3;
};
