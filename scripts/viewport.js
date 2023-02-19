document.addEventListener("DOMContentLoaded", function(event) {
    document.addEventListener("scroll", function(event) {
        const animatedBoxes = document.getElementsByClassName("experience2-container");
        const animatedBoxes2=document.getElementsByClassName("courses-item");
        const windowOffsetTop = window.innerHeight + window.scrollY -300;
        const windowOffsetTop2 = window.innerHeight + window.scrollY ;
        Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
            const animatedBoxOffsetTop = animatedBox.offsetTop;

            if (windowOffsetTop >= animatedBoxOffsetTop) {
                addClass(animatedBox, "experience2-animation");
            }
            
        });

    });
});
window.addEventListener('scroll',()=>{
    var myElements = document.getElementsByClassName('courses-item')
    
    Array.prototype.forEach.call(myElements, (myElement)=>{
        var myElementHeight = myElement.offsetHeight;
        var myElementWidth = myElement.offsetWidth;
        var bounding = myElement.getBoundingClientRect();
            if (bounding.top >= -myElementHeight-400 
                && bounding.left >= -myElementWidth
                && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
                && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
    
                addClass(myElement, "courses-item-animation")
            }
    })

    
})


function addClass(element, className) {
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(className) === -1) {
        element.className += " " + className;
    }
}
