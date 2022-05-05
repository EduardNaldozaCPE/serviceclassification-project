function guiButton(x,y,w,h,colour,func) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.colour = colour;
    this.func = func;

    this.draw = () => {
        c.beginPath();
        c.fillStyle = "#dddddd";
        c.rect(this.x,this.y,this.w,this.h);
        c.fill();
    }

    this.update = () => {
        if(isHovering(mpos.x,mpos.y,this.x,this.y,this.w,this.h)) {
             console.log('hovering');
         }
    }
}

function line(x1,x2,y1,y2,dx1,dx2,dy1,dy2,colour){
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.dx1 = dx1;
    this.dx2 = dx2;
    this.dy1 = dy1;
    this.dy2 = dy2;
    this.colour = colour;
    this.fresh = true;

    this.draw = () => {
        c.beginPath();
        c.moveTo(this.x1,this.y1);
        c.lineTo(this.x2,this.y2);
        c.strokeStyle = this.colour;
        c.stroke();
    }

    this.update = () => {
        if (this.x1 > innerWidth || this.x1 < 0){
            this.dx1 = -this.dx1;
        }
        if (this.x2 > innerWidth || this.x2 < 0){
            this.dx2 = -this.dx2;
        }
        if (this.y1 > innerHeight || this.y1 < 0){
        }
        if (this.y2 > innerHeight || this.y2 < 0){
            this.dy2 = -this.dy2;
        }
        
        this.x1 += this.dx1;
        this.x2 += this.dx2;
        this.y1 += this.dy1;
        this.y2 += this.dy2;


    }
}
