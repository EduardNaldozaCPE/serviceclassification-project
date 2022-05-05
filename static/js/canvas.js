var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

function line(x1,x2,y1,y2,dx1,dx2,dy1,dy2,colour){
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.dx1 = dx1;
    this.dx2 = dx2;
    this.dy1 = dy1;
    this.dy2 = dy2;
    this.colour = colour;

    this.draw = () => {
        c.beginPath();
        c.moveTo(this.x1,this.y1);
        c.lineTo(this.x2,this.y2);
        c.strokeStyle = this.colour;
        c.stroke();
    }

    this.update = () => {
    if (this.x1 > innerWidth || this.x1 < 0){
        this.dx1 = -this.dx1;
    }
    if (this.x2 > innerWidth || this.x2 < 0){
        this.dx2 = -this.dx2;
    }
    if (this.y1 > innerHeight || this.y1 < 0){
        this.dy1 = -this.dy1;
    }
    if (this.y2 > innerHeight || this.y2 < 0){
        this.dy2 = -this.dy2;
    }
    this.x1 += this.dx1;
    this.x2 += this.dx2;
    this.y1 += this.dy1;
    this.y2 += this.dy2;
    }
}

var lineArray = [];

for (let i=0; i<100; i++){
    var x1 = Math.random()*100;
    var x2 = Math.random()*100;
    var y1 = Math.random()*100;
    var y2 = Math.random()*100;
    var dx1 = Math.random()*2;
    var dx2 = Math.random()*2;
    var dy1 = Math.random()*2;
    var dy2 = Math.random()*2;
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    // let b = Math.floor(Math.random()*255);
    // var colour = `rgb(${r}, ${g}, ${b})`
    var colour = `rgb(255, 255, 255)`
    lineArray.push(new line(x1,x2,y1,y2,dx1,dx2,dy1,dy2,colour))
}

function animA(frame) {
    frame++;
    frame_floored = Math.floor(frame/30);
    requestAnimationFrame(animA);
    //console.log(line.x1);
    
    c.clearRect(0,0,innerWidth,innerHeight);

    for (let i=0; i<lineArray.length; i++){
        lineArray[i].draw()
        lineArray[i].update()
    }
}

animA(0)