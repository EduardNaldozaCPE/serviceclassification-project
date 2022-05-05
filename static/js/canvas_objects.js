class GuiButton1 {
    constructor(x, y, w, h, colour, text) {
        this.x = x;
        this.y = y+150;
        this.w = w;
        this.h = h;
        this.colour = colour;
        this.text = text;
        this.opacity = 0;
        this.vel = 10;
    }
    draw = () => {
        c.beginPath();
        c.strokeStyle = `rgba(221,221,221,${Math.pow(this.opacity,2)/10000}`;
        c.rect(this.x, this.y, this.w, this.h);
        c.lineWidth = 2;
        c.stroke();
        if (this.opacity < 100) {
            this.opacity += 1;
            this.y -= this.vel;
            console.log(this.y);
            this.vel -= this.vel/15;
        }
    }

    update = () => {
    };

    hovering = () => {
        if (isHovering(mpos.x, mpos.y, this.x, this.y, this.w, this.h)) {
            return true;
        } else {
            return false;
        }
    }
}

class Buttontext {
    constructor(x,y,w,font,size,msg){
        this.x = x;
        this.y = y+150;
        this.w = w;
        this.font = font;
        this.size = size;
        this.msg = msg;
        this.opacity = 0;
        this.vel = 10;
    }

    draw = () => {
        c.font = `${this.size}px ${this.font}`
        c.fillStyle = `rgb(221,221,221,${Math.pow(this.opacity,2)/10000})`;
        c.textAlign = "center"
        c.fillText(this.msg, this.x, this.y, this.w)
        if (this.opacity < 100) {
            this.opacity += 1;
            this.y -= this.vel;
            console.log(this.y);
            this.vel -= this.vel/15;
        }
    }

}

class Titletext {
    constructor(x,y,w,font,size,msg){
        this.x = x;
        this.y = y;
        this.w = w;
        this.font = font;
        this.size = size;
        this.msg = msg;
        this.opacity = 0;
    }

    draw = () => {
        c.font = `bold ${this.size}px ${this.font}`
        c.fillStyle = `rgb(221,221,221,${Math.pow(this.opacity,2)/1000})`;
        c.textAlign = "center"
        c.fillText(this.msg, this.x, this.y, this.w)
        if (this.opacity < 50) {
            this.opacity += 1;
        }
    }

}

class Backline {
    constructor(x1, x2, y1, y2, dx1, dx2, dy1, dy2, colour) {
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
    }

    draw = () => {
        c.beginPath();
        c.moveTo(this.x1, this.y1);
        c.lineTo(this.x2, this.y2);
        c.lineWidth = 1;
        c.strokeStyle = this.colour;
        c.stroke();
    };

    update = () => {
        if (this.x1 > innerWidth || this.x1 < 0) {
            this.dx1 = -this.dx1;
        }
        if (this.x2 > innerWidth || this.x2 < 0) {
            this.dx2 = -this.dx2;
        }
        if (this.y1 > innerHeight || this.y1 < 0) {
        }
        if (this.y2 > innerHeight || this.y2 < 0) {
            this.dy2 = -this.dy2;
        }

        this.x1 += this.dx1;
        this.x2 += this.dx2;
        this.y1 += this.dy1;
        this.y2 += this.dy2;
    };
}