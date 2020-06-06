<<<<<<< HEAD
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
=======
const inquirer = require("inquirer");
const fs = require("fs");
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
>>>>>>> ac6cae1bd14c14a4587eb275a9fc3f56cba35310
  },

  {
    type: "input",
    name: "email",
<<<<<<< HEAD
    message: `What is your email address?`,
=======
    message: "What is your email?",
>>>>>>> ac6cae1bd14c14a4587eb275a9fc3f56cba35310
  },

  {
    type: "input",
    name: "title",
<<<<<<< HEAD
    message: `What is the title of the project?`,
=======
    message: "What is title of this Project?",
>>>>>>> ac6cae1bd14c14a4587eb275a9fc3f56cba35310
  },

  {
    type: "input",
    name: "usage",
<<<<<<< HEAD
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
=======
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

function writeTheFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    // console.log(answers);
    api.getUser(answers.username).then(({ data }) => {
      writeTheFile("README.md", generateMarkdown({ ...answers, ...data }));
    });
    console.log("Your file has been created! -ENJOY");
  });
}

>>>>>>> ac6cae1bd14c14a4587eb275a9fc3f56cba35310
init();
