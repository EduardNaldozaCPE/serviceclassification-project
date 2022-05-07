function startInstanceList() {
    let list = [];
    //TITLE
    list.push(new Titletext(
        (canvas.width/2),
        titleheight,
        (canvas.width*0.75),
        "Helvetica",
        (canvas.width*0.04),
        "SIDRA SERVICE CLASSIFICATION APP"
    ));
    //START BUTTON FRAME
    list.push(new GuiButton1(
        (canvas.width/2)-(200/2),
        (canvas.height/2)-(50/2),
        200,
        50
    ));
    // START BUTTON TEXT
    list.push(new Buttontext(
        (canvas.width/2),
        (canvas.height/2)+7,
        200,
        "Helvetica",
        20,
        "Select Service"
    ));
    return list;
}