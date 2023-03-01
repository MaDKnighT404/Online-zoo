import {activeBurgerMenu} from '../../assets/helpers/burger_menu.js';
import {selectTestimonial} from '../../assets/helpers/testimonial.js';
import {scrollTestimonials} from '../../assets/helpers/testimonial.js';
import {createFirstCards} from '../../assets/helpers/Pets.js';
import {moveSlider} from '../../assets/helpers/Pets.js';
import {sources, preloadImages} from '../../assets/helpers/preload.js';
preloadImages(sources);
activeBurgerMenu (); 
moveSlider();

createFirstCards ();

selectTestimonial ();
scrollTestimonials ();
// add green border for email when button active and remove when button default















function addAndRemoveBorder () {
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
addAndRemoveBorder ();