const filterBox = document.querySelectorAll('.portfolio__item');

document.querySelector('.portfolio__filter-items').addEventListener('click', (event) => {
  if (event.target.tagName !== 'BUTTON') return false;

  let filterClass = event.target.dataset['filter'];
  console.log(filterClass);

  filterBox.forEach((elem) => {
    elem.classList.remove('hide');
    if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
      elem.classList.add('hide');
    }
  });
});

const swiper = new Swiper('.intro__inner', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const text = document.querySelector('.intro__title');
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

anime
  .timeline({
    loop: false,
  })
  .add({
    targets: '.intro__title span',
    translateY: [-600, 0], //
    scale: [10, 1],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: anime.stagger(100),
  })
  .add({
    targets: '.intro__title span',
    translateX: [0, -1000], //
    scale: [1, 1],
    opacity: [1, 0],
    easing: 'easeOutExpo',
    duration: 2000,
    delay: anime.stagger(100),
  })
  .add({
    targets: '.intro__title span',
    translateX: [1000, 0], //
    scale: [1, 1],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 2000,
    delay: anime.stagger(100),
  })
  .add({
    targets: '.intro__title span',
    translateX: [0, 0], //
    scale: [1, 50],
    opacity: [1, 0],
    easing: 'easeOutExpo',
    duration: 2000,
    delay: anime.stagger(100),
  });
/**
 * @param translateY - [start value, end value]
 * @param scale - [start value, end value]
 * @param opacity - [start value, end value]
 * @param duration 1500 - 1.5 seconds
 * @param loop - repeat
 */
