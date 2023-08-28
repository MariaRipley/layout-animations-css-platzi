'use strict';

const modal1 = document.querySelector('.modal-1');
const modal2 = document.querySelector('.modal-2');
const modal3 = document.querySelector('.modal-3');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const closeButton1 = document.querySelector('.modal__content--close-1');
const closeButton2 = document.querySelector('.modal__content--close-2');
const closeButton3 = document.querySelector('.modal__content--close-3');

button1.addEventListener('click', () => {
    modal1.classList.remove('hidden');
    modal1.classList.add('vissible');
});

button2.addEventListener('click', () => {
    modal2.classList.remove('hidden');
    modal2.classList.add('vissible');
});

button3.addEventListener('click', () => {
    modal3.classList.remove('hidden');
    modal3.classList.add('vissible');
});

closeButton1.addEventListener('click', () => {
    modal1.classList.add('hidden');
    modal1.classList.remove('vissible');
})

closeButton2.addEventListener('click', () => {
    modal2.classList.add('hidden');
    modal2.classList.remove('vissible');
})

closeButton3.addEventListener('click', () => {
    modal3.classList.add('hidden');
    modal3.classList.remove('vissible');
})
