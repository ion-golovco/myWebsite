let i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13;

function setup() {
    createCanvas(windowWidth, windowHeight);

    i1 = loadImage("assets/castle.png")

    i2 = loadImage("assets/gameUi.png")

    i3 = loadImage("assets/tilePlain.png")
    i4 = loadImage("assets/m.png")
    i5 = loadImage("assets/p.png")
    i6 = loadImage("assets/w.png")

    i7 = loadImage("assets/unit.png")
    i8 = loadImage("assets/market.png")
    i9 = loadImage("assets/barrack.png")
    i10 =loadImage("assets/land.png")
    i11 = loadImage("assets/farm.png")

    i12 = loadImage("assets/title.png")
    i13 = loadImage("assets/back.png")


    w = (width) / 32
    h = (height) / 16

    wer = windowWidth / 16
    her = windowHeight / 9

    we = windowWidth
    he = windowHeight
}


function tes(x, y) {
    arre = []
    x = x - 310
    for (let tile of tiles) {

        if (
            (x >= tile[0]) && (y >= tile[1]) && (x < tile[0] + width) && (y < tile[1] + height)
        ) {
            arre.push([tile[0], tile[1]])
        }
    }
    let n = arre.length - 1

    for (let tile of tilesClass) {
        if (arre[n][0] == tile.x) {
            if (arre[n][1] == tile.y) {
                origin = tile
                areaA(tile.x, tile.y)
                break
            }
        }
    }
    randomI()
    click++
}


function areaA(x, y) {
    for (let i in tilesClass) {
        if (tilesClass[i].x == x && tilesClass[i].y == y) {
            i = i - 24
            if (tilesClass[i].i == "Water") {
                spot.push([tilesClass[i].x, tilesClass[i].y, [120, 0, 0], 3])
                spotB.push(i)
                foodB++
                tilesClass[i].owned = "player"
                i++

            }
            else if (tilesClass[i].i == "Mountain") {
                spot.push([tilesClass[i].x, tilesClass[i].y, [120, 0, 0], 3])
                spotB.push(i)
                goldB++
                tilesClass[i].owned = "player"
                i++
            }
            else if (tilesClass[i].i == "Land" || tilesClass[i].i == "Forest") {
                spot.push([tilesClass[i].x, tilesClass[i].y, [120, 0, 0], 3])
                spotB.push(i)
                woodB++
                tilesClass[i].owned = "player"
                i++
            }
            i = i + 22
            for (let j = 0; j < 3; j++) {
                if (tilesClass[i].i == "Water") {
                    spot.push([tilesClass[i].x, tilesClass[i].y, [120, 0, 0], 3])
                    spotB.push(i)
                    foodB++
                    tilesClass[i].owned = "player"
                    i++
                }
                else if (tilesClass[i].i == "Mountain") {
                    spot.push([tilesClass[i].x, tilesClass[i].y, [120, 0, 0], 3])
                    spotB.push(i)
                    goldB++
                    tilesClass[i].owned = "player"
                    i++
                }
                else if (tilesClass[i].i == "Land" || tilesClass[i].i == "Forest") {
                    spot.push([tilesClass[i].x, tilesClass[i].y, [120, 0, 0], 3])
                    spotB.push(i)
                    woodB++
                    tilesClass[i].owned = "player"
                    i++
                }
            }
            i = i + 22
            if (tilesClass[i].i == "Water") {
                spot.push([tilesClass[i].x, tilesClass[i].y, [120, 0, 0], 3])
                spotB.push(i)
                foodB++
                tilesClass[i].owned = "player"
                i++
            }
            else if (tilesClass[i].i == "Mountain") {
                spot.push([tilesClass[i].x, tilesClass[i].y, [120, 0, 0], 3])
                spotB.push(i)
                goldB++
                tilesClass[i].owned = "player"
                i++
            }
            else if (tilesClass[i].i == "Land" || tilesClass[i].i == "Forest") {
                spot.push([tilesClass[i].x, tilesClass[i].y, [120, 0, 0], 3])
                spotB.push(i)
                woodB++
                tilesClass[i].owned = "player"
                i++
            }
            i = i - 25
            noSpot(i)
        }
    }
    spotA = 1
    maper = 0
}

function biomeC() {
    for (let l of biomeArr) {
        if (l[1] >= 200 && l[0] == "Land") {
            mapName = "Grassland"
            break
        } else if (l[1] >= 40 && l[0] == "Mountain") {
            mapName = "Mountain"
            break
        } else if (l[1] >= 100 && l[0] == "Forest") {
            mapName = "Forest"
            break
        } else if (l[1] >= 100 && l[0] == "Water") {
            mapName = "Swamp"
            break
        } else {
            mapName = "Plains"
        }
    }
}

function format(value) {
    if (value > 1000) {
        return (value / 1000).toFixed(1) + " k"
    } else {
        return value.toFixed(0)
    }

}
function noSpot(index) {
    let arrF = [0, 1, 2, 23, 24, 25, 48]
    for (let i of arrF) {
        spotC.push(i + index)
        spotC.push(index - i)
    }
}

