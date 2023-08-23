'use strict';

const modal = document.querySelector('.modal');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const closeButton = document.querySelector('.modal__content--close');

button1.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('vissible');
});

button2.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('vissible');
});

button3.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('vissible');
});

closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('vissible');
})