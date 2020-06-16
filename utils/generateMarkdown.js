function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  if (hours > 12) {
    var newnew = hours - 12;
    // return console.log(
    //   "The current time is: " + newnew + ":" + mins + ":" + secs
    return `${newnew} + ${mins} + ${secs}`;
  } else {
    return `${hours} + ${mins} + ${secs}`;
  }
}
var currentDate = printTime();

function generateMarkdown(data) {

  return ` # **${data.title}** 
  by ${data.myName} a.k.a ${data.username} on ${currentDate}
  ![Licenses](https://img.shields.io/badge/license-${data.license}-blue.svg)
   
  ## **Description** 
   
  ${data.description}
  ## ***Table of Contents***
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributing](#contributing)
    * [Tests](#Tests)
    * [Questions](#Questions)
  
  
  
    ## Installation
   
  ### To install necessary dependencies, run the following command:
   ${data.installation}
  # **Usage**
  ${data.usage}
  # **License**
  ${data.license}
  ### This project is licensed under the ${data.license} license.
  # **Contributing** 
   ${data.contributing}
  # **Tests**  
  ### To run tests, run the following command:
  \`\`\`
npm i
\`\`\`
  ${data.tests}
  # **Questions** 
  If you have any questions feel free to contact me at ${data.email} or at my github below.
  
  # **Username** 
  Created by 
  ${data.username}

  ![Github Username avatar]( ${data.avatar_url})`;
}

module.exports = generateMarkdown;
