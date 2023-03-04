
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
  document.getElementById("footer-kontakt").addEventListener('click',()=>{
    scrollTo(document.querySelector('.contact'));
  })
  document.getElementById("footer-cennik").addEventListener('click',()=>{
    scrollTo(document.querySelector('.imagebg2'));
  })
  document.getElementById("footer-omnie").addEventListener('click',()=>{
    scrollTo(document.querySelector('.experience'));
  })
  document.getElementById("footer-szkolenia").addEventListener('click',()=>{
    scrollTo(document.querySelector('.courses'));
  })
var btn = document.querySelector('#button');
var btnimg=$('#button-img')
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btnimg.addClass('show');
    btnimg.removeClass('show2');
    
  } else {
    btnimg.removeClass('show')
    btnimg.addClass('show2');
  }
});
btn.addEventListener('click',()=>{
  if ($(window).scrollTop() > 300) {
    scrollTo(document.querySelector('.main-container'))
  }
  else if ($(window).scrollTop() < 300){
    scrollTo(document.querySelector('footer'))
  }
})


