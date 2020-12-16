// game states
// win -player robot has defeated all enemy robots
// * fight all enemy robots
// * Defeat each enemy robot
// LOSE - Player robot's health is zero or less.


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
if (playerHealth > 0){
    console.log ("Your robot is still alive!");
}
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemeyHealth = 50;
var enemyAttack = 12;


console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
console.log(enemyNames[i]);
console.log(i);
console.log(enemyNames[i] + " is at " + i + " index");
}






var fight = function(enemyName) {
    // alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    // subtract the value of playerAttack from value of enemyHealth and use that result to update the value in the enemyHealth var.
    var promptFight = window.prompt(" Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );
    
    // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
     
    enemyHealth = enemeyHealth - playerAttack;
    // log a resulting message to the console so we know that it worked.
    console.log (
        playerName + " attacked " + enemyName + ". " + enemyName+ " now has " +enemyHealth + " health remaining."
        );
    
        if (enemyHealth <=0){
            window.alert (enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

    // subtract the value of enemyAttack from value of playerHealth and use that result to update the value in the playerHealth var.
    playerHealth = playerHealth - enemyAttack;
    // log a resulting message to the console so we know that it worked.
    console.log (
        enemyName + " attacked " + playerName + ". " + playerName+ " now has " + playerHealth + " health remaining."
        );

    if(playerHealth <=0) {
        window.alert(playerName + " has died!");
    }else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if players choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") { 
    // confirm player wants to skip
    var confirmSkip = window.confirm ("Are you sure you'd like to quit?");

    // if yes (true) , leave fight
    if (confirmSkip) {
        window.alert (playerName + "has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    //if no (false), ask question again by running fight() again.
    else {
        fight();
    }
    window.alert(playerName + " has chosesn to skip the fight!");
} else {
    window.alert("You need to choose a valid option. Try again!");
}
}
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}