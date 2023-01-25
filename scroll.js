
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
  document.getElementById("leftodnosnik").addEventListener('click', () => {
    scrollTo(document.querySelector('.experience'));
  });
  document.getElementById("menu-items-doswiadczenie").addEventListener('click', () => {
    scrollTo(document.querySelector('.courses'));
  });
  document.getElementById("menu-items-kontakt").addEventListener('click', () => {
    scrollTo(document.querySelector('.contact'));
  });
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

