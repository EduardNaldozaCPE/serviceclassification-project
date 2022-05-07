class Page{
    constructor(){
        this.list = [];
    }
    startInstanceList = () => {
        // //TITLE
        // let btntext = new Buttontext(
        //     (canvas.width/2),
        //     (canvas.height/2)+7,
        //     200,
        //     "Helvetica",
        //     20,
        //     "Select Service" 
        // );
        // this.list.push(btntext)
        // //START BUTTON FRAME
        // this.list.push(new GuiButton1(
        //     (canvas.width/2)-(200/2),
        //     (canvas.height/2)-(50/2),
        //     200,
        //     50,
        //     "#fff",
        //     "select.html"
        // ));
        // // START BUTTON TEXT
        // this.list.push(new Titletext(
        //     (canvas.width/2),
        //     titleheight,
        //     (canvas.width*0.75),
        //     "Helvetica",
        //     (canvas.width*0.04),
        //     "SIDRA SERVICE CLASSIFICATION APP"
        // ));
        // return this.list;
    }

    action = () => {
        if (this.list[1].hovering()) {
            this.list[2].delete();
            this.list[1].delete();
            this.list[0].delete();
        }
    }

}