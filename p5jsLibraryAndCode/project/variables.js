//setup
let attackSpeed = 0
let button
let name 
let butto 
let fightB;
//hits (up to 5)
let hits = 0;
//Story progresion
let storyP = 0;
//Start neccesary amount of xp to level up
let limit = 60
//Start amount of hp
let hp = 100
//How fast health regenerates
let inc = 0.04
//Player name
let pName;
//Player
let player;
//test
let index = 0
let indez = 0
//Xp from killing enemies
let reward = 0
//test
let weapon = new Weapon(0, 6, "Branch")
let enemy = new Enemy(3, randomName())
//Key for game
let accept = 0
//Race
let race = randomRace()
//Feed
let feed = []
let storyFeed = []
//Equiped weapon
let rare
let slot

let myFont
let enemyKilled = 0