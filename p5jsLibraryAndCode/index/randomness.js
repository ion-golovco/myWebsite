let limit, noe;

let x, y;
let scl = 10;
let arra = [], arrb = []

let x1, y1, y2;

function setup() {

    createCanvas(windowWidth, windowHeight / 2)
    frameRate(30)

    noe = createSlider(10, 100, 20, 1)
    noe.position((windowWidth / 19) * 15 - 20, (windowHeight / 10) * 3 + 30)

    limit = createSlider(200, 10000, 1000, 50)
    limit.position((windowWidth / 19) * 15 - 20, (windowHeight / 10) * 3 + 60)

    let current = 1

    for (let i = 0; i <= 100; i++) {
        arra.push(i)
        arrb.push(current)
        current = current - 0.005
    }

}

function incremental(n, inc) {
    return n = n + inc
}

function minusIncremental(n, inc) {
    return n = n - inc
}

//RGB madness

let r = Math.floor(Math.random() * 50)
let g = Math.floor(Math.random() * 50)
let b = Math.floor(Math.random() * 256)
let rR = 0, rG = 0, rB = 0

function draw() {
    //The Good Stuff
    let ince = 1

    if (rR == r) {
        r = Math.floor(Math.random() * 50)
    }
    if (rR > r) {
        rR = minusIncremental(rR, ince)
    }
    if (rR < r) {
        rR = incremental(rR, ince)
    }
    if (rG == g) {
        g = Math.floor(Math.random() * 30)
    }
    if (rG > g) {
        rG = minusIncremental(rG, ince)
    }
    if (rG < g) {
        rG = incremental(rG, ince)
    }
    if (rB == b) {
        b = Math.floor(Math.random() * 256)
    }
    if (rB > b) {
        rB = minusIncremental(rB, ince)
    }
    if (rB < b) {
        rB = incremental(rB, ince)
    }

    let incer = arrb[noe.value()]
    x = 190
    y = (windowHeight / 10) * 5 - 13
    background(255)

    x1 = (windowWidth / 19) * 2
    y1 = (windowHeight / 10)
    y2 = 0

    //Background Axis
    for (i = 0; i < 100; i++) {

        translate(0, 0)
        stroke(150)
        strokeWeight(1)

        for (let i = 0; i <= windowWidth; i = i + windowWidth / 19) {
            line(i, 0, i, windowHeight)
        }

        for (let i = 0; i <= windowHeight; i = i + windowHeight / 10) {
            line(0, i, windowWidth, i)
        }
    }
    let values = chance(noe.value(), limit.value())
    //Info table
    stroke(0)
    strokeWeight(3)
    textSize(15)
    fill(190)

    rect(x1, y1 - (windowHeight / 10), (windowWidth / 19) * 15, y1 * 3)

    for (i = 0; i < values.length; i++) {

        let b = values[i][0]
        let c = values[i][1]

        text(b + " : " + c + "%", x1 + 20, y2 + 20)
        if (x1 > (windowWidth / 19) * 15) {
            x1 = (windowWidth / 19) * 2

            y2 = y2 + 20
        }

        x1 = x1 + 80
    }
    text("Average procentage : " + (100 / noe.value()).toString().slice(0, 4) + "%", (windowWidth / 19) * 15 - 20, (windowHeight / 10) * 3 + 20)

    strokeWeight(1)
    //Bar graph
    noStroke()
    for (let i = 0; i < values.length; i++) {

        stroke(rR, rG, rB)
        fill(rR, rG, rB)
        rect(x, y - ((values[i][1]) * scl), incer * 13, (values[i][1] * scl))

        textSize(8)
        let a = values[i][0]
        stroke(0)
        text(a, x, y + 10)
        x = x + incer * 20
    }
}

function chance(numberOfElements, limitI) {
    let obj = {}
    let arr = []
    for (i = 0; i < limitI; i++) {
        arr.push(Math.ceil(Math.random() * numberOfElements))

    }
    for (i = 0; i < arr.length; i++) {
        let count = 0
        let curr = arr[i]

        for (let i = 0; i < arr.length; ++i) {
            if (arr[i] == curr) {
                count++;
            }
        }

        obj[arr[i]] = count
        count = 0
    }
    let arr2 = []
    Object.keys(obj).map(
        function (key) {
            //obj[key] = round((obj[key] / limitI) * 100, 2)
            arr2.push([key, ((obj[key] / limitI) * 100).toString().slice(0, 3), obj[key]])
        });
    return arr2
}