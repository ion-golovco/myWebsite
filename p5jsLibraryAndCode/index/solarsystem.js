let w, h
let strokeW = 3
let chancer = [1,1,-1]
let sun;
let planets = []
let colors = []
let moons = []
let hisL = 30
let maxMoons = 10
let minMoons = 1
let maxPlanets = 3
let ans = 1
let ans2 = 0
let sunRadius = 60

function setup() {
    h = windowHeight
    w = windowWidth
    createCanvas(w, h)
    sun = new Star(0, 0, sunRadius, maxPlanets)
    sun.createPlanets()
    for (let i = 0; i < maxPlanets + maxMoons * maxPlanets; i++) {
        colors.push([random(255), random(255), random(255)])
    }
    for (let i in moons) {
        moons[i].i = i
    }
}
function draw() {
    background(0)
    translate(w / 2, h / 2)
    sun.display()
    stroke(255)
    strokeWeight(strokeW)
    for (let i in planets) {
        if (planets[i] !== 0) {
            planets[i].update()
            beginShape()
            if (ans == true) {
                for (let j of planets[i].his) {
                    noFill()
                    stroke(255)
                    vertex(j[0], j[1])
                }
            }
            endShape()
            fill(colors[i])
            noStroke()
            planets[i].display()
        }
    }
    for (let i in moons) {
        if (moons[i] !== 0) {
            stroke(255)
            moons[i].update()
            beginShape()
            if (ans2 == true) {
                for (let j of moons[i].his) {
                    noFill()
                    vertex(j[0], j[1])
                }
            }
            endShape()
            fill(colors[i])
            noStroke()
            moons[i].display()
        }
    }
    fmp()
    mmp()
    pp()
    sunC()
}
function deleteMoon(i) {
    moons[i] = 0
}
function deletePlanet(ind) {
    for(let i in planets){
        if(ind == planets[i].i){
            planets[i] = 0
        }
    }
}
function pp() {
    for (let i of planets) {
        for (let j of planets) {
            let dis = dist(i.x, i.y, j.x, j.y)
            if (i.r + j.r >= dis && dis !== 0) {
                if (j.r > i.r) {
                    j.r += i.r / 3
                    deletePlanet(i.i);
                    break
                } else {
                    i.r += j.r / 3
                    deletePlanet(j.i);
                    break
                }
            }
        }
    }
}
function mmp() {
    for (let i of moons) {
        //moon vs moon
        for (let j of moons) {
            let dis = dist(i.x, i.y, j.x, j.y)
            if (i.r + j.r >= dis && dis !== 0) {
                if (j.r > i.r) {
                    j.r += i.r / 3
                    j.d += i.r
                    deleteMoon(i.i); break
                } else {
                    i.r += j.r / 3
                    i.d += j.r
                    deleteMoon(j.i); break
                };
            }
        }
        //moon vs planet
        for (let j of planets) {
            let dis = dist(i.x, i.y, j.x, j.y)
            if (i.r + j.r >= dis && dis !== 0) {
                if (j.r > i.r) {
                    j.r += i.r / 3
                    deleteMoon(i.i);
                } else {
                    j.r += i.r / 3
                    deleteMoon(i.i);
                }
            }
        }
    }
}
function fmp() {
    for (let i of planets) {
        for (let j of moons) {
            if (j !== 0 && i.i == j.p) {
                if (j.r > i.r) {
                    let temp = j
                    deleteMoon(j.i)
                    planets.push(
                        new Planet(
                            temp.d + i.d,
                            temp.r,
                            planets.length + 1,
                            temp.a
                        )
                    )
                }
            }
        }
    }
}
function sunC() {
    for (let i of planets) {
        let dis = dist(i.x, i.y, sun.x, sun.y)
        if (i.r + sun.r > dis) {
            deletePlanet(i.i)
        }
    }
    for (let i of moons) {
        let dis = dist(i.x, i.y, sun.x, sun.y)
        if (i.r + sun.r > dis) {
            deleteMoon(i.i)
        }
    }
}
class Planet {
    constructor(d, r, i, a) {
        this.rot = random(chancer)
        this.r = r
        this.d = d * this.rot
        this.a = a 
        this.i = i
        this.x = 0
        this.y = 0
        this.his = []
    }
    display() {
        circle(this.x, this.y, this.r)
    }
    update() {
        this.a += (1 / this.d) * 2
        this.x = this.d * cos(this.a)
        this.y = this.d * sin(this.a)
        this.his.push([this.x, this.y])
        if (this.his.length > hisL) {
            this.his.shift()
        }
    }
    createMoons() {
        let amount = round(random(minMoons, maxMoons))
        for (let i = 0; i < amount; i++) {
            moons.push(new Moon(
                this.r * random(1.5, 3),
                this.r * random(0.1, 0.3),
                this.i
            ))
        }
    }
}
class Moon {
    constructor(d, r, p) {
        this.rot = random(chancer)
        this.r = r
        this.d = d * this.rot
        this.p = p
        this.x = 0
        this.y = 0
        this.a = random(this.r)
        this.his = []
        this.i = 0
    }
    display() {
        circle(this.x, this.y, this.r)
    }
    update() {
        this.a += (1 / this.d) * 2
        this.x = this.d * cos(this.a) + planets[this.p].x
        this.y = this.d * sin(this.a) + planets[this.p].y
        this.his.push([this.x, this.y])
        if (this.his.length > hisL) {
            this.his.shift()
        }
    }
}
class Star {
    constructor(x, y, r, pl) {
        this.x = x
        this.y = y
        this.pl = pl
        this.r = r
    }
    display() {
        fill(255, 165, 0, 200)
        circle(this.x, this.y, this.r)
    }
    createPlanets() {
        for (let i = 0; i < this.pl; i++) {
            let v = (this.r * 1.5) * (i + 1)
            planets.push(new Planet(
                random(v, v * 2),
                this.r * random(0.1, 0.3),
                i,
                random(0, this.r)
            ))
            planets[i].createMoons()
        }
    }
}