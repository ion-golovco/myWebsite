//Title 

function setup() {
    createCanvas(windowWidth, windowHeight / 2);

    button = createButton("Play Now");
    button.position(windowWidth / 2 - 68, windowHeight / 2 + 70);
    button.mousePressed(change);

    butto = createButton("Start Story");
    fightB = createButton("Attack");
}

//Player race
function randomRace() {
    let random = Math.floor(Math.random() * races.length)
    return races[random]
}

//Enemy
function randomName() {
    let random1 = Math.floor(Math.random() * firstNames.length)
    let random2 = Math.floor(Math.random() * secondNames.length)
    return firstNames[random1] + " " + secondNames[random2]
}
function enemyLevel(pLevel) {
    let chancer = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2,]
    let rnum = Math.floor(Math.random() * chancer.length)
    return pLevel + chancer[rnum]
}


//Weapon
function weaponRarity(a) {
    let rarities = [["C", 102, 51, 153], ["B", 0, 51, 102], ["A", 51, 255, 51], ["S", 255, 204, 0]]
    return rarities[a]
}
function weaponDamage() {
    let maxdamage = 10
    let damage = random(1, 2)
    return Math.round(damage * maxdamage)
}
function weaponName() {
    let random = Math.floor(Math.random() * weaponNames.length)
    return weaponNames[random]
}
function randomRarity() {
    let chancer = [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3]
    let random = Math.floor(Math.random() * chancer.length)
    return chancer[random]
}
function chanceOfDrop() {
    let chancer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
    let random = Math.floor(Math.random() * chancer.length)
    return chancer[random]
}



function animator() {

}
function animateProjectiles() {

}


//Important
function change() {
    accept++
    if (accept == 1) {
        name = createInput();
        name.position(windowWidth / 2 - 95, windowHeight / 2 + 200)
        button.position(windowWidth / 2 - 68, windowHeight / 2 + 240);

    }
    if (accept == 2) {
        pName = name.value()
        player = new Player(1, 0, pName, weapon.dmg, hp, hp)
        button.remove()
        name.remove()
    }
}

function startStory() {
    fightB = createButton("Attack");
    fightB.position(17, 590);
    fightB.mousePressed(attack);

    butto.remove()
    indez++
    story()

    enemy = new Enemy(enemyLevel(player.lvl), randomName());
    enemy.statUpE()
    storyP++
}
function attack() {
    enemy.hit(player.dmg)
    fightB.remove()
    setTimeout(figthbb,1000)
}

function figthbb(){
    fightB = createButton("Attack");
    fightB.position(17, 590);
    fightB.mousePressed(attack);
}
function removef(){
    fightB.remove()
}
function damageP(){
    if(attackSpeed>=120){
        player.hit(enemy.dmg)
        attackSpeed = 0
    }
}
