const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email)
   
    this.github = github;

    
    
    }

    getGithub() {
        return this.github;
    }
    
    getRole() {
        return "Engineer";
    }

    

};

//In addition to Employee's properties and methods, Engineer will also have:
// github  // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'
module.exports = Engineer