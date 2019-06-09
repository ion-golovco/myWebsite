let races = ["human", "elf", "half-elf", "high human", "dragnborn"]
let ranks = [
    ["Adventurer"],
    ["Knight"],
    ["Corporal"],
    ["Marshal"],
    ["Grand Master"],
    ["Kirito"],
    ["Goku"], 
    ["God"],
    ["Veteran"],
    ["Truth"],
    ["Wtf dude"]]
let firstNames = ["Dan", "John", "Rat", "Maruta", "Mihai", "Delia", "Guta", "Yoda", "Johny", "Codrin", "Alex", "Nathanial", "Adam"]
let secondNames = ["Bendeac", "Brown", "Bond", "Rattler", "Darth", "Eminescu", "Jony", "Bradea", "Negru", "Branch", "Lambright"]
let weaponNames = ["Elucidator","Repulsar","Katana","Sword","Great Sword","Spear","Glass Sword","Ebony Sword","Alduin"]

function story() {
    let text = text2[storyP].reverse()
    for (let i in text) {
        storyFeed.push(text[i])
    }
}
let text1 = [
    ["You are a "], [" from the far away Kingdom of Versalia."],
    ["You lived with your fiance in a mansion close to the capital."],
    ["One nigth , while you were away form home, thiefs attacked and kidnaped your fiance."],
    ["When you found out you were really angry and decided to go look for her"],
    ["This is the path of vengence which you took."],
    ["This is the adventure of the hero that saved his love.This is your story."]
]
let text2 = [
    [
        ["With nothing left than a branch you found outside,"],
        ["you start your adventure by first going in the dark forest near your house."],
        ["You hear a creak trough the dense foliage."],
        ["I'ts an enemy"],
        ["____________________________________________________________________________"]
    ],
    [
        ["Walking just a bit south you find another enemy."],
        ["You try to sneak around him but he sees you and attacks."],
        ["____________________________________________________________________________"]
    ],
    [
        ["You find a map in his backpack"],
        ["While looking around you find a camp that is marked on the map."],
        ["You decide to attack."],
        ["____________________________________________________________________________"]
    ],
    [
        ["Is that all you've got kid ay?"],
        ["____________________________________________________________________________"]
    ],
    [
        ["Not so fast kiddo."],
        ["____________________________________________________________________________"]
    ],
    [
        ["We'll be avenged be sure ..."],
        ["____________________________________________________________________________"]
    ],
    [
        ["After clearing the camp and searching the captain you find a letter from a noble."],
        ["If you're reading this then good job  for getting this far."],
        //stuff
        ["____________________________________________________________________________"]
    ],
    [

        //more stuff
    ]
]