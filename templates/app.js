// const confetti = require('canvas-confetti');
let i = 1;
let value = 0
const r = document.querySelector(":root");

function nextChange(){
    i += 1;
    setTimeout(() => {
        document.querySelectorAll(`.part-${i}`).forEach((elem)=>{
            elem.classList.add("move-in");
        }); 
    }, 2000);
}

window.addEventListener('click',(e)=>{
    document.querySelectorAll(`.part-${i}`).forEach((elem)=>{
        elem.classList.add("move-out");
    });
    let toRemoveIndex = i;
    setTimeout(() => {
        document.querySelectorAll(`.part-${toRemoveIndex}`).forEach((elem)=>{
            elem.setAttribute("style","display:none;")
        });
    }, 1000);
    value += 33;
    r.style.setProperty("--scroll-percentage", `${value}%`);
    
    if (i == 2){
        var end = Date.now() + (6 * 1000);

        // go Buckeyes!
        var colors = ['#bb0000', '#ffffff', '#fdff6a', '#78ff44', '#29cdff'];

        setTimeout(() => {
            (function frame() {
                confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 , y: 1},
                    colors: colors
                });
                confetti({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 , y: 1},
                    colors: colors
                });
    
                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        }, 3000);
        
    }

    nextChange();
})