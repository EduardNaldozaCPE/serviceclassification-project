function startInstanceList() {
    let list = [];
    let count = 1;
    for (let j=1; j<=3; j++){
        for (let i=1; i<=3; i++){
            //BUTTON 1 FRAME (STATE 1)
            list.push(new GuiButton1(
                ((i*canvas.width)/4)-((canvas.width/4.5)/2),
                (canvas.height/3)+(j*canvas.height/8)-(50/2),
                canvas.width/4.5,
                50
            ));
            //BUTTON 1 TEXT (STATE 1)
            list.push(new Buttontext(
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

    list.push(new Titletext(
        (canvas.width/4),
        subheight,
        (canvas.width*0.75),
        "Helvetica",
        (canvas.width*0.04),
        "Select Service"
    ));

    list.push(new Rightbutton(
        (canvas.width/2) + canvas.width/3, (canvas.height/2) + canvas.height/3
    ))
    return list;
}