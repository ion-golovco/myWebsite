function setup() {
    createCanvas(windowWidth, windowHeight);
}

function incremental(n, inc) {
    return n = n + inc
}
function minusIncremental(n, inc) {
    return n = n - inc
}

let r = Math.floor(Math.random() * 256)
let g = Math.floor(Math.random() * 256)
let b = Math.floor(Math.random() * 256)
let rR = 0,rG = 0,rB = 0

function draw() {
    let inc = 1
    
    if(rR==r){r = Math.floor(Math.random() * 256)}
    if (rR > r) {rR = minusIncremental(rR, inc)}
    if (rR < r) {rR = incremental(rR, inc)}

    if(rG==g){g = Math.floor(Math.random() * 256)}
    if (rG > g) {rG = minusIncremental(rG, inc)}
    if (rG < g) {rG = incremental(rG, inc)}

    if(rB==b){b = Math.floor(Math.random() * 256)}
    if (rB > b) {rB = minusIncremental(rB, inc)}
    if (rB < b) {rB = incremental(rB, inc)}

    background(rR,rG,rB)
}


