lineArray = newLineArray();
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
    //Animate canvas states
    currentState = canvasState.state;
    canvasState.animate()
}


//ONCLICK
canvas.addEventListener('click', () => {
    switch (currentState) {
        case 0:
            if (instanceList[1].hovering()) {
                // console.log(instanceList);
                instanceList[2].delete();
                instanceList[1].delete();
                instanceList[0].delete();
            }
            break;
    
        case 1:
            break;
    }
});

// Running Animation
animation(0);