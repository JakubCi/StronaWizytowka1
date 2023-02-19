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
  const setHeight = () => {
    document.getElementById("about").style.minHeight = window.innerHeight + "px"
};

let deviceWidth = window.matchMedia("(max-width: 1024px)");

if (deviceWidth.matches) {
    // set an event listener that detects when innerHeight changes:
    
        window.addEventListener("resize", setHeight);
    
    // call the function once to set initial height:
    
        setHeight();
    }
    
