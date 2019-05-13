let ain, bin, cin;
let inc = 30
let AltINC = 0.1
function setup() {
	createCanvas(windowWidth, windowHeight)
	//Inputs
	ain = createInput(-3);
	ain.position(100, 495)
	bin = createInput(-4);
	bin.position(100, 545)
	cin = createInput(-1);
	cin.position(100, 595)

}
//RGB madness
let r = Math.floor(Math.random() * 256)
let g = Math.floor(Math.random() * 256)
let b = Math.floor(Math.random() * 256)
let rR = 0, rG = 0, rB = 0

function draw() {
	//The Good Stuff
	let ince = 1
	
	if (rR == r) { r = Math.floor(Math.random() * 256) }
	if (rR > r) { rR = minusIncremental(rR, ince) }
	if (rR < r) { rR = incremental(rR, ince) }
	if (rG == g) { g = Math.floor(Math.random() * 256) }
	if (rG > g) { rG = minusIncremental(rG, ince) }
	if (rG < g) { rG = incremental(rG, ince) }
	if (rB == b) { b = Math.floor(Math.random() * 256) }
	if (rB > b) { rB = minusIncremental(rB, ince) }
	if (rB < b) { rB = incremental(rB, ince) }

	background(255)
	stroke(rR, rG, rB)
	//Back bars
	strokeWeight(0.4)
	for (let i = 0; i < windowWidth; i = i + windowWidth / 17.99) {
		line(i, 0, i, windowHeight)

	}
	for (let i = 0; i < windowHeight; i = i + windowHeight / 10) {
		line(0, i, windowWidth, i)
	}
	//Axis
	strokeWeight(1.7)
	line(0, windowHeight / 2, windowWidth, windowHeight / 2)
	line(windowWidth / 2, 0, windowWidth / 2, windowHeight)
	let re = n5([ain.value(), bin.value(), cin.value()])
	//UI
	fill(255)
	rect(52.5, 52.5, 350, 275)
	fill(21)
	textSize(19)
	text("Introduce ecuation of form x^a + x*b + c", 60, 100)
	text('a Input', 100, 145)
	text('b Input', 100, 195)
	text('c Input', 100, 245)


	//Graph
	strokeWeight(3.1)
	translate(windowWidth / 2, windowHeight / 2)
	for (let i = 0; i < re.length - 1; i++) {
		line(re[i][0] * inc, re[i][1] * inc, re[i + 1][0] * inc, re[i + 1][1] * inc)
	}
}

//Value function

function n5(abc) {
	let a = abc[0], b = abc[1], c = abc[2];
	let res = []
	for (let i = -50; i <= 50; i = i + AltINC) {
		let current = Math.pow(i, a)
		current += i * b
		current += +c
		res.push([i, current * -1])
	}
	return res
}

function incremental(n, inc) {
	return n = n + inc
}
function minusIncremental(n, inc) {
	return n = n - inc
}
