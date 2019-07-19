function draw() {
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

    background(255)
    if (timerA == 1) {
        timer--
        if (timer <= 0) {
            timerA = 0
            clicker = 1
        }
    }
    stroke(0)
    strokeWeight(1.2)
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
                fill(0, 40, 190)
                if (lo < 1) {
                    tilesClass.push(new Water(j, i, "Water"))
                }
            } else if (r < 150 && r > 100) {
                fill(0, 150, 0)
                if (lo < 1) {
                    tilesClass.push(new Land(j, i, "Land"))
                }
            } else if (r < 100 && r > 70) {
                fill(0, 90, 0)
                if (lo < 1) {
                    tilesClass.push(new Forest(j, i, "Forest"))
                }
            } else if (r < 70) {
                fill(60, 40, 0)
                if (lo < 1) {
                    tilesClass.push(new Mountain(j, i, "Mountain"))
                }
            }
            rect(j, i, w, h)
            xoff += inc
        }
        yoff += inc
    }

    //Tiles index
    fill(200)
    textSize(8)
    for (let tile in tiles) {
        text(tile, tiles[tile][0] + 2, tiles[tile][1] + 10)
    }
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
    text("My Game", -w * 4.5, h * 1)
    text("Food : " + format(player1.food) + "    Income : " + foodCe, -w * 7, h * 2)
    text("Wood : " + format(player1.wood) + "    Income : " + woodB, -w * 7, h * 3)
    text("Gold : " + format(player1.gold) + "    Income : " + goldCe, -w * 7, h * 4)

    text("Map : " + mapName, -w * 7, h * 15)
    text("Tiles left : " + tilesLeft(), -w * 7, h * 14)
    //Market
    if (player1.gold > goldMin && player1.wood > woodMin) {
        fill(80)
        tint(180)
    } else {
        fill(0)
        tint(255)
    }

    rect(-w * 6, h * 5, w * 2 - 20, h * 2 - 20)
    //Farm
    if (player1.wood > woodMin2 && player1.food > foodMin) {
        fill(80)
        tint(180)
    } else {
        fill(0)
        tint(255)
    }
    rect(-w * 6, h * 7, w * 2 - 20, h * 2 - 20)
    //Land
    if (player1.gold > goldMin2) {
        fill(80)
        tint(180)
    } else {
        fill(0)
        tint(255)
    }
    rect(-w * 4, h * 5, w * 2 - 20, h * 2 - 20)

    if (player1.gold > 20000 && player1.wood > 20000 && player1.food > 20000) {
        fill(80)
        tint(180)
    } else {
        fill(test)
        tint(255)
    }
    if (barrackU == 0) {

        rect(-w * 4, h * 7, w * 2 - 20, h * 2 - 20)
    } else {

        rect(-w * 4, h * 7, w * 2 - 20, h * 2 - 20)
    }
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
        fill(255,120)
        rect(i.x, i.y, w, h)
    }
    for (let i of playerArmy) {
        if (i.time >= 0) {
            i.cooldown()
        }
    }
    for (let i in computerArmy) {
        if(computerArmy[i].time == -1){
            moveToTarget(i)
        }
        if (computerArmy[i].time >= 0) {
            computerArmy[i].cooldown()
        }
    }
}