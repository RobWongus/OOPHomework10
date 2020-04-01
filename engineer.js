const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, role, GitHub) {
    this.GitHub = GitHub;

    super(name, id, email, role)
    }

    getGitHub()
    getrole()
    
};

const Engineer = new Engineer();

Engineer.getGitHub()

Engineer.getrole()




//In addition to Employee's properties and methods, Engineer will also have:
// github  // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'