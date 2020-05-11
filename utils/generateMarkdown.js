function generateMarkdown(data) {
  return `
# PROJECT: ${data.title}
## By: ${data.name} @ ${data.email} @GHUB: ${data.github}

#### Description: <p>${data.description}</p>
#License : ${data.license}

<h2>Table of Contents</h2>

*[Installation]('#installation')
* Usage

* License
* Contributing
* Tests
* Questions


<h4>Installation </h4>
To install necessary dependencies, run the following command:

${data.installationInfo}
<h4>Usage</h4>

${data.usage}
<h4>License</h4>

${data.license}
<h4>Contributing</h4>

${data.contributing}

<h4>Tests</h4>

To run tests you need to clone the material and then run the file name through the terminal.
<h3>Questions</h3>

![Alt text](./DavidLogo_01.png "My personality")
- (What questions should we be asking?)
if you have any questions about the repo, open an issue or contact 
![${data.email}] (mailto:david.yennerell@gmail.com ${data.email} "personal Email")] directly. Send any ideas my way.
`;
}

module.exports = generateMarkdown;
