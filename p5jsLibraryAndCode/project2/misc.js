
function setup() {
    createCanvas(windowWidth, windowHeight);
    w = (width) / 32
    h = (height) / 16

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
    if (value > 1000000) {
        return (value / 1000000).toFixed(1) + " M"
    } else if (value > 1000) {
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
            break
        }
        x++
    }
}

function spawnE(rn) {
    let x = tilesClass[rn].x
    let y = tilesClass[rn].y
    let arrF = [0, 1, 24]
    let arr = []
    if (spot.length < 10) {
        for (let i of arrF) {
            arr.push(i + rn)
            arr.push(rn - i)
        }
        arr = arr.slice(1, arr.length)
        color = [random() * 255, random() * 255, random() * 255]
        for (let i of arr) {
            tilesClass[i].owned = "computer" + ine
            spot.push([tilesClass[i].x, tilesClass[i].y, color, 3])
            spotB.push(i)
        }
    }
    ine++
    noSpot(rn)
    comBonus(rn)
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
    for (let tile of tilesClass) {
        if (arre[n][0] == tile.x) {
            if (arre[n][1] == tile.y) {
                return tile
            }
        }
    }
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
}

function buttonMarket(x, y) {
    let n = 310 - w * 6
    if (
        (x > n) && (y > h * 5) && (x < n + w * 2 - 20) && (y < h * 5 + h * 2 - 20)
    ) {
        player1.buyMarket()
    }
}
function buttonLand(x, y) {
    let n = 310 - w * 4
    if (
        (x > n) && (y > h * 5) && (x < n + w * 2 - 20) && (y < h * 5 + h * 2 - 20)
    ) {
        player1.buyLand()
    }
}
function buttonFarm(x, y) {
    let n = 310 - w * 6
    if (
        (x > n) && (y > h * 7) && (x < n + w * 2 - 20) && (y < h * 7 + h * 2 - 20)
    ) {
        player1.buyFarm()
    }
}

function randomSelector() {
    let chancer = [0, 2, 1]
    for (let i = 0; i < 200; i++) {
        let num = floor(random() * 3)
        list.push(chancer[num])
    }
}
function buyLandComputer() {
    let num = floor(random() * tilesLeft())
    if (tilesClass[num].owned !== undefined) {
        buyLandComputer()
    } else {
        tilesClass[num].owned = "computer" + ine
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
    if (
        (x > n) && (y > h * 7) && (x < n + w * 2 - 20) && (y < h * 7 + h * 2 - 20) && barrackU == 0
    ) {
        player1.buyBarrackU()
    }
}
function buttonArmy(x, y) {
    let n = 310 - w * 4
    if (
        (x > n) && (y > h * 7) && (x < n + w * 2 - 20) && (y < h * 7 + h * 2 - 20) && barrackU == 1
    ) {
        player1.buyArmy()
    }
}
function clickOnArmy(x, y) {
    let arr = []
    currenter = []
    for (let tile of tiles) {
        if (
            (x >= tile[0]) && (y >= tile[1]) && (x < tile[0] + width) && (y < tile[1] + height)
        ) {
            arr = ([tile[0], tile[1]])
            arr[0] = arr[0] - 297.5
            for (let i in playerArmy) {
                if (playerArmy[0].x == arr[0] && playerArmy[0].y == arr[1]) {
                    timer = 15
                    timerA = 1
                    currenter.push([i])
                    break
                }
            }
            for (let i of tilesClass) {
                if (arr[0] == i.x && arr[1] == i.y) {
                    i.a = undefined
                }
            }
            test = 244
        }
    }
    console.log("part1")
}
function moverB(x, y) {
    let arr = []
    x = x - 310
    for (let tile of tiles) {
        if (
            (x >= tile[0]) && (y >= tile[1]) && (x < tile[0] + width) && (y < tile[1] + height)
        ) {
            arr = ([tile[0], tile[1]])
        }
    }
    currenter.push(arr)
    mover()
    console.log("part2")
}
function mover() {
    for (let i of tilesClass) {
        if (currenter[1][0] == i.x && currenter[1][1] == i.y) {
            playerArmy[currenter[0]].move(i)

        }
    }
    currenter = []
    clicker = 0
    console.log("part3")
}


function mousePressed() {
    if (click == 0) {
        tes(mouseX, mouseY)
    } if (buyingLand[0] == 1) {
        newLand(place(mouseX, mouseY))
    }

    buttonMarket(mouseX, mouseY)
    buttonLand(mouseX, mouseY)
    buttonFarm(mouseX, mouseY)
    buttonBarrackU(mouseX, mouseY)
    buttonArmy(mouseX, mouseY)

    clickOnArmy(mouseX, mouseY)
    if (clicker == 1) {
        moverB(mouseX, mouseY)
    }

}
