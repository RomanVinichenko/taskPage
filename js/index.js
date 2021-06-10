// $(function () {
//   // var containerEl = document.querySelector('.portfolio__items');
//   //
//   // var mixer = mixitup(containerEl);
// });
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
