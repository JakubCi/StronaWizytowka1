window.addEventListener('load',()=>{
    
    document.querySelector('.loader').classList.add('loader--hidden')
    document.querySelector('.loader').classList.remove('loader--show')
    document.querySelector('.load1').classList.remove('loadinganimation')
    document.querySelector('.load2').classList.remove('loadinganimation')
    document.querySelector('.load3').classList.remove('loadinganimation')
})
window.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.load1').classList.add('loadinganimation')
    document.querySelector('.load2').classList.add('loadinganimation')
    document.querySelector('.load3').classList.add('loadinganimation')
    document.querySelector('.loader').classList.add('loader--show')
    document.querySelector('.loader').classList.remove('loader--hidden')
    
})
