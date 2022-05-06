// TODO: Include packages needed for this application
// const createHTML = require("./src/createHTML");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const inquirer = require("inquirer");
const fs = require("fs");
const { workerData } = require("worker_threads");
// const generateMarkdown = require("./utils/generateMarkdown");

const teamSetup = () => {
  return inquirer.prompt([
    {
      type: "input",

      name: "managerName",

      message: "What is the team managers name?",
    },
    {
      type: "input",

      name: "managerID",

      message: "What is the team managers ID?",
    },
    {
      type: "input",

      name: "managerEmail",

      message: "What is the team managers email?",
    },
    {
      type: "input",

      name: "managerOfficeNumber",

      message: "What is your team managers office number?",
    },
    {
      type: "list",

      name: "teamMembers",

      message: "Would you like to add a team member?",
      choices: ["yes", "No"],
    },
  ])
  .then(function(data){
    console.log(data)
    addMember(data.teamMembers);
  });
  
};
teamSetup();



function addMember(wantedRole) {
  if (wantedRole === "yes") {
    inquirer.prompt([
      {
        type: "list",
        name: "role",
        message: "Please choose your employee's role",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then(function(users){
      console.log(users.role)
      var selectedMember = users.role
      if(selectedMember === 'Engineer'){
       const engineer = new WorkerType ("Engineer");
      }else{
        const intern = new WorkerType ("Intern");
      }
    });
  } else {
    console.log("finished!");
  }
  
}
class workerType {
  constructor(position) {
    this.position = position;
    this.id = id;
    this.email = email;
  }
  workerData(){
    const members = () => {
      return inquirer.prompt([
        {
          type: "input",
    
          name: "memberID",
    
          message: `what is the ${this.position} name?`
        }])
        .then(function(users){
          console.log(users)
        });
    }
  }}
  // let selectedMember = new WorkerType ('users.choices');
//   }
//   if(data.choices === "Engineer"){
//       createEngineer()
//   }else{
//       createIntern()
//   }
// }
// function createEngineer(){
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "newEngineer",
//             message: "what is your engineers name?",

//           },
//     ])
// }

// function writeToFile(data, fileName) {
//   const createReadMe = generateMarkdown(data);
//   fs.writeFile("./utils/createdReadMe.md", createReadMe, (err) =>
//     err ? console.log(err) : console.log("success!")
//   );
// }

// function init() {
//   inquirer.prompt(questions).then((data) => {
//     console.log(data);
//     addMember(data.teamMembers);

//     // writeToFile(data);
//   });
// }
