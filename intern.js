const Employee = require ("./Employee");

class Intern extends Employee {
    constructor (name, id, email, role, school) {
    this.school = school;

    super(name, id, email, role);
}
getRole()

getSchool()
};

const Intern = new Intern();

Intern.getRole();

Intern.getSchool();




// In addition to Employee's properties and methods, Intern will also have: 
// school
// getSchool()
// getRole() // Overridden to return 'Intern'