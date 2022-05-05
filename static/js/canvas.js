var canvas = document.querySelector('canvas');

if (innerWidth < 1550) {
    canvas.width = window.innerWidth-15;
} else {
    canvas.width = 1550
}
canvas.height = window.innerHeight-15;
var c = canvas.getContext('2d');

// Mouse Coordinates
var mpos = {
    x:undefined,
    y:undefined
}
canvas.addEventListener('mousemove', (event) => {
    mpos.x = event.x;
    mpos.y = event.y;
});