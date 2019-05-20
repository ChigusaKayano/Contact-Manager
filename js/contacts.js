/*open  line*/
console.log(` 0 : Quit the program \n 1 : Create a new contact \n 2 : View actual contact`); //list of commands

let power = 1; // used for start the program | if power = 0 program stop


class creatContact { // used for create one contact with 3 different information
    constructor(name = prompt("Enter the name !"), surname = prompt("Enter the surname !"), about = prompt("Enter optional info !")) {
        this.name = name;
        this.surname = surname;
        this.about = about;
    }
    describe() { // used for describe the contact
        return ` Name : ${this.name}\n Surname : ${this.surname}\n about : ${this.about}`;
    }
}

//for (i = 0,  , ) {}

while (power === 1) { // if power = 0 program stop
    const ask = prompt("What's you will do ?");
    if (ask === "0") {// put 0 in command prompt = quit the program
        console.log("Good Bye !");
        power = 0; // stop the program
    } else if (ask === "1") {// put 1 in command prompt = create contact
        const contact = new creatContact(); // construct contact
        Contact = contact.describe(); // get contact info
    } else if (ask === "2") {
        console.log(Contact); // print contact info
    }}