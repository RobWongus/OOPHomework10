const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
    this.officeNumber = officeNumber;

    super(name, id, email, role);
    
    }
    getRole()
    
};

const Manager = new Manager();

Manager.getrole()
