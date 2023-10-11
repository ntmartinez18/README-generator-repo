// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the app for?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the app?',
      },
    {
      type: 'input',
      name: 'usage',
      message: 'How is the app used?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please choose a license (e.g. MIT, ISC, MS-PL)',
    },
    {
    type: 'input',
    name: 'contributions',
    message: 'How can contributions be made?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Include tests',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
  ];

  const generateReadmeContent = (answers) => {
    console.log(answers)
    // generate readme content based on answers
    // return the generated content
   const { projectTitle, description, installation, usage, license, contributions, test, githubUsername, email } = answers;
   const readmeContent = `
# ${projectTitle}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Questions](#questions)


## Installation
${installation}

## Usage
${usage}

## License
This application is covered under the ${license} license.

## Contributions
${contributions}

## Tests
${test}

## Questions
For any questions or feedback, please reach out to me on GitHub or via email.
GitHub: [${githubUsername}](https://github.com/${githubUsername})
Email: ${email}
`;

  // Return the generated content
  return readmeContent;
  };
  inquirer
  .prompt(questions)
  .then((answers) => {
    const readmeContent = generateReadmeContent(answers);
    fs.writeFile('project README.md', readmeContent, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Successfully created readme!');
      }
    });
  });

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
