function setup() {
    createCanvas(windowWidth, windowHeight/2)
}
let inc = 0.01
let start = 0
function draw() {

    background(25, 123, 23)
    let y

    strokeWeight(4)
    noFill()

    beginShape()

    var xoffset = start

    for (var x = 0; x < width - 100; x++) {
        stroke(255)
        y = noise(xoffset) * (height)
        vertex(x, y)
        xoffset += inc
    }
    if (y > height / 2+20) {
        background(210, 25, 25)
    }
    endShape();
    start += inc;
}