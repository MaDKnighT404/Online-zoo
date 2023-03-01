import {
  animalCards
} from '../helpers/animals.js';
const picturesWrapper = document.querySelector('.animal__pictures__wrapper');
const picturesInner = document.querySelector('.animals__pictures');
const buttonNext = document.querySelector('.btn__next');
const buttonPrev = document.querySelector('.btn__prev');
let step = 0;
let randomArray = [];


export function createFirstCards() {
  createRandomArray();
  picturesWrapper.offsetWidth > 900 ? createRandomCards(6, 'append') : createRandomCards(4, 'append');
}

function createRandomCards(iterationNumber, insertPoint) {
  let method = insertPoint;
  for (let i = 0; i < iterationNumber; i++) {
    const newCard = document.createElement('div');
    newCard.classList.add('animal__card');
    newCard.innerHTML = `
    <img src="${animalCards[randomArray[i]].image}" alt="Giant pandas"">
    <p class=" animal__info-container"><span class="animal__name"> ${animalCards[randomArray[i]].name} </span> <br> <span
      class="animal__habitat"> ${animalCards[randomArray[i]].location}</span></p>
    <div class="${animalCards[randomArray[i]].meal}"></div>
    `;
    if (method === 'append') {
      picturesInner.append(newCard);
    }
    if (method === 'prepend') {
      picturesInner.prepend(newCard);
    }
  }
}

export function moveSlider() {

  function moveSlivederForward() {
    picturesInner.style.transition = `.5s`;
    createRandomArray();
    picturesWrapper.offsetWidth > 900 ? step = -(picturesInner.offsetWidth + 30) : step = -660;
    picturesInner.style.marginLeft = `${step}px`;
    picturesWrapper.offsetWidth > 900 ? createRandomCards(6, 'append') : createRandomCards(4, 'append');
    picturesWrapper.offsetWidth > 900 ? deleteCardsStart(6) : deleteCardsStart(4);
    resetEventListener();
  }

  function moveSlivederBackward() {
    picturesInner.style.transition = `0s`;
    createRandomArray();
    picturesWrapper.offsetWidth > 900 ? step = -(picturesInner.offsetWidth + 30) : step = -660;
    picturesInner.style.transform = `translateX(${step}px)`;
    picturesWrapper.offsetWidth > 900 ? createRandomCards(6, 'prepend') : createRandomCards(4, 'prepend');

    setTimeout(() => {
      picturesInner.style.transition = `.5s`;
      picturesInner.style.transform = `translateX(0px)`;
    }, 1);

    picturesWrapper.offsetWidth > 900 ? deleteCardsEnd(6) : deleteCardsEnd(4);
    resetEventListener();
  }
  buttonNext.addEventListener('click', moveSlivederForward);
  buttonPrev.addEventListener('click', moveSlivederBackward);


  function resetEventListener() {
    buttonNext.removeEventListener('click', moveSlivederForward);
    buttonPrev.removeEventListener('click', moveSlivederBackward);
    setTimeout(() => {
      buttonNext.addEventListener('click', moveSlivederForward);
      buttonPrev.addEventListener('click', moveSlivederBackward);
    }, 520);
  }
}





function deleteCardsStart(iterationNumber) {
  setTimeout(() => {
    for (let i = 0; i < iterationNumber; i++) {
      const cards = document.querySelectorAll('.animal__card');
      cards[0].remove();
      picturesInner.style.transition = '0s';
      picturesInner.style.marginLeft = `0px`;
    }
  }, 500);
}

function deleteCardsEnd(iterationNumber) {
  setTimeout(() => {
    for (let i = 0; i < iterationNumber; i++) {
      const cards = document.querySelectorAll('.animal__card');
      cards[cards.length - 1].remove();
    }
  }, 500);

}


function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomArray() {
  randomArray = [];
  for (let i = 0; i < 500; i++) {
    randomArray.push(getRandomNumber(0, 11));
  }
  randomArray = Array.from(new Set(randomArray));
}