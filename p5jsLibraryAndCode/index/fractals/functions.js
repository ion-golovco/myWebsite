function setup() {
    createCanvas(windowWidth, windowHeight)
    w = windowWidth
    h = windowHeight
    angleMode(DEGREES)
    LSystemKoch("F")
    LSystemSierpinski("F−G−G")
    LSystemDragon("FX")
    LSystemFlake("F")
    LSystemGosper("XF")
    LSystemLevi("F")
    LSystemRing("F+F+F+F")
    LSystemQuadIsland("F+F+F+F")
}
function dropDownList(x, y, w, h, elements, selected) {
    /* They come as [[n,"element1"] ,[n,"element2"]] where n is select = n */
    noStroke(); fill(230)
    rect(x, y, w, h)
    fill(0); textSize(16); textAlign(CENTER)
    text(elements[selected][1], x + w / 2, y + h / 1.4)
}
function keyTyped() {
    if (key === up && select < arrayList.length - 1) {
        select++;
        done = 0
        draw()
    } else if (key === down && select - 1 !== -1) {
        select--
        done = 0
        draw()
    }
}

//Fractals

function circleFractal(x, y, d) {
    noFill()
    stroke(200, d * 2, 20)
    ellipse(x, y, d, d / 1)
    if (d > 4) {
        circleFractal(x + d / 2, y, d / 2)
        circleFractal(x - d / 2, y, d / 2)
        circleFractal(x, y - d / 2, d / 2)
        //circleFractal(x, y + d / 2, d / 2)
    }
}
function treeFractal(x, y, length, d) {
    stroke(255, length, length * 2)
    line(x, y, x, y + length)
    translate(x, y + length)
    if (length > 5) {
        push()
        rotate(d)
        treeFractal(x, y, length / 1.4, d)
        pop()
        push()
        rotate(-d)
        treeFractal(x, y, length / 1.4, d)
        pop()
    }
}
function fibonaciFractal(step) {
    let r = floor((step * phi))
    let r2 = floor((step + 1) * phi)
    return (2 + r) - r2
}
