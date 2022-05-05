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
for (let i=0; i<120; i++){
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

var instanceList = [];
instanceList.push(button1);
instanceList.push(text1);

class c_state {
    constructor(state) {
        this.state = state;
    }
    
    animate = () => {
        switch (this.state) {
        case 0:
            //Create Title
            title.draw();

            //Create other objects 
            if(frame_floored >= 30){
                instanceList.forEach((instanceobj, i) => {
                    instanceobj.draw();
                    if (instanceobj.opacity < 0) {
                        instanceList.splice(i, 1);
                    }
                });
            }
            break;
    
        default:
            break;
        }
        
    }
}