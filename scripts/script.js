const box = document.getElementById("ImieiNazwisko");
                const rect = box.getBoundingClientRect();
                let logo=document.getElementById("logo")
                function isInViewport(element) {
                    const rect = element.getBoundingClientRect();
                    return (
                        rect.top >= 0 &&
                        rect.left >= 0 &&
                        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                    );
                }
                document.addEventListener('scroll', function () {
                    if (!isInViewport(box)){
                        logo.classList.add('EaseIn')
                        logo.classList.remove('EaseOut')
                        
                    }
                    else{
                        logo.classList.add('EaseOut')
                        logo.classList.remove('EaseIn')
                        
                    }
                        
                }, {
                    passive: true
                });
$(window).focus(function() {
    document.querySelector('#title').innerHTML='Łukasz Cierocki >> Fizjoterapia'
});

$(window).blur(function() {
    document.querySelector('#title').innerHTML='Do zobaczenia ponownie.'
});

document.querySelector('.logo').addEventListener('click',()=>{
    history.scrollRestoration = "manual";
    $(window).scrollTop(0);
})

history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});
var burger = $(".checkbox");
$('.menu-items li a').on("click", function (e) {
    burger.click();
  });


window.addEventListener("DOMContentLoaded", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

let phone=document.querySelector('#contact-phone')
let Pphone=document.querySelector('#phone-paragraf')
phone.addEventListener('click',()=>{
    navigator.clipboard.writeText('579 921 041');
    Pphone.innerHTML='Skopiowano do schowka.'
    setInterval(() => {
        Pphone.innerHTML='+48 579 921 041'
    }, 2000);
})

let email=document.querySelector('#contact-email')
let Pemail=document.querySelector('#email-paragraf')
email.addEventListener('click',()=>{
    navigator.clipboard.writeText('lukaszcierocki@gmail.com');
    Pemail.innerHTML='Skopiowano do schowka.'
    setInterval(() => {
        Pemail.innerHTML='lukaszcierocki@gmail.com'
    }, 2000);
})
