/*open  line*/
console.log('Welcome to my contact manager !');
console.log(` 0 : Quit the program \n 1 : Create a new contact \n 2 : view your contact list`); //list of commands

let power = 1; // used for start the program | if power = 0 program stop
let contactList = []; // create a list for content all contact

class creatContact { // used for create one contact with 3 different information
    constructor(name = prompt("Enter the name !"), surname = prompt("Enter the surname !"), about = prompt("Enter optional info !")) {
        this.name = name;
        this.surname = surname;
        this.about = about;
    }
    describe() { // used for describe the contact
        return ` Name : ${this.name} | Surname : ${this.surname} | about : ${this.about}\n`;
    }
    getName() {
        return (!!this.name);
    }
    getSurname() {
       return (!!this.surname);
    }
}

while (power === 1) { // if power = 0 program stop
    const ask = prompt("What's you will do ?");
    if (ask === "0") {// put 0 in command prompt = quit the program
        console.log("Good Bye !");
        power = 0; // stop the program
    } else if (ask === "1") {// put 1 in command prompt = create contact
        const contact = new creatContact(); // construct contact
        Contact = contact.describe(); // get contact info
        if (contact.getName() === true && contact.getSurname() === true) {
            contactList.push(Contact);
            console.log("The contact have been added");
        }
        else {
            console.log(`The contact haven't been added `);
        }
    } else if (ask === "2") {
        console.log(`Here is your contact list ! (you have ${contactList.length} contact)`);
        for (let i = 0; i < contactList.length; i++) {
            console.log(contactList[i]);
        }
    }
}
