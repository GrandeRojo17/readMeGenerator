function generateMarkdown(data) {
  return `
# **PROJECT**: **${data.title}**
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

${data.installation}
<h4>Usage</h4>

${data.usage}
<h4>License</h4>

${data.license}
<h4>Contributing</h4>

${data.contributing}

<h4>Tests</h4>
#1 Clone this repo and make sure the links match up the files.
#2 Run Node [fileName].js and follow the prompt.

<h3>Questions</h3>

![Licenses](https://img.shields.io/badge/license-${data.license}-blue.svg)

- (What questions should we be asking?)
If you have any questions about the repo, open an issue or contact 
![Github Username avatar](${data.avatar_url})
![${data.email}] (mailto:david.yennerell@gmail.com ${data.email} "personal Email")] directly. Send any ideas my way.
`;
}

module.exports = generateMarkdown;
