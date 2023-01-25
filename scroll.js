
scrollTo = (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop-90
    });
    console
  }
  
  document.getElementById("menu-items-cennik").addEventListener('click', () => {
    scrollTo(document.querySelector('.imagebg2'));
  });
  document.getElementById("menu-items-omnie").addEventListener('click', () => {
    scrollTo(document.querySelector('.experience'));
  });
  document.getElementById("menu-items-doswiadczenie").addEventListener('click', () => {
    scrollTo(document.querySelector('.courses'));
  });
