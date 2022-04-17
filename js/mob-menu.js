(() => {
  const mobMenuNav = document.querySelector('.mobile-menu-nav');
  console.log(mobMenuNav);
  //   const mobileMenuRef = document.querySelector('[data-menu]');

  mobMenuNav.addEventListener('click', e => {
    console.log(33);
    console.log(e);
  });
  //   menuBtnRef.addEventListener('click', () => {
  //     const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  //     menuBtnRef.classList.toggle('is-open');
  //     menuBtnRef.setAttribute('aria-expanded', !expanded);

  //     mobileMenuRef.classList.toggle('is-open');
  //   });
})();
