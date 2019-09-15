function LSystemKoch(start) {
    let l = 2000
    let rule = "F+F−F−F+F"
    start = start.replace(/F/g, rule)
    if (start.length > l) {
        kochCurve = start
    }
    if (start.length <= l) {
        LSystemKoch(start)
    }
}
function LSystemSierpinski(start) {
    let l = 2000
    let rule = "F−G+F+G−F"
    let rule2 = "GG"
    start = start.replace(/G/g,rule2)
    start = start.replace(/F/g,rule)
    if (start.length > l) {
        sierpinskiTriangle = start
    }
    if (start.length <= l) {
        LSystemSierpinski(start)
    }
}
function LSystemDragon(start){
    let l = 20000
    let rule = "X+YF+"
    let rule2 = "-FX-Y"
    let array = []
    for(let i of start){
        if(i=="X"){
            array.push(rule)
        }else if(i=="Y"){
            array.push(rule2)
        }else{
            array.push(i)
        }
    }
    array = array.join("")
    if (array.length > l) {
        dragonCurve = array
    }
    if (array.length < l) {
        LSystemDragon(array)
    }
}
function LSystemFlake(start) {
    let l = 2000
    let rule = "F+F--F+F"
    start = start.replace(/F/g,rule)
    if (start.length > l) {
        kochFlake = start
    }
    if (start.length <= l) {
        LSystemFlake(start)
    }
}
function LSystemGosper(start){
    let l = 20000
    let rule = "X+YF++YF-FX--FXFX-YF+"
    let rule2 = "-FX+YFYF++YF+FX--FX-Y"
    let array = []
    for(let i of start){
        if(i=="X"){
            array.push(rule)
        }else if(i=="Y"){
            array.push(rule2)
        }else{
            array.push(i)
        }
    }
    array = array.join("")
    if (array.length > l) {
        gosperCurve = array
    }
    if (array.length < l) {
        LSystemGosper(array)
    }
}
function LSystemLevi(start) {
    let l = 20000
    let rule = "-F++F-"
    start = start.replace(/F/g,rule)
    if (start.length > l) {
        leviCurve = start
    }
    if (start.length <= l) {
        LSystemLevi(start)
    }
}
function LSystemRing(start) {
    let l = 20000
    let rule = "FF+F+F+F+F+F-F"
    start = start.replace(/F/g,rule)
    if (start.length > l) {
        rings = start
    }
    if (start.length <= l) {
        LSystemRing(start)
    }
}
function LSystemQuadIsland(start) {
    let l = 2000
    let rule = "F+F-F-FFF+F+F-F"
    start = start.replace(/F/g,rule)
    if (start.length > l) {
        quadIsland = start
    }
    if (start.length <= l) {
        LSystemQuadIsland(start)
    }
}
