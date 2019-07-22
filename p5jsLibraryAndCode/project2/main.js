function coolGui() {
    for (let i = 0; i <= 255; i++) {
        gui.push(i)
    }
}

function draw() {
    if (stageClick == -1) {
        stageClick++
        coolGui()
    }
    if (stageClick == 0) {
        noStroke()
        tint(255)
        image(i13,0,0,wer*16,her*9)
        if (oner <= gui.length) {
            oner += 1.5
        } else {
            onera += 1.5
            fill(0, onera)
            rect(wer * 7, oner + 50, wer * 2, 50)
            orinS = 1
        }
        tint(255, oner)
        image(i12,wer * 6, oner - 100)
    } else if (stageClick == 1) {
        stroke(1)
        if (click == 0) {
            list = []
            player1 = new Player(0, 0, 0, 0, 0, 0);
            computer1 = new Computer(0, 0, 0, 0, 0, 0);
            randomSelector()
        }
        if (click == 1) {
            goldCe = player1.market + goldB
            foodCe = player1.farms + foodB
            goldDe = computer1.market + goldC
            foodDe = computer1.farms + foodC

            player1.food += foodCe
            player1.gold += goldCe
            player1.wood += woodB

            computer1.food += foodDe
            computer1.wood += woodC
            computer1.gold += goldDe
        }
        if (timerA == 1) {
            timer--
            if (timer <= 0) {
                timerA = 0
                clicker = 1
            }
        }
        stroke(0)
        strokeWeight(0.8)
        let yoff = 0
        translate(310, 0)
        //Tiles generation and coloring
        for (let i = 0; i < height - 30; i = i + h) {
            let xoff = 0
            for (let j = 0; j <= width - w * 9; j = j + w) {
                let r = noise(xoff, yoff) * 255
                if (lo < 1) {
                    tiles.push([j, i])
                }
                if (r > 150) {
                    fill(30,80,220)
                    if (lo < 1) {
                        tilesClass.push(new Water(j, i, "Water", undefined, undefined, 1200))

                    }
                } else if (r < 150 && r > 100) {
                    fill(50,205,50)
                    if (lo < 1) {
                        tilesClass.push(new Land(j, i, "Land", undefined, undefined, 1200))
                    }
                } else if (r < 100 && r > 70) {
                    fill(34,139,34)
                    if (lo < 1) {
                        tilesClass.push(new Forest(j, i, "Forest", undefined, undefined, 1200))
                    }
                } else if (r < 70) {
                    fill(139,69,19)
                    if (lo < 1) {
                        tilesClass.push(new Mountain(j, i, "Mountain", undefined, undefined, 1200))
                    }
                }
                rect(j, i, w, h)
                xoff += inc
            }
            yoff += inc
        }
    //Tiles index
    stroke(0)
    tint(255)
    fill(200)
    for (let tile of tilesClass) {
        //if (tile.i == "Land") { image(i3, tile.x, tile.y, w, h) }
        //if (tile.i == "Forest") { image(i5, tile.x, tile.y, w, h) }
        //if (tile.i == "Water") { image(i6, tile.x, tile.y, w, h) }
        //if (tile.i == "Mountain") { image(i4, tile.x, tile.y, w, h) }
    }
    textSize(8)
    //for (let tile in tiles) {
    // text(tile, tiles[tile][0] + 2, tiles[tile][1] + 10)
    //}
    lo = 1

    //Tiles biome calculator
    let ine
    for (let i in tilesClass) {
        ine = 0
        let curr = tilesClass[i].i
        for (let j in tilesClass) {
            let jcurr = tilesClass[j].i
            if (curr == jcurr) {
                ine = ine + 1
                obj[curr] = ine
            }
        }
    }
    //Biome
    biomeArr = Object.entries(obj)
    biomeArr = biomeArr.sort((a, b) => a[1] - b[1])
    biomeC()

    //Spotting
    if (spotA == 1) {
        for (let i of spot) {
            fill(0, 0)
            strokeWeight(i[3])
            stroke(i[2])
            rect(i[0], i[1], w, h)
        }
    }
    fill(230)
    noStroke()
    //Game Ui 

    textSize(16)
    fill(0)

    if (buyingLand[0] == 1) {
        for (let i = 1; i < tilesLeft(); i++) {
            fill(245, 233, 0, 74)
            strokeWeight(1)
            noStroke()
            rect(buyingLand[i][0], buyingLand[i][1], w, h)
        }
    }
    //Computer Upgrades
    if (list[ince] == 0) {
        computer1.buyFarm()
    } else if (list[ince] == 1) {
        computer1.buyMarket()
    } else if (list[ince] == 2) {
        computer1.buyLand()
    } else if (list[ince] == 3) {
        computer1.upBarrack()
    } else if (list[ince] == 4) {
        computer1.buyArmy()
    }


    for (let i of tilesClass) {
        for (let j of playerArmy) {
            if (i.x !== j.x && i.y !== j.y) {
                i.a = undefined
            }
        }
    }
    if (movingArmyA == 1) {
        for (let t of movingAr) {
            fill(255, 80)
            rect(tilesClass[t].x, tilesClass[t].y, w, h)
        }
    }

    for (let i of playerArmy) {
        fill(120, 0, 0)
        rect(i.x, i.y, w, h)
    }
    for (let i of computerArmy) {
        fill(255, 120)
        rect(i.x, i.y, w, h)
    }
    for (let i of playerArmy) {
        if (i.time >= 0) {
            i.cooldown()
        }
    }
    for (let i in computerArmy) {
        if (computerArmy[i].time == -1) {
            moveToTarget(i)
        }
        if (computerArmy[i].time >= 0) {
            computerArmy[i].cooldown()
        }
    }
    for (let a of computerArmy) {

    }
    for (let a of playerArmy) {
        for (let tile of tilesClass) {
            if (a.x == tile.x && a.y == tile.y) {
                if (a.owned !== tile.owned && tile.owned !== undefined) {
                    conquest(playerArmy.indexOf(a), tilesClass.indexOf(tile))
                }
            }
        }
    }

    for (let a of computerArmy) {
        for (let tile of tilesClass) {
            if (a.x == tile.x && a.y == tile.y) {
                if (a.owned !== tile.owned && tile.owned !== undefined) {
                    cConquest(computerArmy.indexOf(a), tilesClass.indexOf(tile))
                }
            }
        }
    }
    for (let a of playerArmy) {
        for (let b of computerArmy) {
            if (a.x == b.x && a.y == b.y) {
                b.hit(a ? a.dmg : 0)
                a.hit(b ? b.dmg : 0)
                break
            }
        }
    }
    if (ince >= 500) {
        randomSelector()
    }
    for (let a of playerArmy) {
        let healther = a.hp / 100 * w - 4
        fill(160, 0, 0)
        rect(a.x + 2, a.y + 3, w - 4, 2)
        fill(0, 220, 0)
        rect(a.x + 2, a.y + 3, healther, 2)

    }
    for (let a in tilesClass) {
        for (let b in spot) {
            if (spot[b][0] == tilesClass[a].x && spot[b][1] == tilesClass[a].y) {
                if (tilesClass[a].owned == "player" && spot[b][2] == 255) {
                    spot[b][2] = [120, 0, 0]
                } if (tilesClass[a].owned == "computer0" && spot[b][2][0] == 120) {
                    spot[b][2] = 255
                }
            }
        }
    }
    if (origin !== undefined) {
        for (let tile of tilesClass) {
            if (tile.x == origin.x && tile.y == origin.y) {
                if (tile.owned !== "player") {
                    stageClick++
                }
            }
        }
    }
    //Game Ui
    tint(255)
    image(i2, -310, 0)
    //Market

    if (player1.gold > goldMin && player1.wood > woodMin) {
        tint(255)
    } else {
        tint(180)
    }

    image(i8, -w * 6, h * 11, w * 2 - 20, h * 2 - 20)
    //Farm
    if (player1.wood > woodMin2 && player1.food > foodMin) {
        tint(255)
    } else {
        tint(180)
    }
    image(i11, -w * 6, h * 13, w * 2 - 20, h * 2 - 20)
    //Land
    if (player1.gold > goldMin2) {
        tint(255)
    } else {
        tint(180)
    }
    image(i10, -w * 4, h * 11, w * 2 - 20, h * 2 - 20)
    if (player1.gold > 20000 && player1.wood > 20000 && player1.food > 20000) {
        tint(255)
    } else {
        tint(180)
    }
    if (barrackU == 0) {
        image(i9, -w * 4, h * 13, w * 2 - 20, h * 2 - 20)
    } else {
        image(i7, -w * 4, h * 13, w * 2 - 20, h * 2 - 20)
    }
    fill(0)
    textSize(20)
    text(format(player1.gold), -w * 4.5, h * 3.28)
    text(format(player1.food), -w * 4.5, h * 5.75)
    text(format(player1.wood), -w * 4.5, h * 8.1)
}


    else if (stageClick == 2) {
    textSize(24)
    fill(0)
    stroke(1.5)
    textAlign(CENTER)
    text("You Lost, to try again reload the page.", we/2, he/2)
    }   
}