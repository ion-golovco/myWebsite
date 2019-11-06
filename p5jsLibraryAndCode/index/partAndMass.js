let w, h;
let slider,slider2,slider3

let particles = []
let masses = []
let useSlider = true

let histL = 5
let pL = 2200

let velR = [5 , 10]

function setup() {
    w = windowWidth
    h = windowHeight
    createCanvas(w, h)
    for(let i =0;i<pL;i++){
    particles.push(new Particle)
    }
    masses.push(new Mass(2000, w / 2, h / 2))
    slider = createInput("1000");
    slider.position(10, 10);
    slider.style('width', '280px')
    slider3 = createSlider(1, 2200, 300);
    slider3.position(10, h-80);
    slider3.style('width', '280px')
    //masses.push(new Mass(2000, w / 2, h / 1.5))
}
function draw() {
    //noStroke()
    pL  = slider3.value()
    background(0)
    for (let i of masses) {
       i.show() 
       if(useSlider){       
       i.p = slider.value()
       }
    }
    for (let i =0;i<pL;i++) {
        particles[i].update()
    }
}
class Particle {
    constructor() {
        this.pos = createVector(random(w), random(h))
        this.maxVel = random(velR[0], velR[1])
        this.vel = createVector(this.maxVel, 0)
        this.angle = 0
        this.hist = []
        this.sw = 0
        this.dir = 0
    }
    update() {
        this.vel.x += this.maxVel * cos(this.angle)
        this.vel.y += this.maxVel * sin(this.angle)

        this.pos.x += this.vel.x
        this.pos.y += this.vel.y

        this.vel.x *= 0.9
        this.vel.y *= 0.9

        for (let i of masses) {
            let d = dist(this.pos.x, this.pos.y, i.pos.x, i.pos.y)
            if(d > i.r){
                this.dir = 0
                this.sw = 0
            }
            if (d < i.r) {
                if(this.sw == 0){
                    if(this.pos.y > i.pos.y){
                        this.dir = -1
                    }else{
                        this.dir = 1
                    }
                    this.sw = 1
                }
                this.angle += i.p / d * this.dir
            }
        }
        if(this.hist.length > histL){
            this.hist.shift()
        }else{
            this.hist.push([this.pos.x,this.pos.y])
        }
        this.show()
        if(this.pos.x>w+100||this.pos.x<-100||this.pos.y>h+100||this.pos.y<-100){
            this.pos = createVector(-10, random(h))
            this.maxVel = random(velR[0], velR[1])
            this.vel = createVector(this.maxVel, 0)
            this.angle = 0
            this.hist = []
            this.sw = 0
            this.dir = 0
        }

    }
    show() {
        beginShape()
        strokeWeight(1)
        noFill()
        for(let i of this.hist){
            //let ind = this.hist.indexOf(i)
            stroke(
            this.angle*70+100,
            (this.pos.y/h)*255+30,
            (this.vel.x/this.maxVel)*255
            );
            vertex(i[0],i[1])
        }       
        endShape()

    }
}
class Mass {
    constructor(p, x, y) {
        this.pos = createVector(x, y)
        this.r = p * 100
        this.p = p
    }
    show() {
        fill(255)
        circle(this.pos.x, this.pos.y, 10)
        let d = dist(mouseX,mouseY,this.pos.x,this.pos.y)
        if(mouseIsPressed&&d<100){
            this.pos = createVector(mouseX, mouseY)
        }
    }
}