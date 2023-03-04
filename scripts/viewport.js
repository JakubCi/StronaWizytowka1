document.addEventListener("DOMContentLoaded", function(event) {
    document.addEventListener("scroll", function(event) {
        const animatedBoxes = document.getElementsByClassName("experience2-container");
        const windowOffsetTop = window.innerHeight + window.scrollY -300;
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
window.addEventListener('scroll',()=>{
    var myElements2 = document.getElementsByClassName('prices-child')
    
    Array.prototype.forEach.call(myElements2, (myElement2)=>{
        var myElementHeight2 = myElement2.offsetHeight;
        var myElementWidth2 = myElement2.offsetWidth;
        var bounding2 = myElement2.getBoundingClientRect();
            if (bounding2.top >= -myElementHeight2-400 
                && bounding2.left >= -myElementWidth2
                && bounding2.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth2
                && bounding2.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight2) {
    
                addClass(myElement2, "prices-child-animation")
            }
    })
    
})

function addClass(element, className) {
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(className) === -1) {
        element.className += " " + className;
    }
}
