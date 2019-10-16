let value;
let a
function setup() {
    let he = windowHeight / 2 + windowHeight / 9
    let wi = windowWidth / 20
    createCanvas(windowWidth, windowHeight / 2);
    value = createElement('textarea')
    value.class("inputs")
    value.position(wi, he)
}
let x, y;
function draw() {

    x = 700
    let he = 0
    let wi = windowWidth / 2
    background(255)
    a = topTenWords(value.value())
    y = he

    noStroke()
    fill(150)
    rect(0, he, windowWidth, 400)
    fill(255)
    rect(wi, he, wi + wi / 3, 400)
    fill(0)
    textSize(16);

    if (value.value() == "" || value.value() == " ") {
        text("You haven't written anything yet", x, he + 25)

    }
    fill(0)
    for (let i in a) {
        y += 17

        text(a[i][0] + " : " + a[i][1], x, y + 25)
        if (y > windowHeight / 2 - 50) {
            x = x + 120
            y = he
        }
    }

}

function topTenWords(text) {

    let tex = text.split(/\s+/g)

    for (let i in tex) {
        tex[i] = tex[i].toLowerCase()
    }

    for (let i in tex) {
        let curr = tex[i]
        if (curr[curr.length - 1] == "," || curr[curr.length - 1] == ".") {
            tex[i] = curr.slice(0, curr.length - 1)

        }
    }

    let ine = 0
    let obj = {}

    for (let i in tex) {
        ine = 0
        let curr = tex[i]
        for (let j in tex) {
            let jcurr = tex[j]
            if (curr == jcurr) {
                ine = ine + 1
                obj[curr] = ine
            }
        }
    }

    let entries = Object.entries(obj);
    let sorted = entries.sort((b, a) => a[1] - b[1]);
    //return sorted

    let res = []
    for (let x in sorted) {
        if (x == 80) {
            break
        }
        res.push(sorted[x])
    }
    return res
}
