const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, role, GitHub) {

    super(name, id, email, role)
    this.GitHub = GitHub;
    }

    getGitHub() {
    	return this.GitHub;
    }
    
    // defined in the super, not here
    // getrole()
    
}

// remember, the class constructor above is a
// sort of contract. you are saying that,
// to create a new engineer, a user must
// call new Engineer() with values like id, email, role, & github

// so this is wrong: const Engineer = new Engineer();
// and this is right:
const engineer = new Engineer("pablo",02,"pablo@yadda.com", "engineer","pablo42");
// it is best practice to name a class using an uppercase letter
// but when you INSTANTIATE that class, meaning when you take Engineer
// and create an instance of PABLO as an engineer, you don't have to 
// use uppercase for that variable.
// so "const engineer =" is expected, not "const Engineer =";

engineer.getGitHub()

// this SHOULD work because getrole() is inherited from
// the superclass, Employee
// that said, you'll need to fix your Employee class first.
// so i'm commenting this out. fix Employee, like I've fixed
// Engineer & Managar classes first.
// engineer.getrole()


//In addition to Employee's properties and methods, Engineer will also have:
// github  // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'
