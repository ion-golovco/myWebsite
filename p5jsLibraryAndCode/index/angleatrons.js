//variables
let angl, slider, angle, leafsș
let x1 = 100, x2= 66.66, x3= 233.33, x4 = 66.66, x5= 133.33
//Constants
let inc = 0.003

function setup() {
    createCanvas(windowWidth, windowHeight/1.5)
    angleMode(DEGREES)
    //Inputs
    angl = createInput(137.5);
    angl.position(100, 520)
    slider = createSlider(13, 300, 20, 1);
    slider.position(100, 620)
}

function draw() {
    //Background and input setup
    background(255)
    textSize(16)
    text("Angle", 100, 90)
    angle = angl.value()
    text("Amount of Leaves", 100, 190)
    leafs = slider.value()
    let off = prediction(angle, leafs)
    //Background Axis
    for (i = 0; i < off.length; i++) {
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
    translate(windowWidth / 2, windowHeight / 3)
    for (i = 0; i < off.length; i++) {
        rotate(off[i][0]);
        fill(100 * off[i][1][0], 120, 10)
        quad(0, 0, x1 * off[i][1][0], x2 * off[i][1][0], x3 * off[i][1][0], x4 * off[i][1][0], x5 * off[i][1][0], 0)
    }
}
function prediction(angleATron, leafNo) {
    let incer = 1
    let arr = []
    let grade = []
    for (let i = 0; i < leafNo; i = i + 1) {
        incer = incer - inc
        arr.push([[i * angleATron], [incer]])
    }
    return arr
}