export function selectTestimonial() {
  const testimonials = document.querySelectorAll('.testimonial');
  const substrate = document.querySelector('.substrate__testimonial');
  const section = document.querySelector('.testimonials__inner');
  const newTestimonial = document.createElement('div');
 
  document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('cross') || event.target.classList.contains('substrate__testimonial')) {
      substrate.classList.toggle('active__substrate__testimonial');
      newTestimonial.innerHTML = '';
      newTestimonial.remove();
    }
  });

  if (window.innerWidth <= 640) {
    testimonials.forEach(testimonial => {
      testimonial.addEventListener('click', (event) => {
        substrate.classList.toggle('active__substrate__testimonial');
        newTestimonial.classList.add('newTestimonial');
        if (testimonial.classList.contains('test1')) {
          newTestimonial.innerHTML = `
      <div class="testimonial test1 new">
      <div class='cross' id='cross' ></div>
      <div class="user__information">
        <img src="../../assets/icons/user_icon.svg" alt="user icon" class="user__photo">
        <p>
          <span class="user__name">Michael John</span> <br>
          <span class="user__location">Local Austria </span> • <span class="user__time"> Today</span>
        </p>
      </div>
      <p class="user__testimonial new__user__testimonial">The best online zoo I’ve met. My son delighted very much ljves to watch
        gouillas.
        Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted
        very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br>
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the
        ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch
        gouillas. Online zoo is one jf the ways to instill a love for animals</p>
    </div>
      `;
        }

        if (testimonial.classList.contains('test2')) {
          newTestimonial.innerHTML = `
      <div class="testimonial test2 new">
      <div class='cross'></div>
      <div class="user__information">
        <img src="../../assets/images/user__photo2.png" alt="user photo old man with hat" class="user__photo">
        <p>
          <span class="user__name">Oskar Samborsky</span> <br>
          <span class="user__location">Local Austria </span> • <span class="user__time"> Yesterday</span>
        </p>
      </div>
      <p class="user__testimonial new__user__testimonial">Online zoo is one jf the ways to instill a love for animals.The best online zoo
        I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a
        love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. <br>
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the
        ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch
        gouillas. Online zoo is one jf the ways to instill a love for animals</p>
    </div>
      `;
        }

        if (testimonial.classList.contains('test3')) {
          newTestimonial.innerHTML = `
       <div class="testimonial test3 new">
       <div class='cross'></div>
        <div class="user__information">
          <img src="../../assets/images/user__photo3.png" alt="painted face of a girl" class="user__photo">
          <p>
            <span class="user__name">Fredericka Michelin</span> <br>
            <span class="user__location">Local Austria </span> • <span class="user__time"> Yesterday</span>
          </p>
        </div>
        <p class="user__testimonial new__user__testimonial">The best online zoo I’ve met. My son delighted very much ljves to watch
          gouillas.
          Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted
          very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. <br>
          The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one of the
          ways to instill a love for animals.The best online zoo I’ve met. <br>The best online zoo I’ve met. My son
          delighted very much loves to watch gorillas. </p>
      </div>
      `;
        }
        section.append(newTestimonial);
      });
    });
  }
}

export function scrollTestimonials () {
  const testimonialsContainer = document.querySelector('.testimonials__inner');
  const slider = document.querySelector('.testimonial__slider');
  let width;
  let step;

  if (window.innerWidth > 1000) {
    width = document.querySelector('.testimonial').offsetWidth + 30;
  } else {
    width = document.querySelector('.testimonial').offsetWidth + 28;
  }

  slider.addEventListener('input', () => {
    step = slider.value * width;
    testimonialsContainer.style.transform = `translateX(-${step}px)`;
  })
}