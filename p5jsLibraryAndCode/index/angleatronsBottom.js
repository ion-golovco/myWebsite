//variables
let ran = Math.random()*200;
let x11 = 150, x21 = 100, x31 = 350, x41 = 100, x51 = 200
//Constants
let inca = 0.003

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
}

function draw() {
    //Background and input setup
    ran = ran + 0.00009
    background(255)
    textSize(16)
    let o = prediction(ran, 200)
    //Background Axis
    for (i = 0; i < o.length; i++) {
        translate(0, 0)
        stroke(150)
        strokeWeight(1)
        for (let i = 0; i <= windowWidth; i = i + windowWidth / 17.99) {
            line(i, 0, i, windowHeight)
        }
        for (let i = 0; i <= windowHeight; i = i + windowHeight / 10) {
            line(0, i, windowWidth, i)
        }
    }
    //The actual angleatron
    strokeWeight(0.5)
    stroke(0, 0, 0)
    translate(windowWidth / 2, windowHeight / 2)
    for (i = 0; i < o.length; i++) {
        rotate(o[i][0]);
        fill(255 * o[i][1][0], 20, 100)
        quad(0, 0, x11 * o[i][1][0], x21 * o[i][1][0], x31 * o[i][1][0], x41 * o[i][1][0], x51 * o[i][1][0], 0)
    }
}

function prediction(angleATron, leafNo) {
    let incer = 1
    let arr = []
    for (let i = 0; i < leafNo; i = i + 1) {
        incer = incer - inca
        arr.push([[i * angleATron], [incer]])
    }
    return arr
}