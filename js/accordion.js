(() => {
  const menuActionServices = document.querySelectorAll('.services-item-button-svg');

  console.log(menuActionServices);

  menuActionServices.forEach(x => {
    x.addEventListener('click', e => {
      const svgTarget = e;
      console.log(svgTarget);
      console.log(e.target.parentElement);
      const serviceDescrElem =
        e.target.parentElement.parentElement.getElementsByClassName('spoiler-text')[0];
      console.log(serviceDescrElem);
      const shouldBeOpened = !serviceDescrElem.classList.contains('active-service-description');

      if (shouldBeOpened) {
        serviceDescrElem.classList.add('active-service-description');
        e.target.style.transform = 'rotate(180deg)';
      } else {
        serviceDescrElem.classList.remove('active-service-description');
        e.target.style.transform = 'rotate(0deg)';
      }
    });
  });
})();
