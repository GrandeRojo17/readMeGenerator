// require("dotenv").config();
const fs = require("fs");
const path = require("path");
const util = require("util");
const api = require("./utils/apiCall");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);
// const readFileAsync = util.promisify(fs.readFile);

const questions = [
  {
    type: "input",
    name: "myName",
    message: `What is your name?`,
  },
  {
    type: "input",
    name: "username",
    message: `What is github account name?`,
  },

  {
    type: "input",
    name: "email",
    message: `What is your email address?`,
  },

  {
    type: "input",
    name: "title",
    message: `What is the title of the project?`,
  },

  {
    type: "input",
    name: "usage",
    message: `What is your use case for this app?`,
  },

  {
    type: "input",
    name: "description",
    message: `Write a short discription of the project.`,
  },

  {
    type: "input",
    name: "license",
    message: "What kind of license should your project have?",
  },

  {
    type: "input",
    name: "installation",
    message: "Install instructions?",
  },
  {
    type: "input",
    name: "tests",
    message: `What are some quick install tips?`,
  },

  {
    type: "input",
    name: "contributing",
    message: `Any other contributers?`,
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    api.getUser(answers.username).then(({ data }) => {
      console.log(data);
      writeToFile("README.md", generateMarkdown({ ...answers, ...data }));
      console.log("It works");
    });
  });
}
init();
