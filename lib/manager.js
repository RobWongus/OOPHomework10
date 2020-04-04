const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    super(name, id, email);
      //super.Employee(name, id, email, role);
    // super has to be called before you
    // assign this.officeNumber; same rule applies
    // to all classes DONE!
    
    this.officeNumber = officeNumber;

    this.role = "Manager"; 

    }
    
    getOfficeNumber() {
       return this.officeNumber;
       // for demo purposes only.
       // we will know that this app is working when,
       // after running `node app.js`
       // you see a console message: "the manager's office extension is x1212."
       //console.log(`the manager's office extension is ${this.officeNumber}.`);
       //DONE!
    }
    
    // getRole is defined in the superclass, Employee.
    // it shouldn't be defined here.
    getRole() {
       return this.role;
       // do something here,
       // like return this.role;
       // here i am logging the role, just to demonstrate
       //console.log(this.role);
       //DONE!
    }
    
}

// you have to provide arguments to your manager
// class here, values like her name, id, email . . . 



module.exports = Manager; 