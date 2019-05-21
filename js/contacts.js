/*open  line*/
console.log('Welcome to my contact manager !');
console.log(` 0 : Quit the program \n 1 : Create a new contact \n 2 : view your contact list \n 3 : Delete contact`); //list of commands
//
let power = 1; // used for start the program | if power = 0 program stop
let contactList = []; // create a list for content all contact
//
class deleteContact {
    constructor(choseContact = prompt(`Please Choose contact than you want delete !`)) {
        this.choseContact = choseContact;
    }
    getContactPlace() {
        return this.choseContact - 1;
    }
    verification(deletVerification = prompt(`Please confirm delete contact (enter "yes")`)) {
        this.deletVerification = deletVerification;
        if (deletVerification !== "yes") {
            return false;
        } else {
            return true;
        }
    }
    deleteTheContact() {
        let delPlace = this.choseContact - 1;
        contactList.splice(delPlace, delPlace);
        }
}
//
class creatContact { // used for create one contact with 3 different information
    constructor(name = prompt("Enter the name !"), surname = prompt("Enter the surname !"), about = prompt("Enter optional info !")) {
        this.name = name; // get the name in command prompt
        this.surname = surname; // get the surname in command prompt
        this.about = about;// get the about in command prompt
    }
    describe() { // used for describe the contact
        return ` Name : ${this.name} | Surname : ${this.surname} | about : ${this.about}\n`;
    }
    getName() { // used for check if nothing is in name
        return (!!this.name);
    }
    getSurname() { // used for check if nothing is in surname
       return (!!this.surname);
    }
}
//
while (power === 1) { // if power = 0 program stop
    const ask = prompt("What's you will do ?");
    if (ask === "0") {// put 0 in command prompt = quit the program
        console.log("Good Bye !");
        power = 0; // stop the program
    } else if (ask === "1") {// put 1 in command prompt = create contact
        const contact = new creatContact(); // construct contact
        Contact = contact.describe(); // get contact info
        if (contact.getName() && contact.getSurname()) { // used for check if nothing is in name and surname
            contactList.push(Contact); // add contact to contactList
            console.log("The contact have been added"); // message destined to user
        }
        else {
            console.log(`The contact haven't been added `); // message destined to user
        }
    } else if (ask === "2") {
        console.log(`Here is your contact list ! (you have ${contactList.length} contact)`); // message destined to user with number of contact
        for (let i = 0; i < contactList.length; i++) { //
            contactPosition = i;
            console.log(`${contactPosition + 1}` + contactList[i]);
        }
    }
    else if (ask === "3") {
        console.log(`Here is your contact list ! Which contact you need to delete `);
        for (let i = 0; i < contactList.length; i++) { //
            contactPosition = i;
            console.log(`${contactPosition + 1}` + contactList[i]);
        }
        const deleteOneContact = new deleteContact();
        let place = deleteOneContact.getContactPlace() + 1;
        deleteOneContact.getContactPlace();
        if (deleteOneContact.verification() === true) {
            deleteOneContact.deleteTheContact();
            console.log(`The contact ${place} has been deleted !`);
        }
        else {
            console.log(`You was rejected the request !`);
        }
    }
}
