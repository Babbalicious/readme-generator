// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path"); //allows me to run the program from anywhere
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What would you like to title your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Description?",
    name: "description",
  },
  {
    type: "input",
    message: "Installation Instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage information?",
    name: "usage",
  },
  {
    type: "input",
    message: "Contribution guidelines?",
    name: "contribution",
  },
  {
    type: "input",
    message: "Test instructions?",
    name: "test",
  },
  {
    type: "list",
    message: "What license would you like to use for your project?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message: "What is your Github Username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync((path.resolve(__dirname, 'readme', fileName)), data);
  console.log('README Created in readme directory!');
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((userAnswers) => {
    writeToFile("README.md", generateMarkdown({ ...userAnswers }));
  });
}

// Function call to initialize app
init();
