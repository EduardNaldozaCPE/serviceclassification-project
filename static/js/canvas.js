var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth-15;
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

// Declaring Objects
var button1 = new GuiButton1(
    (canvas.width/2)-(200/2),
    (canvas.height/2)-(50/2),
    200,
    50
);

var text1 = new Buttontext(
    (canvas.width/2),
    (canvas.height/2)+7,
    200,
    "Helvetica",
    20,
    "Select Service"
);

titleheight = undefined;
if (canvas.width > 700) {
    titleheight = canvas.width*0.23;
} else {
    titleheight = canvas.width*0.25;
}
var title = new Titletext(
    (canvas.width/2),
    titleheight,
    (canvas.width*0.75),
    "Helvetica",
    (canvas.width*0.04),
    "SIDRA SERVICE CLASSIFICATION APP"
);

var lineArray = [];
for (let i=0; i<50; i++){
    var x1 = (innerWidth*Math.random())-1;
    var y1 = (innerHeight*Math.random())-1;
    var x2 = (innerWidth*Math.random())-1;
    var y2 = (innerHeight*Math.random())-1;
    var dx1 = posneg()*Math.random();
    var dx2 = posneg()*Math.random();
    var dy1 = posneg()*Math.random();
    var dy2 = posneg()*Math.random();
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    // let b = Math.floor(Math.random()*255);
    // var colour = `rgb(${r}, ${g}, ${b})`
    var colour = `#359085`
    lineArray.push(new Backline(x1,x2,y1,y2,dx1,dx2,dy1,dy2,colour))
}

// Instantiating Objects in Animation
function animation(frame) {
    frame++;
    frame_floored = Math.floor(frame/30);
    requestAnimationFrame(animation);
    
    c.clearRect(0,0,innerWidth,innerHeight);

    for (let i=0; i<lineArray.length; i++){
        lineArray[i].draw();
        lineArray[i].update();
    }
    title.draw();
    // button1.update();
    if(frame_floored >= 30){
        text1.draw();
        button1.draw();
    }
}

// Event Listeners tied to Objects
canvas.addEventListener('click', () => {
    if (button1.hovering()) {
        console.log('clicked');
    }
});

// Running Animation
animation(0);