function randomI() {
    let x = 0
    let rn = floor(random(25, 358))
    for (let i of spotC) {
        if (rn == i) {
            randomI()
        } else if (x == spotC.length - 1) {
            spawnE(rn)
            comOrigin = tilesClass[rn]
            break
        }
        x++
    }
}

function spawnE(rn) {
    let arrF = [0, 1, 24]
    let arr = []
    if (spot.length < 10) {
        for (let i of arrF) {
            arr.push(i + rn)
            arr.push(rn - i)
        }
        arr = arr.slice(1, arr.length)
        color = 255
        for (let i of arr) {
            tilesClass[i].owned = "computer" + ine
            spot.push([tilesClass[i].x, tilesClass[i].y, 255, 3])
            spotB.push(i)
        }
    }
    ine++
    noSpot(rn)
    comBonus(rn)
    maper = 0
    return
}

function tilesLeft() {
    let current = 0
    for (let i of tilesClass) {
        if (i.owned == undefined) {
            current++
        }
    }
    return current
}

function comBonus(index) {
    let arrF = [-24, -1, 0, 1, 24]
    for (let i in tilesClass) {
        for (let j of arrF) {
            if (i == index + j) {
                if (tilesClass[index + j].i == "Land" || tilesClass[index + j].i == "Forest") {
                    woodC++
                } else if (tilesClass[index + j].i == "Water") {
                    foodC++
                } else if (tilesClass[index + j].i == "Mountain") {
                    goldC++
                }
            }
        }
    }
}
function buyLandPlayer() {
    buyingLand[0] = 1
    for (let i of tilesClass) {
        if (i.owned == undefined) {
            buyingLand.push([i.x, i.y])
        }
    }
    maper = 0
}
function place(x, y) {
    let arre = []
    x = x - 310
    for (let tile of tiles) {
        if (
            (x >= tile[0]) && (y >= tile[1]) && (x < tile[0] + width) && (y < tile[1] + height)
        ) {
            arre.push([tile[0], tile[1]])
        }
    }
    let n = arre.length - 1
    if (arre.length > 0) {
        for (let tile of tilesClass) {
            if (arre[n][0] == tile.x) {
                if (arre[n][1] == tile.y) {
                    return tile
                }
            }
        }
    }
    maper = 0
}
function newLand(tile) {
    if (tile.owned !== undefined) {
        return
    }
    buyingLand = [0]
    tile.owned = "player"
    spot.push([tile.x, tile.y, [120, 0, 0], 3])
    if (tile.i == "Land" || tile.i == "Forest") {
        woodB++
    } else if (tile.i == "Water") {
        foodB++
    } else if (tile.i == "Mountain") {
        goldB++
    }
    maper = 0
}

function buttonMarket(x, y) {
    let n = 310 - w * 6
    if (LocalButtonPress(x, y, n, h * 11)) {
        player1.buyMarket()
    }
}
function buttonLand(x, y) {
    let n = 310 - w * 4
    if (LocalButtonPress(x, y, n, h * 11)) {
        player1.buyLand()
    }
    maper = 0
}
function buttonFarm(x, y) {
    let n = 310 - w * 6
    if (LocalButtonPress(x, y, n, h * 13)) {
        player1.buyFarm()
    }
}

function randomSelector() {
    let chancer = [1, 2, 0, 4, 4, 4, 4]
    list.push(1, 2, 3)
    for (let i = 0; i < 500; i++) {
        let num = floor(random() * chancer.length)
        list.push(chancer[num])
    }

}
function buyLandComputer() {
    let num = floor(random() * tilesLeft())
    if (tilesClass[num].owned !== undefined) {
        buyLandComputer()
    } else {
        tilesClass[num].owned = "computer0"
        spot.push([tilesClass[num].x, tilesClass[num].y, color, 3])
        if (tilesClass[num].i == "Land" || tilesClass[num].i == "Forest") {
            woodC++
        } else if (tilesClass[num].i == "Water") {
            foodDe++
        } else if (tilesClass[num].i == "Mountain") {
            goldDe++
        }
    }
}
function buttonBarrackU(x, y) {
    let n = 310 - w * 4
    if (LocalButtonPress(x, y, n, h * 13) && barrackU == 0) {
        player1.buyBarrackU()
    }
}
function buttonArmy(x, y) {
    let n = 310 - w * 4
    if (LocalButtonPress(x, y, n, h * 13) && barrackU == 1) {
        player1.buyArmy()
    }
    maper = 0
}


