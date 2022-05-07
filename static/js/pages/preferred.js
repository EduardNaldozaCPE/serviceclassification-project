class Page{
    constructor(){
        this.list = [];
    }
    initpage = () => {
    }
    startInstanceList = () => {
        var service = localStorage.getItem('branch')
        var titleheight = undefined;
        if (canvas.width > 700) {
            titleheight = canvas.height*0.23;
        } else {
            titleheight = canvas.height*0.40;
        }
        // TITLE
        this.list.push(new Titletext(
            (canvas.width/2),
            titleheight,
            (canvas.width*0.75),
            "Helvetica",
            (canvas.width*0.04),
            "Preferred Service"
        ));
        this.list.push(new Titletext(
            (canvas.width/2),
            (canvas.height*0.5),
            (canvas.width),
            "Helvetica",
            (canvas.width*0.015),
            `From the details you have entered, the chosen service is will be provided by Sidra Medicine preferred provider.`
        ));
        let btntext = new Buttontext(
            (canvas.width/2),
            (3*canvas.height/4)+7,
            200,
            "Helvetica",
            20,
            "Select Service" 
        );
        this.list.push(btntext)
        this.list.push(new GuiButton1(
            (canvas.width/2)-(200/2),
            (3*canvas.height/4)-(50/2),
            200,
            50,
            "#fff",
            "select.html",
            btntext
        ));
        return this.list;
    }

    action = () => {
        if (this.list[3].hovering()) {
            this.list.forEach(element => {
                element.delete();
            });
        }
    }

}