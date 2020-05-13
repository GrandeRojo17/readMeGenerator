function generateMarkdown(data) {
  return ` # **${data.title}** 
  by ${data.name} a.k.a ${data.username}
  ![Licenses](https://img.shields.io/badge/license-${data.license}-blue.svg)
   
  ## **Description** 
   
  ${data.description}
  ## ***Table of Contents***
    * Installation
    * Usage
    * License
    * Contributing
    * Tests
    * Questions
  # **Installation**
   
  ### To install necessary dependencies, run the following command:
   ${data.installation}
  # **Usage**
  ${data.usage}
  # **License**
  ${data.license}
  ### This project is licensed under the ${data.license} license.
  # **Contributing** 
   ${data.contributers}
  # **Tests**  
  ### To run tests, run the following command:
  ${data.tests}
  # **Questions** 
  If you have any questions feel free to contact me at ${data.email} or at my github below.
  
  # **Username**  
  ${data.username}
  ![Github Username avatar](${data.avatar_url})
`;
}

module.exports = generateMarkdown;
