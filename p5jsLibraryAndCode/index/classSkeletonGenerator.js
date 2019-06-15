let inputN;
let inputC;
let inputF;

//let htmBack;
let w, h;

let htmBack;
let htmDiv;
let par;

function setup() {
    createCanvas(windowWidth, windowHeight / 1.5)

    w = windowWidth / 10
    h = windowHeight / 11

    inputN = createInput("name")
    inputC = createElement("textarea", "health,xp")
    inputF = createElement("textarea", "hurt,attack")


    htmBack = createElement("body").size(w * 10, h * 7)
    htmBack.position(0, h * 13)
    htmBack.class("bodyb")

    htmDiv = createDiv().size(w * 7, h * 5)
    htmDiv.position(0, h * 13)
    htmDiv.class("articleA")

    par = createElement("textarea")
    par.class("inputss")
    htmDiv.child(par)

    inputN.position(w, h * 7)
    inputC.position(w, h * 8)
    inputF.position(w, h * 9)

}

let constru, cname, cfun, construe;
let construp, cnamep, cfunp;
let ch;
let ind;

let color1 = [255, 203, 107]    //class name
    , color2 = [137, 221, 255]  //utility
    , color3 = [136, 170, 255]  //functions
    , color4 = [255, 75, 83]    //this.
    , color5 = [199, 146, 234]  //keys

function draw() {
    let he = h
    let we = w

    background(44)

    fill(255)
    
    fill(33)
    rect(we * 5 - 40, he - 50, we * 5, he * 9, 15)
    fill(44)
    //rect(we*5-40,he-50,25,he*9,10)

    //Values
    cname = cName(inputN.value())
    constru = cConstructor(inputC.value())
    cfun = cFunctions(inputF.value())

    cnamep = cNamep(inputN.value())
    construp = cConstructorp(inputC.value())
    cfunp = cFunctionsp(inputF.value())

    construe = constru[1]

    textSize(16)

    //Class Name

    if (cname !== undefined) {
        fill(color5)
        text(cname[0], we * 5, he)

        fill(color1)
        text(cname[1], we * 5 + 45, he)

        fill(color2)
        text(cname[2], we * 5 + 50 + (cname[1].length * 9), he)
    }

    //Class constructor
    if (constru !== undefined) {
        fill(color5)
        text(constru[0][0], we * 5, he + 25)

        fill(color2)
        text(constru[0][1], we * 5 + 120, he + 25)

        fill(color4)
        text(constru[0][2], we * 5 + 135, he + 25)

        fill(color2)
        text(constru[0][3], we * 5 + 130 + (constru[0][2].length * 7.6), he + 25)
    }
    let cw = we * 5
    ch = he + 50
    for (let str of construe) {
        cw = we * 5
        for (let el in str) {

            if (el == 0) { fill(color4) }
            else if (el == 1) { fill(255), cw = we * 5 + 100 }
            else if (el == 2) { fill(color2), cw = we * 5 + 100 + (str[1].length * 9) }
            else if (el == 3) { fill(color4), cw = we * 5 + 120 + (str[1].length * 9) }

            text(str[el], cw, ch)
        }
        ch = ch + 25
    }
    fill(color2)
    text(constru[2], we * 5, ch)
    cw = we * 5
    //Class Functions
    if (cfun !== undefined) {
        for (let el of cfun) {
            ch = ch + 25
            for (let els in el) {
                if (els == 0) { fill(color3), cw = we * 5 }
                else if (els == 1) { fill(color2), cw = we * 5 + (el[0].length * 7.4) }
                text(el[els], cw, ch)
            }
        }
    }
    text("}", we * 5, ch + 25)
    fill(77)
    he = he - 25
    for (let i = 0; i < ch / 25; i++) {
        he = he + 25
        text(i, we * 5 - 35, he)
    }
    let arr = [cnamep + construp + cfunp + "}"]

    par.html(arr, false)
}

function sp(n) {
    if (n == undefined) { return 45 }
    let con = 10
    return n.length * con
}
function cConstructor(inputs) {
    let space = "        "
    let arr2 = []; let cc = [];
    let constructor;
    inputs = inputs.split(",")
    for (input of inputs) { cc.push("_" + input) }
    for (input of inputs) { arr2.push([space + space + "this.", input, " = ", "_" + input]) }
    constructor = [space + "constructor", "(   ", cc.toString()]
    constructor.push(" ) {")
    return [constructor, arr2, space + "}"]
}
function cName(Class) {
    if (!Class) { return }
    let name = Class
    let namer = name.slice(1, name.length)
    name = name.charAt(0).toUpperCase()
    return ["class ", name + namer, " {"]
}
function cFunctions(functions) {
    if (!functions) { return }
    let space = "        "; let arr = [];
    let inputs = functions.split(",")
    for (input of inputs) {
        arr.push(
            [space + input, "(    )   {" + space + "}"]
        )
    }
    return arr
}

//Paragraph functions
function cConstructorp(inputs) {
    let space = "        "
    let arr2 = []; let cc = []; let fte = "";
    let constructor;
    inputs = inputs.split(",")
    for (input of inputs) { cc.push("_" + input) }
    for (input of inputs) { arr2.push([space + space + "this." + input + " = " + "_" + input + "\n"]) }
    for (i of arr2) { fte = fte + i }
    constructor = [space + "constructor" + "(   " + cc + " ) {" + "\n"]
    return [constructor + fte + space + "}" + "\n"]
}
function cNamep(Class) {
    if (!Class) { return }
    let name = Class
    let namer = name.slice(1, name.length)
    name = name.charAt(0).toUpperCase()
    return ["class " + name + namer + " {" + "\n"]
}
function cFunctionsp(functions) {
    if (!functions) { return }
    let space = "        "; let arr = [];
    let str = ''
    let inputs = functions.split(",")
    for (input of inputs) {
        arr.push(
            [space + input + "(    )   {" + space + "}" + "\n"]
        )
    }
    for (i of arr) {
        str = str + i
    }
    return str
}