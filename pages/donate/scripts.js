import {activeBurgerMenu} from '../../assets/helpers/burger_menu.js';
activeBurgerMenu (); 


const marksWrapper = document.querySelectorAll('.mark__wrapper');
const marks = document.querySelectorAll('.scrollbar__mark');
const moneys = document.querySelectorAll('.money');
const amountInput = document.querySelector('.another__amount')


// for loading page:
marks[marks.length - 3].classList.add('scrollbar__select');
moneys[moneys.length - 3].classList.add('orange__symbol');
amountInput.value = 100;


function setAmountLimit() {
  const input = document.querySelector('.another__amount');
  input.oninput = () => {
    if (input.value.length > 4) {
      input.value = input.value.slice(0,4);
     }
  };
}
setAmountLimit();



function setDonatePicture (index) {
  marks.forEach(mark => mark.classList.remove('scrollbar__select'));
  moneys.forEach(mark => mark.classList.remove('orange__symbol'));
  marks[index].classList.add('scrollbar__select');
  moneys[index].classList.add('orange__symbol');
}

function selectDonate () {
  marksWrapper.forEach((wrapper,index) => {
    wrapper.addEventListener('click', ()=> {
      setDonatePicture(index);
      amountInput.value = moneys[index].dataset.donate;
    });
  });
} 
selectDonate ();

amountInput.addEventListener('input', ()=> {
  if (amountInput.value) {
    marks.forEach(mark => mark.classList.remove('scrollbar__select'));
    moneys.forEach(mark => mark.classList.remove('orange__symbol'));
  }
});


amountInput.addEventListener('input', ()=> {
    switch(amountInput.value) {
      case '5000':
        setDonatePicture (0); 
        break;
      case '2000':
        setDonatePicture (1); 
        break;
      case '1000':
        setDonatePicture (2); 
        break;
      case '500':
        setDonatePicture (3); 
        break;
      case '250':
        setDonatePicture (4); 
        break;
      case '100':
        setDonatePicture (5); 
        break;
      case '50':
        setDonatePicture (6); 
        break;
      case '25':
        setDonatePicture (7); 
        break;
    }
  });










function changeBorderColor () {
  const email = document.querySelector('.email');
const btnSubmit = document.querySelector('.btn__sumbit');

btnSubmit.addEventListener('mousedown', () => {
  email.classList.add('email__active');
});

btnSubmit.addEventListener('mouseup', () => {
  email.classList.remove('email__active');
});

document.addEventListener('mouseup', () => {
  email.classList.remove('email__active');
});
}
changeBorderColor ();
