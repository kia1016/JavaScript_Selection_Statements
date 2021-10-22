console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1

// let favoritenumber = 8;

// var user = prompt("Input a number", "Example: 1");

// if (favoritenumber > user) {
//     console.log("Too low!")
//   }
// else if (favoritenumber < user) {
//     console.log("Too high!");
// }
// else {
//     console.log("Congratulations!")
// }

// Exercise 2

let userinput2 = "cake"
var response;
var topic = prompt ("Name your favorite cake", "Example: Pumpkin Spice").toLowerCase();
switch (topic) {
    case "vanilla":
        response = "Oh Vanilla, nice!";
        break;
    case "chocolate":
        response = "Chocolate is amazing!";
        break;
    case "yellow":
        response = "I love the cake batter!";
        break;
    case "strawberry":
        response = "Best with whipped cream and custard!";
        break;
    case "spice":
        response = "An all around favorite!";
        break;
    default:
        response = "This is a unique flavor!";

}
alert(response)