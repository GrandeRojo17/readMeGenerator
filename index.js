const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);
// const readFileAsync = util.promisify(fs.readFile);
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    { type: "input", name: "location", message: "Where are you from?" },
    { type: "number", name: "age", message: "How old are you?" },
    { type: "input", name: "github", message: "Enter your Github UserName" },
  ]);
}
function generateHTML(answers) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${answers.name}'s Personal Page</title>
    </head>
    <body>
    <h1>Welcome ${answers.name}!</h1>
    <p> It is my understanding that you are ${answers.age} years old and that you are from ${answers.location} </p>
        
    </body>
    </html>`;
}
promptUser()
  .then((answers) => {
    const html = generateHTML(answers);
    return writeFileAsync("index.html", html);
  })
  .then(() => {
    console.log("successfully wrote ato index.html");
  })
  .catch((err) => {
    console.error(err);
  });
