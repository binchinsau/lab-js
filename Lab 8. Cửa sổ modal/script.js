'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const openModal = function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  // console.log(e);
};
const closeModal = function (x) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  // console.log(x);
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (k) {
  console.log(k);
  if (k.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
