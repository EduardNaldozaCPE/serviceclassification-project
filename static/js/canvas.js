var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

var mpos = {
    x:undefined,
    y:undefined
}

window.addEventListener('mousemove', (event) => {
    mpos.x = event.x;
    mpos.y = event.y;
});

var lineArray = [];
var button1 = new guiButton(300,400,50,50,'#ededed', () => {
    console.log(rect);
})
var button2 = new guiButton(200,500,250,50,'#ededed', () => {
    console.log(rect);
})
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
    lineArray.push(new line(x1,x2,y1,y2,dx1,dx2,dy1,dy2,colour))
}

function animation(frame) {
    frame++;
    frame_floored = Math.floor(frame/30);
    requestAnimationFrame(animation);
    
    c.clearRect(0,0,innerWidth,innerHeight);

    for (let i=0; i<lineArray.length; i++){
        lineArray[i].draw();
        lineArray[i].update();
    }

    button1.draw();
    button1.update();
    button2.draw();
    button2.update();

}

animation(0);