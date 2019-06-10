enemy.statUpE()
function draw() {
    //First Screen
    attackSpeed++
    if (attackSpeed >= 121) {
        attackSpeed = 0
    }
    check = 0
    fill(0)
    stroke(0)
    strokeWeight(1)
    if (accept == 0) {
        background(250)
        textSize(32)
        text("Press right here to play my totaly awesome game", windowWidth / 2 - 340, 50)
    }

    if (accept == 1) {
        background(250)
        fill(0)
        textSize(16)
        //Bad story

        text(text1[0] + race + text1[1], windowWidth / 2 - 300, 50)
        let yfortext1 = 70
        for (let i = 2; i < text1.length; i++) {
            text(text1[i], windowWidth / 2 - 300, yfortext1)
            yfortext1 = yfortext1 + 23
        }

    }


    //Main Game
    if (accept == 2) {
        count++
        slot++
        countm++

        background(250);

        //Small setup
        if (reward > 0) {
            enemyKilled++

            enemy = new enemyDead()
            player.xp = player.xp + reward;
            reward = 0;
            //story
            butto = createButton("Continue");
            butto.position(17, 543);
            butto.mousePressed(startStory);
            setTimeout(removef,1300)
            //New weapon chance
            let a = chanceOfDrop()
            let b = shieldChance()
            if (b > 0) {
                shield = new Shield(shieldProt())
                player.maxhealth = player.maxhealth + shield.prot
                feed.push(["You found a new shield!"])
            }
            if (a > 0) {
                weapon = new Weapon(randomRarity(), weaponDamage(), weaponName())
                player.weapon = weapon.dmg
                feed.push(["You found a new weapon ! (" + weapon.name + ")"])
            }
        }




        player.levelup();
        player.powerMove(player.dmg)

        if (player.health < player.maxhealth) {
            player.health += inc;
        }

        //Health and xp bar setup
        let wxp = (player.xp / limit) * 150;
        let whealth = (player.health / player.maxhealth) * 175;
        let lvl = player.lvl;

        //Health,Xp bar and level

        fill(220);
        rect(13, 33, 175, 14, 9);
        rect(18, 52, 150, 4, 5);



        //here!!!
        fill(0, 160, 0);
        rect(13, 33, whealth, 14, 9);



        textSize(10);
        fill(255, 204, 0)
        rect(18, 52, wxp, 4, 5);
        fill(0);

        text(Math.round(player.health) + "/" + Math.round(player.maxhealth), 16, 44)
        text(Math.round(player.xp) + "/" + Math.round(limit) + " xp", 205, 58);

        let k = ranks[index]
        textSize(21);
        text("Level : " + lvl, 200, 48);
        textSize(16);
        text(player.name + " the " + k, 14, 75);

        //Feed
        textSize(13);
        let x = (windowWidth / 11) * 7
        let y = 30
        let y1 = 150

        for (let i = feed.length; i >= feed.length - 7; i--) {
            if (feed[i]) {
                text(feed[i], x, y)
                y = y + 15
            }
        }
        //Story Feed
        noStroke()
        for (let i = storyFeed.length; i >= 0; i--) {
            fill(0, 128, 0)
            text(storyFeed[i], x, y1)
            y1 = y1 + 15
        }


        //Equiped weapon
        stroke(0)
        fill(0)
        textSize(12)
        text("Weapon equiped :", 15, 115)
        stroke(150)
        strokeWeight(3)
        fill(250)
        rect(15, 120, 180, 60, 5)
        rare = weaponRarity(weapon.rarity)
        fill(rare[1], rare[2], rare[3])
        stroke(0)
        strokeWeight(4)
        textSize(40)
        text(rare[0], 24, 160)
        //Weapon Stats
        strokeWeight(1)
        fill(0)
        textSize(12)
        text("Name : " + weapon.name, 60, 140)
        text("Damage : " + weapon.dmg, 60, 156)
        text("Protection : " + shield.prot, 60, 172)
        //Player damage
        text("Player damage : " + Math.round(player.dmg), 15, 200)

        if (indez <= 1) {

            butto.position(17, 543);
            butto.mousePressed(startStory);
        }
        //Cooldown squares
        textSize(16)
        noStroke()
        fill(85)
        rect(17, 217, 113, 38)
        rect(17, 264, 97, 38)
        fill(0)

        text("Attack", 43, 289)
        text("Continue", 40, 242)
        //Player


        //fill(pred, 0, pGotHit)
        tint(pred, 0, 0)
        image(sprite,px,ey, sprite.width * 2, sprite.height * 2)
        //rect(px, ey, 100, 74)
        if (active == true) {
            px = arr[count]
        }
        //Enemy
        if (enemy.dmg > 0) {
            let ehealth = (enemy.health / enemy.maxhealth) * 100
            stroke(0)
            fill(220)
            rect(ex, ey - 12, 100, 4, 5)
            fill(0, 125, 0)
            rect(ex, ey - 12, ehealth, 4, 5)
            tint(ered, 0, 0)
            //fill(ered, enGotHit, 0)
            image(enemySprite,ex,ey, enemySprite.width * 2, enemySprite.height * 2)
            //rect(ex, ey, 100, 74)
        }
        if (activeProj == true) {
            projx = for2[countm]
        }
        fill(0)
        rect(projx, ey + 20, 10, 3)

        //Enemy hit
        if (indez > 0) {
            damageP()
        }
    }


    //You lost
    if (accept == 3) {
        background(255)
        text("You died,try again by reloading the page!", 580, 200)
    }
}
