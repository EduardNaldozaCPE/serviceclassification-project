class c_state {
    constructor(state) {
        this.state = state;
    }
    
    animate = () => {
        
        if(frame_floored >= 15){
            //Draw each instance in the list.
            instanceList.forEach((instanceobj, i) => {
                instanceobj.draw();
                //STATES
                switch (this.state) { 
                case 0: //TITLE SCREEN
                    //Create other objects 
                    //When Button has disappeared, destroy each disappearing object and move to next state
                    if (instanceobj.opacity < 0) {
                        instanceList.splice(i, 1);
                        if(instanceList.length == 0) {
                            this.changeState(1);
                        }
                    }
                    break;
            
                case 1: //SELECT SERVICE SCREEN
                        //When Button has disappeared, destroy each disappearing object and move to next state
                    if (instanceobj.opacity < 0) {
                        instanceList.splice(i, 1);
                        if(instanceList.length == 0) {
                            this.changeState(2);
                        }
                    }
                    break;
                }
            });
        }
    }

    changeState = (state) => {
        startInstanceList(state);
        this.state = state;
    }
}