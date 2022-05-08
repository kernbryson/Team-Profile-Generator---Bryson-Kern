// TODO: Include packages needed for this application
// const createHTML = require("./src/createHTML");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const managerData = require("./lib/manager");
const engineerData = require("./lib/engineer");
const internData = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");
var selectedMember = "";
// const { workerData } = require("worker_threads");
// const generateMarkdown = require("./utils/generateMarkdown");

const teamSetup = () => {
  return inquirer
    .prompt([
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
    .then(function (data) {
      console.log(data);
      addMember(data.teamMembers);
      const saveManager = managerData(data);
    });
};
teamSetup();

function addMember(wantedRole) {
  if (wantedRole || choice.moreRoles === "yes") {
    inquirer
      .prompt([
        {
          type: "list",
          name: "role",
          message: "Please choose your employee's role",
          choices: ["Engineer", "Intern"],
        },
      ])
      .then(function (users) {
        console.log(users.role);
        selectedMember = users.role;
        if (selectedMember === "Engineer") {
          const engineer = new workerType("Engineer");
          engineer.workerData(selectedMember);
        } else {
          const intern = new workerType("Intern");
          intern.workerData(selectedMember);
        }
      });
  } else {
    console.log("finished!");
  }
}

class workerType {
  constructor(position) {
    this.position = position;
  }
  workerData(selectedMember) {
    return inquirer
      .prompt([
        {
          type: "input",

          name: "memberName",

          message: `what is the ${this.position}'s name?`,
        },
        {
          type: "input",

          name: "memberID",

          message: `what is the ${this.position}'s ID?`,
        },
        {
          type: "input",

          name: "memberEmail",

          message: `what is the ${this.position}'s email?`,
        },
      ])
      .then(function (users) {
        console.log(users);
        
        gatherSpecificRoleData(users, selectedMember);
      });
  }
}
function gatherSpecificRoleData(users, selectedMember) {
  if (selectedMember === "Intern") {
    return inquirer
      .prompt([
        {
          type: "input",

          name: "internSchool",

          message: `Where did the intern go to school?`,
        },
      ])
      .then(function (school) {
        console.log(school);
        const saveIntern = internData(users, selectedMember, school.internSchool);
        addAnotherRole();
      });
  } else {
    return inquirer
      .prompt([
        {
          type: "input",

          name: "engineerGitHub",

          message: `What is the engineers gitHub username?`,
        },
      ])
      .then(function (github) {
        console.log(github);
        const saveEngineer = engineerData(users, selectedMember, github.engineerGithub);
        addAnotherRole();
      });
  }
}
function addAnotherRole() {
  return inquirer
    .prompt([
      {
        type: "list",

        name: "moreRoles",

        message: `Do you want to add another employee?`,
        choices: ["Yes", "No"],
      },
    ])
    .then(function (choice) {
      console.log(choice);
      if (choice.moreRoles === "Yes") {
        addMember(choice.moreRoles);
      } else {
        console.log("finished creating team!");
      }
    });
}
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
