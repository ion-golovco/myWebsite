//setup
let attackSpeed = 0;
let button;
let name;
let butto;
let fightB;
//hits (up to 5)
let hits = 0;
//Story progresion
let storyP = 0;
//Start neccesary amount of xp to level up
let limit = 60;
//Start amount of hp
let hp = 100;
//How fast health regenerates
let inc = 0.07;
//Player name
let pName;
//Player
let player;
//test
let index = 0;
let indez = 0;
//Xp from killing enemies
let reward = 0;
//test
let weapon = new Weapon(0, 6, "Branch");
let enemy = new enemyDead();
let shield = new Shield(0);
//Key for game
let accept = 0;
//Race
let race = randomRace();
//Feed
let feed = [];
let storyFeed = [
    ["____________________________________________________________________________"],
    ["I'ts an enemy"],
    ["You hear a creak trough the dense foliage."],
    ["you start your adventure by first going in the dark forest near your house."],
    ["With nothing left than a branch you found outside,"]
];
//Equiped weapon
let rare;
let slot;

let myFont;
let enemyKilled = 0;

let ex = 700;
let ey = 125;

let px = 400;

let count = 0;
let countm = 0;
let active;
let activeProj;

let projx;


let ered = 255;
let pred = 255;

let hit;
let hurt;

let for1 = []
let for2 = []
let arr = []
