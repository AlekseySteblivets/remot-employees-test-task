(() => {
  const menuActionServices = document.querySelector('.services-item');
  //   const mobileMenuRef = document.querySelector('[data-menu]');

  menuActionServices.addEventListener('click', () => {
    // const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuActionServices.classList.toggle('is-active');
    // menuActionServices.setAttribute('aria-expanded', !expanded);

    // mobileMenuRef.classList.toggle('is-open');
  });
})();
