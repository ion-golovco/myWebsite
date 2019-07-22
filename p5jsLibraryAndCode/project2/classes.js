class Player {
    constructor(_food, _gold, _wood, _market, _land, _farms) {
        this.food = _food
        this.gold = _gold
        this.wood = _wood

        this.market = _market
        this.land = _land
        this.farms = _farms
    }
    buyMarket() {
        woodMin = ((pow(this.market, 2) / 20) * 8000 + 8000)
        goldMin = ((pow(this.market, 2) / 20) * 6000 + 6000)
        if (woodMin < this.wood && goldMin < this.gold) {

            this.gold = this.gold - goldMin
            this.wood = this.wood - woodMin
            this.market++
        }
    }
    buyLand() {
        goldMin2 = ((pow(this.land, 2) / 20) * 8000 + 8000)
        if (goldMin2 < this.gold) {

            this.gold = this.gold - goldMin2
            this.land++
            buyLandPlayer()
        }
    }
    buyFarm() {
        woodMin2 = ((pow(this.farms, 2) / 20) * 6000 + 6000)
        foodMin = ((pow(this.farms, 2) / 20) * 3000 + 3000)
        if (woodMin2 < this.wood && foodMin < this.food) {
            this.food = this.food - foodMin
            this.wood = this.wood - woodMin2
            this.farms++
        }
    }
    buyBarrackU() {
        if (this.gold > 20000 && this.wood > 20000 && this.food > 20000) {
            this.food = this.food - 20000
            this.wood = this.wood - 20000
            this.gold = this.gold - 20000
            barrackU++
        }
    }
    buyArmy() {
        if (this.gold > 10000 && this.food > 10000) {
            this.food = this.food - 10000
            this.gold = this.gold - 10000
            for(let tile in tilesClass){
                if(tilesClass[tile] == origin){
                    playerArmy.push(new Army(tilesClass[tile].x,tilesClass[tile].y,"player",100,100))
                }
            }
        }
    }
}
class Water {
    constructor(_x, _y, _w, _t, _a,_time) {
        this.x = _x
        this.y = _y
        this.i = _w
        this.owned = _t
        this.a = _a
        this.timer = _time
    }
}
class Land {
    constructor(_x, _y, _l, _t, _a,_time) {
        this.x = _x
        this.y = _y
        this.i = _l
        this.owned = _t
        this.a = _a
        this.timer = _time
    }
}
class Mountain {
    constructor(_x, _y, _m, _t, _a,_time) {
        this.x = _x
        this.y = _y
        this.i = _m
        this.owned = _t
        this.a = _a
        this.timer = _time
    }
}
class Forest {
    constructor(_x, _y, _f, _t, _a,_time) {
        this.x = _x
        this.y = _y
        this.i = _f
        this.owned = _t
        this.a = _a
        this.timer = _time
    }
}
class Computer {
    constructor(_food, _gold, _wood, _market, _land, _farms) {
        this.food = _food
        this.gold = _gold
        this.wood = _wood

        this.market = _market
        this.land = _land
        this.farms = _farms
    }
    buyMarket() {
        if (woodMin3 < this.wood && goldMin3 < this.gold) {
            woodMin3 = ((pow(this.market, 2) / 20) * 8000 + 8000)
            goldMin3 = ((pow(this.market, 2) / 20) * 6000 + 6000)
            this.gold = this.gold - goldMin3
            this.wood = this.wood - woodMin3
            this.market++
            ince++
        }
    }
    buyLand() {
        if (goldMin4 < this.gold) {
            goldMin4 = ((pow(this.land, 2) / 20) * 8000 + 8000)
            this.gold = this.gold - goldMin4
            this.land++
            buyLandComputer()
            ince++
        }
    }
    buyFarm() {
        if (woodMin3 < this.wood && foodMin2 < this.food) {
            woodMin3 = ((pow(this.farms, 2) / 20) * 6000 + 6000)
            foodMin2 = ((pow(this.farms, 2) / 20) * 3000 + 3000)
            this.food = this.food - foodMin2
            this.wood = this.wood - woodMin3
            this.farms++
            ince++
        }
    }
    upBarrack(){
        if (this.gold > 20000 && this.wood > 20000 && this.food > 20000) {
            this.food = this.food - 20000
            this.wood = this.wood - 20000
            this.gold = this.gold - 20000
            ince++
            }
        }
    buyArmy(){
        if (this.gold > 10000 && this.food > 10000) {
            this.gold = this.gold - 10000
            this.food = this.food - 10000
            ince++
            for(let tile in tilesClass){
                if(tilesClass[tile] == comOrigin){
                    computerArmy.push(new enemyArmy(tilesClass[tile].x,tilesClass[tile].y,"computer0",150,undefined,100))
                }
            }
        }   
    }
} 
class Army {
    constructor(_x, _y, _t,_timer,_hp) {
        this.x = _x
        this.y = _y
        this.owned = _t
        this.time = _timer
        this.hp = _hp
        this.dmg = random(0.4,0.55)
    }
    hit(dmg){
        this.hp = this.hp - dmg
        if(this.hp <= 0 ){
            deleteArmy(this.x,this.y)
        }
    }
    move(tile){
        this.x = tile.x
        this.y = tile.y
        tile.a = "player"
        if(tile.owned !== "player" && tile.owned !== undefined){
        } 
    }
    cooldown(){
        this.time = this.time - 1
    }
}
class enemyArmy{
    constructor(_x, _y, _t,_timer,_target,_hp) {
        this.x = _x
        this.y = _y
        this.owned = _t
        this.time = _timer
        this.target = _target
        this.hp = _hp
        this.dmg = random(0.4,0.55)
    }
    hit(dmg){
        this.hp = this.hp - dmg
        if(this.hp <= 0 ){
            deleteCArmy(this.x,this.y)
        }
    }
    move(tile){
        this.x = tile.x
        this.y = tile.y
        tile.a = "computer0"
    }
    cooldown(){
        this.time = this.time - 1
    }
    
}