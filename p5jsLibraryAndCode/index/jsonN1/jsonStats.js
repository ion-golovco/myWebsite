let file1, file2, file3

let valUsed
let valMined

let cycle = 0

let page = 1
function preload() {
	file1 = loadJSON("file.json")
	file2 = loadJSON("file1.json")
	file3 = loadJSON("file2.json")
}
let buttons
function setup() {
	createCanvas(windowWidth, windowHeight)
	valUsed = Object.entries(file1.stats["minecraft:used"])
	valMined = Object.entries(file1.stats["minecraft:mined"])
	valCustom = Object.entries(file1.stats["minecraft:custom"])
	valCrafted = Object.entries(file1.stats["minecraft:crafted"])
	valKilled = Object.entries(file1.stats["minecraft:killed"])

	a = Object.entries(file2.stats["minecraft:used"])
	b = Object.entries(file2.stats["minecraft:mined"])
	c = Object.entries(file2.stats["minecraft:custom"])
	d = Object.entries(file2.stats["minecraft:crafted"])
	e = Object.entries(file2.stats["minecraft:killed"])

	a1 = Object.entries(file3.stats["minecraft:used"])
	b1 = Object.entries(file3.stats["minecraft:mined"])
	c1 = Object.entries(file3.stats["minecraft:custom"])
	d1 = Object.entries(file3.stats["minecraft:crafted"])
	e1 = Object.entries(file3.stats["minecraft:killed"])

	for(let i of valUsed){for(let j of a){if(j[0] == i[0]){i[1] += j[1]}}}
	for(let i of valMined){for(let j of b){if(j[0] == i[0]){i[1] += j[1]}}}
	for(let i of valCustom){for(let j of c){if(j[0] == i[0]){i[1] += j[1]}}}
	for(let i of valCrafted){for(let j of d){if(j[0] == i[0]){i[1] += j[1]}}}
	for(let i of valKilled){for(let j of e){if(j[0] == i[0]){i[1] += j[1]}}}


	for(let i of valUsed){for(let j of a1){if(j[0] == i[0]){i[1] += j[1]}}}
	for(let i of valMined){for(let j of b1){if(j[0] == i[0]){i[1] += j[1]}}}
	for(let i of valCustom){for(let j of c1){if(j[0] == i[0]){i[1] += j[1]}}}
	for(let i of valCrafted){for(let j of d1){if(j[0] == i[0]){i[1] += j[1]}}}
	for(let i of valKilled){for(let j of e1){if(j[0] == i[0]){i[1] += j[1]}}}


	buttons = width / 4
}

function draw() {
	textSize(12)
	textAlign(LEFT)
	background(255)
	fill(0)
	line(0, 40, width, 40)

	for(let i =0;i<8;i++){
		line(buttons * i, 40, buttons * i, 0)
	}

	//Used

	if (page == 1) {
		let x = 50
		let y = 50
		for (let i of valUsed) {
			if (i) {
				i[0] = i[0].replace("minecraft:", "")
				i[0] = i[0].replace(/\_/g, " ")
			}
		}
		valUsed.sort((a, b) => b[1] - a[1])
		for (let i of valUsed) {
			if (y >= height - 75) {
				y = 50
				x += 180
			}
			y += 18
			text(i[0] + " = " + i[1], x, y)
		}
	}

	//Mined

	if (page == 2) {
		let x = 50
		let y = 50
		for (let i of valMined) {
			i[0] = i[0].replace("minecraft:", "")
			i[0] = i[0].replace(/\_/g, " ")
		}
		valMined.sort((a, b) => b[1] - a[1])
		for (let i of valMined) {
			if (y >= height - 75) {
				y = 50
				x += 180
			}
			y += 16
			text(i[0] + " = " + i[1], x, y)
		}

//Custom

	}if (page == 3) {
		let x = 50
		let y = 50
		for (let i of valCustom) {
			i[0] = i[0].replace("minecraft:", "")
			i[0] = i[0].replace(/\_/g, " ")
		}
		valCustom.sort((a, b) => b[1] - a[1])
		for (let i of valCustom) {
			if (y >= height - 75) {
				y = 50
				x += 300
			}
			y += 25
			text(i[0] + " = " + i[1], x, y)
		}
	}

//Crafted

	if (page == 4) {
		let x = 50
		let y = 50
		for (let i of valCrafted) {
			if (i) {
				i[0] = i[0].replace("minecraft:", "")
				i[0] = i[0].replace(/\_/g, " ")
			}
		}
		valCrafted.sort((a, b) => b[1] - a[1])
		for (let i of valCrafted) {
			if (y >= height - 75) {
				y = 50
				x += 180
			}
			y += 20
			text(i[0] + " = " + i[1], x, y)
		}
	}
//Killed
if (page == 3) {
	
	let x = 650
	let y = 70
	textSize(16)
	text("Mobs Killed",x,y)
	textSize(12)
	for (let i of valKilled) {
		i[0] = i[0].replace("minecraft:", "")
		i[0] = i[0].replace(/\_/g, " ")
	}
	valKilled.sort((a, b) => b[1] - a[1])
	for (let i of valKilled) {
		if (y >= height - 75) {
			y = 50
			x += 300
		}
		y += 25
		text(i[0] + " = " + i[1], x, y)
	}
	let val = 0
	for(let i of valMined){
		val+=i[1]
	}
	let val1 = 0
	for(let i of valUsed){
		val1+=i[1]
	}
	let val2 = 0
	for(let i of valKilled){
		val2+=i[1]
	}
	let val3 = 0
	for(let i of valCrafted){
		val3+=i[1]
	}

	textSize(20)
	text("Blocks Mined in total",x,y+50)
	text(val, x, y+80)
	text("Blocks Used in total",x,y+120)
	text(val1, x, y+150)
	text("Mobs Killed",x,y+190)
	text(val2, x, y+220)
	text("Items Crafted",x,y+260)
	text(val3, x, y+290)
}
	textAlign(CENTER)
	textSize(16)

	text("Items used",buttons/2,25)
	text("Items Mined",buttons/2+buttons,25)
	text("Custom",buttons/2+buttons*2,25)
	text("Items Crafted",buttons/2+buttons*3,25)


}

function mouseClicked() {
	button1(mouseX,mouseY)
	button2(mouseX,mouseY)
	button3(mouseX,mouseY)
	button4(mouseX,mouseY)
}
function button1(x,y){
	let n = 0
	if(press(x,y,n)){
		page = 1
	}
}
function button2(x,y){
	let n = 1
	if(press(x,y,n)){
		page = 2
	}
}function button3(x,y){
	let n = 2
	if(press(x,y,n)){
		page = 3
	}
}function button4(x,y){
	let n = 3
	if(press(x,y,n)){
		page = 4
	}
}
function press(x,y,n){
	if ((x > n*buttons) && (y > 0)&&(x < n*buttons+buttons) && (y < 40 )) {
		return true
	}
}

