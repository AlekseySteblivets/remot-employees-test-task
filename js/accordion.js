(() => {
  const menuActionServices = document.querySelectorAll('.spoiler-items');

  console.log(menuActionServices);

  menuActionServices.forEach(elLi => {
    elLi.addEventListener('click', e => {
      // console.log(elLi);
      const isActiveClass = !elLi.children[1].classList.contains('active-service-description');
      const elDivToAddActiveClass = e.currentTarget.getElementsByClassName('spoiler-text')[0];
      const elSvg = e.currentTarget.getElementsByClassName('services-item-button-svg')[0];
      // console.log(elSvg);
      // console.log(elDivToAddActiveClass);
      // console.log(isActiveClass);
      // console.log(e.target);
      if (isActiveClass) {
        menuActionServices.forEach(el => {
          // console.log(el.children[0].children[0]);
          if (el.children[1].classList.contains('active-service-description')) {
            el.children[1].classList.remove('active-service-description');
            el.children[0].children[0].classList.remove('active-svg');
          }
        });
        elDivToAddActiveClass.classList.add('active-service-description');

        elSvg.classList.add('active-svg');
      } else {
        elDivToAddActiveClass.classList.remove('active-service-description');
        elSvg.classList.remove('active-svg');
      }
    });
  });
})();
