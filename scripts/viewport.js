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

function addClass(element, className) {
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(className) === -1) {
        element.className += " " + className;
    }
}