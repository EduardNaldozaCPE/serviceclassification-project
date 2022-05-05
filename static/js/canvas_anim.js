canvasState = new c_state(0);

// Instantiating Objects in Animation
function animation(frame) {
    frame++;
    frame_floored = Math.floor(frame/30);
    requestAnimationFrame(animation);
    c.clearRect(0,0,innerWidth,innerHeight);
    
    //Create Background Lines 
    for (let i=0; i<lineArray.length; i++){
        lineArray[i].draw();
        lineArray[i].update();
    }

    canvasState.animate()
    // //Create Title
    // title.draw();

    // //Create other objects 
    // if(frame_floored >= 30){
    //     instanceList.forEach((instanceobj, i) => {
    //         instanceobj.draw();
    //         if (instanceobj.opacity < 0) {
    //             instanceList.splice(i, 1);
    //         }
    //     });
    // }
}

canvas.addEventListener('click', () => {
    if (button1.hovering()) {
        console.log(instanceList);
        instanceList[0].delete();
        instanceList[1].delete();
    }
});

// Running Animation
animation(0);