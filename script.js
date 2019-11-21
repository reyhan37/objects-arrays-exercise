const characters = [
    {
        name: "alpha",
        HP: 28
    },

    {
        name: "beta",
        HP: 24
    },

    {
        name: "gamma",
        HP: 20
    }
];

const opponent = {
    name: "enemy",
    HP: 40
}

// for (let i=0; i < characters.length; i++) {
//     console.log(`${characters[i].name}, ${characters[i].HP}`);


// }

while (characters[0].HP > 0 && characters[1].HP > 0 && characters[2].HP > 0 && opponent.HP > 0) {
    var selectYourChar = prompt("Who will attack? \n1 for " + characters[0].name + " HP: " + characters[0].HP + ", \n2 for " + characters[1].name + " HP: " + characters[1].HP + ", \n3 for " + characters[2].name + " HP: " + characters[2].HP + ". \n " + opponent.name + " has " + opponent.HP + " HP.");

    console.log(characters[0].name, characters[0].HP, '\n', characters[1].name, characters[1].HP, '\n', characters[2].name, characters[2].HP, '\n', opponent.name, opponent.HP);

    if (selectYourChar == 1) {
        characters[0].HP -= (Math.floor(Math.random() * 5) + 1)
        opponent.HP -= (Math.floor(Math.random() * 5) + 1)

        alert(characters[0].name + " and the enemy traded blows!");
        console.log(characters[0].name + " and the enemy traded blows!");
    } else if (selectYourChar == 2) {
        characters[1].HP -= (Math.floor(Math.random() * 5) + 1)
        opponent.HP -= (Math.floor(Math.random() * 5) + 1)

        alert(characters[1].name + " and the enemy traded blows!");
        console.log(characters[1].name + " and the enemy traded blows!");
    } else if (selectYourChar == 3) {
        characters[2].HP -= (Math.floor(Math.random() * 5) + 1)
        opponent.HP -= (Math.floor(Math.random() * 5) + 1)

        alert(characters[2].name + " and the enemy traded blows!");
        console.log(characters[2].name + " and the enemy traded blows!");
    } else if (selectYourChar == null) {
        alert("bruh");
        break;
    } else {
        alert("Invalid input!")
    }
}

if (characters[0].HP <= 0 || characters[1].HP <= 0 || characters[2].HP <= 0) {
    alert("One of your characters died.")
    alert("GAME OVER")
    console.log(characters[0].name, characters[0].HP, '\n', characters[1].name, characters[1].HP, '\n', characters[2].name, characters[2].HP, '\n', opponent.name, opponent.HP);
    console.log("One of your characters died. \nGAME OVER!")
} else if (opponent.HP <= 0) {
    alert("The opponent has been defeated.");
    alert("YOU WIN!");
    console.log(characters[0].name, characters[0].HP, '\n', characters[1].name, characters[1].HP, '\n', characters[2].name, characters[2].HP, '\n', opponent.name, opponent.HP);
    console.log("The opponent has been defeated. \nYOU WIN!");
}