var rotatenum = 0;
function rotate() {
    rotatenum += 5;
    document.querySelector("body").style.transform = "rotate(" + rotatenum + "deg)"
}

setInterval(rotate(), 100);
