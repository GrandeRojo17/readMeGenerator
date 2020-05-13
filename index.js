var inquirer = require("inquirer");
var fs = require("fs");
const path = require("path");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "username",
    message: "What is your github Username?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },

  {
    type: "input",
    name: "title",
    message: "What is title of this Project?",
  },

  {
    type: "input",
    name: "usage",
    message: "What is the use of this Project?",
  },
  {
    type: "input",
    name: "license",
    message: "What is the license used for on this Project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a brief description of this Project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Write some installation requirements if any.",
  },
  {
    type: "input",
    name: "contributers",
    message: "Any other contributers? If so write their usernames here.",
  },
  {
    type: "input",
    name: "tests",
    message: "How do you test it?",
  },
];

// function writeToFile(questions, data) {
//   questions = [{ type: "input", name: "name", message: "What is your name?" }];
// }
function writeTheFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// inquirer.prompt(prompts).ui.process.subscribe(onEachAnswer, onError, onComplete);
function init() {
  inquirer.prompt(questions).then((answers) => {
    api.getUser(answers.username).then(({ data }) => {
      writeTheFile(
        "README.md",
        generateMarkdown({ ...answers, ...JSON.stringify(data) })
      );
    });
  });
}

init();

// .catch((error) => {
//   if (error.isTtyError) {
//     // Prompt couldn't be rendered in the current environment
//   } else {
//     // Something else when wrong
//   }
// });
