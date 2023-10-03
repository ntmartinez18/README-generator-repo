// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{ title, usage, description, install, issues, contributions }] =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${title}</h1>
      <p class="lead">I am from ${usage}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${description}</li>
        <li class="list-group-item">LinkedIn: ${install}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the app for?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'How is the app used?',
        },
        {
            type: 'input',
            name: 'install',
            message: 'How do you install the app?',
        },
        {
            type: 'input',
            name: 'issues',
            message: 'How can issues by reported?',
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'How can contributions be made?',
        },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