function isItArmyIClicked(x, y) {
    current = 0
    til = 0
    let arre = []
    x = x - 310
    for (let i = 24; i < tiles.length - 24; i++) {
        if (
            (x >= tiles[i][0]) && (y >= tiles[i][1]) && (x < tiles[i][0] + width) && (y < tiles[i][1] + height)
        ) {
            arre.push([tiles[i][0], tiles[i][1]])
        }
    }
    if (arre.length > 0) {
        let n = arre.length - 1
        for (let t in playerArmy) {
            if (arre[n][0] == playerArmy[t].x) {
                if (arre[n][1] == playerArmy[t].y) {
                    current = t
                    if (playerArmy[t].time >= 10) {
                        return
                    }
                    til = [arre[n][0], arre[n][1]]
                    for (let t in tilesClass) {
                        if (tilesClass[t].x == til[0] && tilesClass[t].y == til[1]) {
                            til = tilesClass[t]
                            movingArmy(t)
                        }
                    }
                }
            }
        }
    }
    maper = 0
}
function movingArmy(t) {
    movingAr = []
    let arr = [-24, -1, 0, 1, 24]
    movingArmyA = 1
    for (let tile of arr) {
        movingAr.push(+t + +tile)
    }
    clicker = 1
}
function movingClick(x, y) {
    let arre = []
    x = x - 310
    let arrr = []
    for (let j of movingAr) {
        for (let i in tilesClass) {
            if (j == i) {
                arrr.push([tilesClass[i].x, tilesClass[i].y])
            }
        }
    }
    for (let tile of arrr) {
        if (
            (x >= tile[0]) && (y >= tile[1]) && (x < tile[0] + width) && (y < tile[1] + height)
        ) {
            arre.push([tile[0], tile[1]])
        }
    }
    let n = arre.length - 1
    for (let tile of tilesClass) {
        if (tile.x == arre[n][0] && tile.y == arre[n][1]) {
            til = tile
        }
    }
    if (arre.length >= 1) {
        playerArmy[current] ? playerArmy[current].time = 180 : 0
        playerArmy[current].move(til)
        clicker = 0
        movingArmyA = 0
    }
    maper = 0
}
function mousePressed() {
    if (orinS == 1) {
        buttonStart(mouseX, mouseY)
    } else if (orinS == 2) {
        buttonMarket(mouseX, mouseY)
        buttonLand(mouseX, mouseY)
        buttonFarm(mouseX, mouseY)
        buttonBarrackU(mouseX, mouseY)
        buttonArmy(mouseX, mouseY)
        if (click == 0) {
            tes(mouseX, mouseY)
        } if (buyingLand[0] == 1) {
            newLand(place(mouseX, mouseY))
        }
        if (clicker == 1) {
            movingClick(mouseX, mouseY)
        } else {
            isItArmyIClicked(mouseX, mouseY)
        }
    }
}
function LocalButtonPress(x, y, n, by) {
    if ((x > n) && (y > by) && (x < n + w * 2 - 20) && (y < by + h * 2 - 20)) {
        return true
    }
}
function targetAssign() {
    let arr = []
    for (let tile of tilesClass) {
        if (tile.owned == "player") {
            arr.push(tile)
        }
    }
    let num = floor(random() * arr.length)
    return arr[num]
}
function moveToTarget(index) {
    if (computerArmy[index].target == undefined) {
        computerArmy[index].target = targetAssign()
    } else {
        let indexer
        for (let t in tilesClass) {
            if (tilesClass[t].x == computerArmy[index].target.x
                && tilesClass[t].y == computerArmy[index].target.y) {
                indexer = t
            }
        }
        let moves = []
        for (let move of possibleMoves(index)) {
            moves.push([abs(move - indexer), move])
        }
        moves = moves.sort((a, b) => a[0] - b[0])
        computerArmy[index].time = 200
        computerArmy[index].move(tilesClass[moves[0][1]])
    }
    maper = 0
}
function possibleMoves(index) {
    let arre = []
    let arr = [-24, -1, 0, 1, 24]
    for (let army in computerArmy) {
        if (index == army) {
            for (let t in tilesClass) {
                if (computerArmy[army].x == tilesClass[t].x && computerArmy[army].y == tilesClass[t].y) {
                    for (let te of arr) {
                        arre.push(+te + +t)
                    }
                }
            }
        }
    }
    return arre
}
function conquest(army, tile) {
    tilesClass[tile].timer--
    if (tilesClass[tile].timer <= 0) {
        tilesClass[tile].owned = "player"
        tilesClass[tile].timer = 1000
    }
    maper = 0
}

function deleteCArmy(x, y) {
    for (let i in computerArmy) {
        if (computerArmy[i].x == x && computerArmy[i].y == y) {
            computerArmy.splice(i, 1)
        }
    }
    maper = 0
}
function deleteArmy(x, y) {
    for (let i in playerArmy) {
        if (playerArmy[i].x == x && playerArmy[i].y == y) {
            playerArmy.splice(i, 1)
        }
    }
    maper = 0
}
function cConquest(army, tile) {
    tilesClass[tile].timer--
    if (tilesClass[tile].timer <= 0) {
        tilesClass[tile].owned = "computer0"
        tilesClass[tile].timer = 1000
    }
    maper = 0
}
function buttonStart(x,y){
    if((x > wer*7) && (y > oner+50) && (x <wer*2+ wer*7) && (y < oner+100)){
        stageClick++
        orinS++
    }
}