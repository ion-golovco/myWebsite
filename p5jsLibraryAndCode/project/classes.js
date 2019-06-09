class Player {

    constructor(_lvl, _xp, _name, _damage, _health, _maxHealth) {
        this.lvl = _lvl
        this.xp = _xp
        this.name = _name
        this.timeslvlup = 0
        this.dmg = _damage 
        this.health = _health
        this.maxhealth = _maxHealth
        this.weapon = _damage
    }
    levelup() {
        let xp = this.xp
        let co = 0.1
        if (xp >= limit) {
            //Upgrading skills
            this.xp = this.xp - limit
            this.lvl++
            this.timeslvlup++
            limit = limit + limit * co
            this.maxhealth = this.maxhealth + this.maxhealth / this.lvl
            this.dmg = this.maxhealth * 0.45 * (this.weapon / 10)
            feed.push(["You Are now level " + this.lvl])

            //New rank
            if (this.timeslvlup % 8 == 0) {
                index++
                feed.push(["Your rank has increased"])
            }
            return true
        }
        return false
    }
    
    powerMove() {
        this.dmg = this.maxhealth * 0.45 * (this.weapon / 10)
        if (hits == 5) {
            this.dmg = this.maxhealth * 0.45 * (this.weapon / 10) *1.5
        }
        if(hits==6){
            hits=0
        }
    }
    hit(edmg) {
        this.health = this.health - edmg
        if (this.health <= 0) {
            this.health = 1
            this.xp = 0
            accept++
            return "you died"
        }
    }
}
class Enemy {

    constructor(_lvl, _name) {
        this.lvl = _lvl
        this.name = _name
        this.dmg = 17
        this.health = 125
    }

    hit(pdmg) {
        this.health = this.health - pdmg
        hits++
        if (this.health <= 0) {
            reward = (this.lvl / 2) * 10
            feed.push(["You killed " + this.name + " and got " + reward + " xp"])
            hits = 0
        }
    }

    statUpE() {
        this.health = this.health * this.lvl / 2
        this.dmg = this.dmg * this.lvl / 2
    }
}

class Weapon {

    constructor(_rarity, _dmg, _name) {
        this.rarity = _rarity
        this.dmg = _dmg
        this.name = _name
    }
}

class enemyDead {
    constructor(){
        this.dmg = 0
    }
}