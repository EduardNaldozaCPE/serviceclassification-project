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