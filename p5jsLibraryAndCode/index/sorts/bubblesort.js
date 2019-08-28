//Here you can change the amount of bars boii!
let limit = 1000;

let comparasions = 0,acces = 0;
let a = 0, b = 0, c;
let width, w,sound;
let sw = 0, sw1 = 0;
let x, y;
let arr2 = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    w = windowWidth
    y = windowHeight
    let i = 1
    //random sort
        while (limit >= i) {arr2.push(random(1, y / 3));i++;}

    //invers sort
        //while (limit >= i) {arr2.push((i/limit)*y/3);i++;} arr2.reverse()

    //Demonstratie
    frameRate(100)
}
function draw() {
    background(10)
    if(limit > 350){
        noStroke()
    }
    fill(255)
    text("Schimbari : "+comparasions,10,40)
    text("Accese in array : " + acces,10,20)
    text("Numere : "+limit,10,60)
    width = w / arr2.length
    x = 0
    fill(255)
    for (let i in arr2) {
        rect(x, y - (arr2[i] * 3), width, arr2[i] * 3)
        x += width
    }
    if (sw == 1) {
        bubbleSort(arr2)
    } else {
        a = 0
        b = 0
    }
    if (a !== 0) {
        fill(200, 0, 0)
        rect(width * a[1], y - (a[0] * 3), width, a[0] * 3)
        rect(width * b[1], y - (b[0] * 3), width, b[0] * 3)
        //sound.play()
        //sound.amp(0.01)
        //sound.rate(a[1]/(arr2.length/10))
    }
    if (sw1 == 1) {
        fill(0,190,0)
        for(let i = 0;i<=c;i++) {
            rect(i * width, y - (arr2[i] * 3), width, arr2[i] * 3)
            //sound.play()
            //sound.amp(0.01)
            //sound.rate(c/(arr2.length/2))
        }
        fill(200,0,0)
        rect(c * width, y - (arr2[c] * 3), width, arr2[c] * 3)
    } else {
        c = 0
    }
    if(c>=arr2.length){
        setTimeout(exper(),1000)
    }
    c+= limit / 20
}
function bubbleSort(arr) {
    let change = 0
    for (let i = 0; i <= arr.length; i++) {
        acces++
        if (arr[i] > arr[i + 1]) {
            vizuali(arr[i], arr[i + 1], i)
            let current = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = current
            change++
            comparasions++
          // return arr
        }
    }
    if(change == 0){
    allGreen()
    }
}
function allGreen() {
    sw = 0
    sw1 = 1
}
function vizuali(ar, br, index) {
    a = [ar, index]
    b = [br, index + 1]
}
function exper(){
    sw1 = 0
}
