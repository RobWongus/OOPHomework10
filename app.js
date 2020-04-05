const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");


const employees= [];

const managerQuestions = [
        {
            type: "input",
            name: "name",
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
            message: "What is your email address?"

        },
        
        {
            type: "input",
            name: "officeContact",
            message: "What is your office extnsion?"
        }

];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
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
        message: "What is your email address?"

    },
    
    {
        type: "input",
        name: "github",
        message: "What is your github?"
    }
];

const internQuestions = [
    {
        type: "input",
        name: "name",
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
        message: "What is your email address?"

    },
    
    {
        type: "input",
        name: "school",
        message: "What school do you attend?"
    }
];

const employeeType = {
    type: "input",
    choices: [
        "Manager", 
        "Engineer",
        "Intern",
        "none"
    ],
    message: "What team member would you like to add?",
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


function employeeAdd() {
    inquirer
      .prompt(managerQuestions)
      .then(function(answers) {
          const manager = new Manager(answers.name, answers.id, answers.email, answers.officeContact);
          employees.push(manager);
          console.log(manager);
          generateTeam();
      
      
  function generateTeam() {
      inquirer.prompt(employeeType).then(function(answers) {
           if(answers.employeeChoice === "Engineer", "engineer") {
              inquirer.prompt(engineerQuestions).then(function(answers){
              const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
              employees.push(engineer);
              console.log(engineer);
              generateTeam();
              });
                      
              } else if (answers.employeeChoice === "Intern", "intern"){
              inquirer.prompt(internQuestions).then(function(answers){
              const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
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