function posneg() {
    let n = Math.round(Math.random());
    if (n == 0) {
        return -1;
    } else {
        return 1;
    }
}

function isHovering(x1,y1,x2,y2,w2,h2) {
    if(x1 > x2 && x1 < x2 + w2 &&
        y1 > y2 && y1 < y2 + h2) {
            return true;
     } else {
         return false;
     }
}

function readJsonFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function createObjects(jsonFile){
    readJsonFile(jsonFile, (text) => {
        var allobj = [];
        var data = undefined;
        data = JSON.parse(text);
        console.log(data.objects);
        data.objects.forEach(o => {
            switch (o.object) {
                case "Titletext":
                    allobj.push(new Titletext(
                        (canvas.width/2),
                        titleheight,
                        (canvas.width*0.75),
                        "Helvetica",
                        (canvas.width*0.04),
                        "SIDRA SERVICE CLASSIFICATION APP"
                    ));
                    break;
            
                case "GuiButton1":
                    allobj.push(new GuiButton1(
                        (canvas.width/2)-(200/2),
                        (canvas.height/2)-(50/2),
                        200,
                        50
                    ));
                    break;
            
                case "Buttontext":
                    allobj.push(new Buttontext(
                        (canvas.width/2),
                        (canvas.height/2)+7,
                        200,
                        "Helvetica",
                        20,
                        "Select Service"
                    ));
                    break;
                default:
                    console.log('Unidentified Object');
                    break;
            }
        });
        return allobj;
    });
}

function getPath_last() {
    return location.pathname.split("/")[location.pathname.split("/").length-1]
}
function getPath_secondlast() {
    return location.pathname.split("/")[location.pathname.split("/").length-2]
}