const img = document.querySelector('#logo');
const timeLoop = 3000; // 3 seconds
const pxSizeMove = 100;
const screenWidth = window.screen.width - 100;
const screenHeigth = window.screen.height - 100;

function move() {
    if (img.style.marginLeft == "" && img.style.marginTop == "") {
        img.style.marginLeft = "100px"
        img.style.marginTop  = "100px"
    } else {
        let top = parseInt(img.style.marginTop) + pxSizeMove;
        let left = parseInt(img.style.marginLeft) + pxSizeMove;
        if (top >= screenHeigth) {
            top  = 100;
        }
        if (left >= screenWidth) {
            left  = 100;
        }
        img.style.marginLeft = `${left}px`;
        img.style.marginTop  = `${top}px`;
    }
}

(function () {
    setInterval(() => {
        move();
    }, timeLoop);    
})();
