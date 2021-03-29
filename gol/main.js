  
const width = 120;
const height = 90;
const pxs = 10;

var numbson = false;

var c = document.getElementById("c");
var ctx = c.getContext("2d");

var pg = [];

// use pattern??

var pat = [
    [1,1,1,0,1],
    [1,0,0,0,0],
    [0,0,0,1,1],
    [0,1,1,0,1],
    [1,0,1,0,1],
];

// init clean array

// -------------------------------------
//  NOTE TO FUTURE SELF:
//    console.log() is a SOO FUCKING SLOW.
//

for(var i = 0; i < height; i++) {
    var pg1 = [];
    for(var j = 0; j < width; j++) {
        //var zeroone = Math.floor(Math.random()*2);
        pg1.push(0)
    }
    pg.push(pg1);
}

for(var i = 0; i < 5; i++) {
    for(var j = 0; j < 5; j++) {
        pg[i+50][j+60] = pat[i][j];
    }
}

console.log(pg)

function loopthis() {
    setInterval(render, 1);
}

var timenow;

function render() {

    // console.log((Date.now()-timenow)*0.001)

    // just a reference gotta clone this array (pg) into other array so that a tick represents an instantaneous change in all variables at the same time 
    // see comment 2. this is the branmh

    // init changes array

    var pgf = [];

    for(var i = 0; i < height; i++) {
        var pgf1 = [];
        for(var j = 0; j < width; j++) {
            pgf1.push(0)
        }
        pgf.push(pgf1);
    }

    
    // transfer values from actual array to changes array

    for(var i = 0; i < height; i++) {
        for(var j = 0; j < width; j++) {
            pgf[i][j] = pg[i][j]
        }
    }

    // drawing and calculating next screen/tick

    for(var i = 0; i < height; i++) {
        for(var j = 0; j < width; j++) {



            var n = 0;

            try { if (pg[i-1][j-1]==1){n++}} catch {}
            try { if (pg[i-1][j]==1) {n++} } catch {}
            try { if(pg[i-1][j+1]==1) {n++}} catch {}
            try { if (pg[i][j-1]==1) {n++} } catch {}
            try { if (pg[i][j+1]==1) {n++} } catch {}
            try { if(pg[i+1][j-1]==1) {n++}} catch {}
            try { if (pg[i+1][j]==1) {n++} } catch {}
            try { if(pg[i+1][j+1]==1) {n++}} catch {}
        

            if(pg[i][j]==1) {
                ctx.fillRect(j*pxs,i*pxs,pxs,pxs)
            }
            else {
                ctx.fillStyle = "#444";
                ctx.fillRect(j*pxs,i*pxs,pxs,pxs)
                ctx.fillStyle = "black";
            }

            if(numbson) {
                switch(n) {
                    case 0:
                        ctx.fillStyle = "lightgray";
                        break;
                    case 1:
                        ctx.fillStyle = "red";
                        break;
                    case 2:
                        ctx.fillStyle = "green";
                        break;
                    case 3:
                        ctx.fillStyle = "yellow";
                        break;
                    case 4:
                        ctx.fillStyle = "red";
                        break;
                    case 5:
                        ctx.fillStyle = "red";
                        break;
                    case 6:
                        ctx.fillStyle = "red";
                        break;
                    case 7:
                        ctx.fillStyle = "red";
                        break;
                    case 8:
                        ctx.fillStyle = "red";
                        break; 
                }
                
                ctx.font = "15px Consolas";
                ctx.fillText(n, j*pxs+6,i*pxs+12);
                ctx.fillStyle = "black";
            }


            if (pg[i][j] == 1 && n<2) {
                pgf[i][j] = 0;
            }

            else if (pg[i][j] == 1 && n>3) {
                pgf[i][j] = 0;
            }

            else if (pg[i][j] == 0 && n==3) {
                pgf[i][j] = 1;
            }

            else {

            } 
        }
    }
    
    // timenow = Date.now();

    // comment 2.
    pg = pgf;
}