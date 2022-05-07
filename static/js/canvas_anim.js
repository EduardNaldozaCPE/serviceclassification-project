lineArray = newLineArray();
canvasState = new c_page();
// Instantiating Objects in Animation
function animation(frame) {
    frame++;
    frame_floored = Math.floor(frame/30);
    requestAnimationFrame(animation);
    c.clearRect(0,0,innerWidth,innerHeight);
    
    //Create Background Lines 
    // for (let i=0; i<lineArray.length; i++){
    //     lineArray[i].draw();
    //     lineArray[i].update();
    // }
    //Animate canvas states
    canvasState.animate()
}


//ONCLICK
canvas.addEventListener('click', () => {
    switch (getPath_last()) {
        case "index.html":
            if (instanceList[1].hovering()) {
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