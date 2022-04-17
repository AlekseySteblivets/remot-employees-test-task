(() => {
  const menuElements = document.querySelectorAll('.mobile-menu-link');
  menuElements.forEach(x => {
    x.addEventListener('click', e => {
      console.log('aaaaaa');
      console.log(e);

      const currentLink = document.querySelector('.mobile-menu-link-underline');
      currentLink.classList.remove('mobile-menu-link-underline');
      e.target.classList.add('mobile-menu-link-underline');
    });
  });
})();
