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
    document.querySelector('#title').innerHTML='Łukasz Cierocki'
});

$(window).blur(function() {
    document.querySelector('#title').innerHTML='Do zobaczenia'
});

document.querySelector('.logo').addEventListener('click',()=>{
    history.scrollRestoration = "manual";
    $(window).scrollTop(0);
})

history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});
