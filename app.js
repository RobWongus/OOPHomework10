const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

// here you are telling the app to open up htmlRenderer.js from
// within the ./lib directory.
// 1. your code has no lib directory. (i added one in this branch.)
// 2. your file is actually called "htmlrenderer", not "htmlRenderer". (i fixed this on this branch, too.)
// 3. all of your js files except for app.js, should be in the lib directory.
// 4. this means that you'll have to fix the imports above, too.
// So: const Manager = require("./lib/Manager"), for example.
//DONE!

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//const manager = new Manager("Khadijah","88",'Khadijah@yahoo.com', "x1212","manager");
//console.log(manager);

//const engineer = new Engineer("Maxine", "91", "MaxPower@yahoo.com", "MaxineShaw", "engineer");
//console.log(engineer);

//const intern = new Intern ("Synclaire", "10", "Synclaire@yahoo.com", "Coppin University", "intern");
// console.log(nadine.school)
// console.log(nadine.school)
// console.log(nadine.getschool())

const employees= [];

const managerQuestions = [
        {
            type: "input",
            name: "manager name ",
            message: "What is your name?"
        },
        
        {
            type: "input",
            name: "manager id",
            message: "What is your id number?"
            
        },

        {
            type: "input",
            name: "email",
            message: "What is youe email address?"

        },
        
        {
            type: "list",
            name: "office number contact",
            message: "What is your office extnsion?"
        }

];

const engineerQuestions = [
    {
        type: "input",
        name: "engineer name ",
        message: "What is your name?"
    },
    
    {
        type: "input",
        name: "engineer id",
        message: "What is your id number?"
        
    },

    {
        type: "input",
        name: "email",
        message: "What is youe email address?"

    },
    
    {
        type: "list",
        name: "github",
        message: "What is your github?"
    }
];

const internQuestions = [
    {
        type: "input",
        name: "intern  name ",
        message: "What is your name?"
    },
    
    {
        type: "input",
        name: "intern id",
        message: "What is your id number?"
        
    },

    {
        type: "input",
        name: "email",
        message: "What is your email address?"

    },
    
    {
        type: "list",
        name: "office number contact",
        message: "What is your office extension?"
    }
];

const employeeType = {
    type: "list",
    choices: [
        "Manager", 
        "Engineer",
        "Intern",
        "Sorry, Hiring Freeze"
    ],
    message: "What team member would you like add.",
    name: "employeeChoice"
    
}



// .then function writeToHtml(){
//     fs.writeFileSync(outputPath, render(employees), "utf-8"),
//     function (err){
//         if (err){
//             throw err
//         }
//     };
//     console.log("Operation complete.  Your team is ready to be viewed!");
// }


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


//.then(function(data) {

//}



// render([manager, engineer, intern])

// fs.appendFile("././team.html", process.argv[2] + '\n', function(error) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("You fucked up!");
//     }
// });


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

function employeeAdd() {
    inquirer
      .prompt(managerQuestions)
      .then(function(answers) {
          const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
          employees.push(manager);
          console.log(manager);
          generateTeam();
      
      
  function generateTeam() {
      inquirer.prompt(employeeType).then(function(answers) {
           if(answers.employeeChoice === "Engineer") {
              inquirer.prompt(engineerQuestions).then(function(answers){
              const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
              employees.push(engineer);
              console.log(engineer);
              generateTeam();
              });
                      
              } else if (answers.employeeChoice === "Intern"){
              inquirer.prompt(internQuestions).then(function(answers){
              const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
              employees.push(intern);
              console.log(intern);
              generateTeam();
              });
  
                      
      } else {
               writeToHtml();
                   };
              });
          };
      });
  };
      
      employeeAdd();
      
      function writeToHtml(){
          fs.writeFileSync(outputPath, render(employees), "utf-8"),
          function (err){
              if (err){
                  throw err
              }
          };
          console.log("Maybe you did it.");
      }