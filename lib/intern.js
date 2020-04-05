const Employee = require ("./employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
    super(name, id, email);
    this.school = school;
    
    // super always comes before locally defined variables
    // this.School = School;
    // also "school" not "School"; school is not a class; it's a property of Intern    
    //DONE!
    
}
    getSchool() {
    return this.school;
}

    getRole() {
        return "Intern";
    }


};



// fix this; see my comments in Manager & Intern
// you are creating an empty Intern; can't do this
// also, the class is called Intern, but the instance
// of the class is called intern
// const intern = new Intern();DONE!

// fix getRole() in Emplyee class first
// intern.getrole(); DONE!

// this SHOULD work, but your intern isn't constructed properly
// so this is going to fail
// intern.getSchool(); DONE!




// In addition to Employee's properties and methods, Intern will also have: 
// school
// getSchool()
// getRole() // Overridden to return 'Intern'
module.exports = Intern