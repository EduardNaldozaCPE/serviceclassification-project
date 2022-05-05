// Declaring Objects
titleheight = undefined;
if (canvas.width > 700) {
    titleheight = canvas.width*0.23;
} else {
    titleheight = canvas.width*0.25;
}
subheight = undefined;
if (canvas.width > 780) {
    subheight = canvas.width*0.15;
} else {
    subheight = canvas.width*0.3;
}

//BACKGROUND LINE ANIMATION (ALL STATES)
function newLineArray() {
    let lineArray = [];
    for (let i=0; i<50; i++){
        var x1 = (innerWidth*Math.random())-1;
        var y1 = (innerHeight*Math.random())-1;
        var x2 = (innerWidth*Math.random())-1;
        var y2 = (innerHeight*Math.random())-1;
        var dx1 = posneg()*Math.random()/3;
        var dx2 = posneg()*Math.random()/3;
        var dy1 = posneg()*Math.random()/3;
        var dy2 = posneg()*Math.random()/3;
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        // let b = Math.floor(Math.random()*255);
        // var colour = `rgb(${r}, ${g}, ${b})`
        var colour = `#359085`
        lineArray.push(new Backline(x1,x2,y1,y2,dx1,dx2,dy1,dy2,colour))
    }
    return lineArray;
}

var instanceList = [];
function startInstanceList(state) {
    switch (state) {
        case 0:
            //TITLE (STATE 0)
            instanceList.push(new Titletext(
                (canvas.width/2),
                titleheight,
                (canvas.width*0.75),
                "Helvetica",
                (canvas.width*0.04),
                "SIDRA SERVICE CLASSIFICATION APP"
            ));
            //START BUTTON TEXT (STATE 0)
            instanceList.push(new GuiButton1(
                (canvas.width/2)-(200/2),
                (canvas.height/2)-(50/2),
                200,
                50
            ));
            // START BUTTON FRAME (STATE 0)
            instanceList.push(new Buttontext(
                (canvas.width/2),
                (canvas.height/2)+7,
                200,
                "Helvetica",
                20,
                "Select Service"
            ));
            break;

        case 1:
            let count = 1;
            for (let j=1; j<=3; j++){
                for (let i=1; i<=3; i++){
                    //BUTTON 1 FRAME (STATE 1)
                    instanceList.push(new GuiButton1(
                        ((i*canvas.width)/4)-((canvas.width/4.5)/2),
                        (canvas.height/3)+(j*canvas.height/8)-(50/2),
                        canvas.width/4.5,
                        50
                    ));
                    //BUTTON 1 TEXT (STATE 1)
                    instanceList.push(new Buttontext(
                        ((i*canvas.width)/4),
                        (canvas.height/3)+(j*canvas.height/8)+7,
                        canvas.width/4.5,
                        "Helvetica",
                        20,
                        `Service ${count}`
                    ));
                    count++;
                }
            }
            
            instanceList.push(new Titletext(
                (canvas.width/4),
                subheight,
                (canvas.width*0.75),
                "Helvetica",
                (canvas.width*0.04),
                "Select Service"
            ));

            instanceList.push(new Rightbutton(
                (canvas.width/2) + canvas.width/3, (canvas.height/2) + canvas.height/3
            ))
            break;
    }
}

startInstanceList(currentState);