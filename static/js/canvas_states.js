class c_page {
    constructor() {
    }
    
    animate = () => {
        
        if(frame_floored >= 15){
            //Draw each instance in the list.
            instanceList.forEach((instanceobj, i) => {
                instanceobj.draw();
                //STATES
                switch (getPath_last()) { 
                case 'index.html': //TITLE SCREEN
                    //Create other objects 
                    //When Button has disappeared, destroy each disappearing object and move to next state
                    if (instanceobj.opacity < 0) {
                        instanceList.splice(i, 1);
                        if(instanceList.length == 0) {
                            location.href = './select.html';
                        }
                    }
                    break;
            
                case 'select.html': //SELECT SERVICE SCREEN
                        //When Button has disappeared, destroy each disappearing object and move to next state
                    if (instanceobj.opacity < 0) {
                        instanceList.splice(i, 1);
                        if(instanceList.length == 0) {
                        }
                    }
                    break;
                }
            });
        }
    }

    changePage = (page) => {
        startInstanceList(page);
    }
}