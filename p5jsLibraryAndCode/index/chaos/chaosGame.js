//comenzi
    //background(0) sterge canvasul
//maximul $per
let maxi = 10
//puncte ale poligonului
let pointL = 3
//doturi pentru fiecare iterare
let sp = 1000
//distanta la care sar doturile
let per = 1
//incrementul de crestere a $per
let inc = 0.001
//scale cu cit mai mare numarul cu cit devine mai mic poligonu
let scale = 10000

let points = []
let total = 0
let curent, previous;
let w, h;
let colors = []
//cool combinatons 
// 6 n + 2/3 per
// 5n + 5/8 per
function setup() {
    createCanvas(windowWidth, windowHeight)
    w = windowWidth
    h = windowHeight
    translate(w / 2, h / 2)
    background(0)
    for (let i = 0; i < pointL; i++) {
        let angle = i * TWO_PI / pointL
        let v = p5.Vector.fromAngle(angle)
        v.mult(h / scale)
        v.z = i
        points.push(v)
    }
    for(let i =0;i<pointL;i++){
        colors.push([random(255),random(255),random(255)])
    }
    curent = createVector(random(w), random(h))
    frameRate(30)
    stroke(255)
    for (let i of points) { circle(i.x, i.y, 2) }
}
function draw() {
    if(per < maxi){
        per += inc
    }
    {
        background(0,3)
        translate(w / 2, h / 2)
        strokeWeight(1.1)
    }
    total +=sp
    if(frameCount%31==0){
      //  console.log(total)   
    }
    for (let i = 0; i < sp; i++) {
        let next = random(points)
        for(let i in colors){
            if(next.z == i){
                stroke(colors[i],100)
                //stroke(255)
            }
        }
       //if (next !== previous) { //pentagon1
            curent.x = lerp(curent.x, next.x, per)
            curent.y = lerp(curent.y, next.y, per)
            point(curent.x, curent.y)
            previous = next
        //}
    }
}
