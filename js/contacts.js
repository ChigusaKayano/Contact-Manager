/*open  line*/
console.log(` 0 : Quit the program \n 1 : Create a new contact \n 2 : View actual contact`); //list of commands

let power = 1;

while (power === 1) {
    const ask = prompt("What's you will do ?");
    switch (ask) {
        case "0":
            console.log("Good Bye !");
            power = 0;
            break;
        case "1":
            console.log("Create a new contact !");
            break;
        case "2":
            console.log("view contact !");
            break;
}}
