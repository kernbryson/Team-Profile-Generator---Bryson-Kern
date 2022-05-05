// TODO: Include packages needed for this application
// const createHTML = require("./src/createHTML");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const inquirer = require("inquirer");
const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
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
];
function addMember(wantedRole) {
  if (wantedRole === "yes") {
    inquirer.prompt([
      {
        type: "list",
        name: "role",
        message: "Please choose your employee's role",
        choices: ["Engineer", "Intern"],
      },
    ]);
  } else {
    console.log("finished!");
  }
  
}

// function writeToFile(data, fileName) {
//   const createReadMe = generateMarkdown(data);
//   fs.writeFile("./utils/createdReadMe.md", createReadMe, (err) =>
//     err ? console.log(err) : console.log("success!")
//   );
// }

function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    addMember(data.teamMembers);

    // writeToFile(data);
  });
}

init();
