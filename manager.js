const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
   
    // super has to be called before you
    // assign this.officeNumber; same rule applies
    // to all classes 
    super(name, id, email, role);
    this.officeNumber = officeNumber;

    }
    
    getOfficeNumber() {
       // for demo purposes only.
       // we will know that this app is working when,
       // after running `node app.js`
       // you see a console message: "the manager's office extension is x1212."
       console.log(`the manager's office extension is ${this.officeNumber}.`);
    }
    
    // getRole is defined in the superclass, Employee.
    // it shouldn't be defined here.
    /* getrole() {
       // do something here,
       // like return this.role;
       // here i am logging the role, just to demonstrate
       console.log(this.role);
    }
    */
}

// you have to provide arguments to your manager
// class here, values like her name, id, email . . . 
const manager = new Manager('jane',01,'jane@yadda.com',"manager","x1212");

manager.getOfficeNumber();
