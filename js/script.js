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
    name: 'Yochai Benkler',
    qualification: 'A software engineer with over 20 years experience.',
    info: 'A software engineer with over 20 years experience.A software engineer with over 20 years experience.',
    img: 'img/instructor1.jpg',
  },
  {
    name: 'Yochai Benkler',
    qualification: 'A software engineer with over 20 years experience.',
    info: 'A software engineer with over 20 years experience.A software engineer with over 20 years experience.',
    img: 'img/instructor1.jpg',
  },
  {
    name: 'Yochai Benkler',
    qualification: 'A software engineer with over 20 years experience.',
    info: 'A software engineer with over 20 years experience.A software engineer with over 20 years experience.',
    img: 'img/instructor1.jpg',
  },
  {
    name: 'Yochai Benkler',
    qualification: 'A software engineer with over 20 years experience.',
    info: 'A software engineer with over 20 years experience.A software engineer with over 20 years experience.',
    img: 'img/instructor1.jpg',
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
