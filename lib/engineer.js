const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, role, GitHub, GitHubUsername) {
    super(name, id, email, role)
    this.GitHub = GitHub;
    this.GitHubUserName = GitHubUsername;

    
    }
    
    getrole() {
        return this.role;
    }

    getGitHub() {
        return this.GitHub;
    }
   
    getGitHubUsername() {
        return this.GitHubUsername;

    }
    

    
};




//In addition to Employee's properties and methods, Engineer will also have:
// github  // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'
module.exports = Engineer