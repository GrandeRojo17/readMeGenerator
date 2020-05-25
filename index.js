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
    name: "name",
    message: `What is your name?`,
  },
  {
    type: "input",
    name: "contributing",
    message: `Any other contributers?`,
  },
];

// function promptUser() {
//   return inquirer.prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is your name?",
//     },
//     { type: "input", name: "location", message: "Where are you from?" },
//     { type: "number", name: "age", message: "How old are you?" },
//     { type: "input", name: "github", message: "Enter your Github UserName" },
//   ]);
// }

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// promptUser()
//   .then((answers) => {
//     const html = generateHTML(answers);
//     return writeFileAsync("index.html", html);
//   })
//   .then(() => {
//     console.log("successfully wrote to index.html");
//   })
//   .catch((err) => {
//     console.error(err);
//   });
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
