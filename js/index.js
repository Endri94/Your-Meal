
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
