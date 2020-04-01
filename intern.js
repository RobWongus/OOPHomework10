const Employee = require ("./Employee");

class Intern extends Employee {
    constructor (name, id, email, role, School) {
    this.School = School;

    super(name, id, email, role);
}
getrole()

getSchool()
};

const Intern = new Intern();

Intern.getrole();

Intern.getSchool();




// In addition to Employee's properties and methods, Intern will also have: 
// school
// getSchool()
// getRole() // Overridden to return 'Intern'