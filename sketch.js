function preload() {
}
let g = 240
let a = "Change Theme"

var buton;

function setup() {
  createCanvas(windowWidth-2, windowHeight - 10);
  buton = createButton(a)
  buton.mousePressed(changeColor)
}
function draw() {
  background(g)
  noStroke()
  fill(40)
  rect(0,0,width,100)


}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
let i = 0
function changeColor() {
  i++
  if (i % 2 == 0) {
    g = 240
  } else {
    g = 26;
  }
}
