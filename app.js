const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

// here you are telling the app to open up htmlRenderer.js from
// within the ./lib directory.
// 1. your code has no lib directory. (i added one in this branch.)
// 2. your file is actually called "htmlrenderer", not "htmlRenderer". (i fixed this on this branch, too.)
// 3. all of your js files except for app.js, should be in the lib directory.
// 4. this means that you'll have to fix the imports above, too.
// So: const Manager = require("./lib/Manager"), for example.
//DONE!

//const render = require("./lib/htmlRenderer"); DONE![i]

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//const manager = new Manager("Khadijah","88",'Khadijah@yahoo.com', "x1212","manager");
//console.log(manager);

//const engineer = new Engineer("Maxine", "91", "MaxPower@yahoo.com", "MaxineShaw", "engineer");
//console.log(engineer);

//const intern = new Intern ("Synclaire", "10", "Synclaire@yahoo.com", "Coppin University", "intern");


inquirer
    .prompt([
        {
            type: "input",
            name: "name ",
            message: "What is your name?"
        },
        
        {
            type: "input",
            name: "id",
            message: "What is your id number?"
            
        },

        {
            type: "input",
            name: "email",
            message: "WHat is youe email address?"

        },
        
        {
            type: "list",
            name: "contact",
            message: "What is your role?",
            choices: [
              "Manager",
              "Engineer",
              "Intern"
            ]
          }
// console.log(nadine.school)
// console.log(nadine.school)
// console.log(nadine.getschool())



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

render([manager, engineer, intern])

fs.appendFile("././team.html", process.argv[2] + '\n', function(error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("You fucked up!");
    }
});


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
