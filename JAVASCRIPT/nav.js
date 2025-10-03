const body = document.querySelector('body');
const sideOpen = document.querySelector('.side-bar-open');
const sideClose = document.querySelector('.side-bar-close');
const nav = document.querySelector('nav');

sideOpen.addEventListener('click', () => {
  nav.classList.add('side-open-active');
});
body.addEventListener('click', (sideBar) => {
  let clickBody = sideBar.target;
  if(!clickBody.classList.contains('side-bar-open')){
    nav.classList.remove('side-open-active');
  }
});

//AOS 
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 2000, // animation speed (1 second)
    once: false     // false = repeat on scroll, true = animate only once
  });
});