const mobileMenu = document.querySelector('.mobile_menu');
const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('#close_menu');

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
  hamburger.style.display = 'none';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  hamburger.style.display = 'flex';
});

const featuredInstructors = [
  {
    name: 'John Risky',
    qualification: 'A software engineer with over 20 years experience.',
    info: 'A software engineer with over 20 years experience.A software engineer with over 20 years experience.',
    img: 'img/instructor1.jpg',
  },
  {
    name: 'Code Xin',
    qualification: 'A software engineer with over 20 years experience.',
    info: 'A software engineer with over 20 years experience.A software engineer with over 20 years experience.',
    img: 'img/instructor2.jpg',
  },
  {
    name: 'Emeli Compaila',
    qualification: 'Full stack dev with 7 years experience.',
    info: 'A software engineer with over 20 years experience.A software engineer with over 20 years experience.',
    img: 'img/instructor3.PNG',
  },
  {
    name: 'Jessica Bugs',
    qualification: '12 years a javascript developer',
    info: 'A software engineer with over 20 years experience.A software engineer with over 20 years experience.',
    img: 'img/instructor4.PNG',
  },
  {
    name: 'Bread Pitt',
    qualification: 'Full stack dev with 7 years experience.',
    info: 'A software engineer with over 20 years experience.A software engineer with over 20 years experience.',
    img: 'img/instructor2.jpg',
  },
  {
    name: 'Oprah Windfury',
    qualification: '12 years a javascript developer',
    info: 'A software engineer with over 20 years experience.A software engineer with over 20 years experience.',
    img: 'img/instructor3.PNG',
  },
];

const instructors = document.querySelector('.instructor-rows');

for (let i = 0; i < featuredInstructors.length; i += 1) {
  instructors.innerHTML += `<div class="instructor">
  <img src="${featuredInstructors[i].img}" alt="instructor 1" class="instructor__photo">

  <div class="details">
    <h3 class="instructor__name">${featuredInstructors[i].name}</h3>
    <span class="instructor_qualification">${featuredInstructors[i].qualification}</span>
    <hr class="instructor__dash">
    <p class="instructor__info">${featuredInstructors[i].info}
    </p>
  </div>
</div>`;
}
