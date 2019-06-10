//Title 
let sprite;
let enemySprite;
function preload() {
    enemySprite = loadImage('assets/enemy.png');
    sprite = loadImage('assets/img.png');
    hit = loadSound("assets/hit.wav");
    hurt = loadSound("assets/hurt.wav");

}
function setup() {

    createCanvas(windowWidth, windowHeight / 2);
    button = createButton("Play Now");
    button.position(windowWidth / 2 - 68, windowHeight / 2 + 70);
    button.mousePressed(change);

    butto = createButton("Start Story");
    fightB = createButton("Attack");

    let step = 25
    let pxx = 400
    let exx = 680
    for (let i = pxx; i <= exx; i = i + step) {
        for1.push(i)
    }
    for (let i = exx; i >= pxx; i = i - step) {
        for2.push(i)
    }

    arr = for1.concat(for2)
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
    let maxdamage = 12
    let damage = random(1, 2.5)
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
    count = 0
    active = true
    setTimeout(stopAnimate, 400)
    setTimeout(edamageR, 160)
}
function stopAnimate() {
    count = 0
    active = false
    px = 400
}
function animateProjectiles() {
    activeProj = true
    countm = 0
    setTimeout(pdamageR, 100)
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
function story() {
    let text = text2[storyP].reverse()
    for (let i in text) {
        storyFeed.push(text[i])
    }
}

function attack() {
    fightB.remove()
    setTimeout(figthbb, 1200)
    animator()
}

function figthbb() {
    if (enemy.dmg > 0) {
        fightB = createButton("Attack");
        fightB.position(17, 590);
        fightB.mousePressed(attack);
    }
}
function removef() {
    fightB.remove()
}
function damageP() {
    if (attackSpeed >= 120 && enemy.dmg > 0) {
        animateProjectiles()
        attackSpeed = 0
    }
}
function edamageR() {
    enemy.hit(player.dmg)
    enGotHit = 0
    ered = 125
    setTimeout(edamageR2, 80)
}
function edamageR2() {
    enGotHit = 125
    ered = 0
    hit.play()
}
function pdamageR() {
    player.hit(enemy.dmg)
    pGotHit = 0
    pred = 125
    setTimeout(pdamageR2, 100)
}
function pdamageR2() {
    pGotHit = 125
    pred = 0
    hurt.play()
}
// let enGotHit = 125
// let pGotHit = 125
// let ered = 0
// let pred = 0
function shieldProt() {
    let maxprot = 10
    let prot = random(0.5, 1.5)
    return Math.round(prot * maxprot)
}
function shieldChance() {
    let chancer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
    let random = Math.floor(Math.random() * chancer.length)
    return chancer[random]
}
