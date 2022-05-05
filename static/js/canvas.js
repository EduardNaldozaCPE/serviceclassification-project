var canvas = document.querySelector('canvas');
currentState = 0;
/* 

STATES

0   Title Page
1   Select Service (Page 1)
2   Select Service (Page 2)
3   Service 1 - Question 1
4   Service 1 - Question 2
5   Service 1 - Question 3

*/

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
    // console.log(currentState);
    if (innerWidth < 1550) {
        mpos.x = event.x;
    } else {
        mpos.x = event.x - ((innerWidth-canvas.width)/2);
    }
    // console.log(event.x - ((innerWidth-canvas.width)/2));
    mpos.y = event.y;
});