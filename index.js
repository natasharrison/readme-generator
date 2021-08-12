// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const readMe = require('./src/page-template.js');
const { writeFile } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your application:',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Enter the Github link to your project: '
    }, 
        {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username: '
    }, 
    {
        type: 'input', 
        name: 'screenshot', 
        message: 'Insert a link to a screenshot of your application:'
    }, 
    {
        type: 'confirm',
        name: 'confirmContents',
        message: 'Would you like to create a Table of Contents? This is recommended when you have a long ReadMe.',
        default: true
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Please enter your Table of Contents:',
        when: ({ confirmContents }) => (confirmContents)
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please write the steps for installation of your application: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use:'
    },
    {
        type: 'input', 
        name: 'collab', 
        message: 'If you had any collaborators, please include links to their GitHub profiles: ', 
    }, 
    {
        type: 'input', 
        name: 'creditsAssets',
        message: 'If you used any third-party assets, please include links to those resources and the name of the creator(s):'
    },
    {
        type: 'input', 
        name: 'license', 
        message: 'Please list the license for this application:'      
    }, 
    {
        type: 'input', 
        name: 'email', 
        message: 'What is your email address?'
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((
            responses
        ) => {
            const data = readMe(responses)
            writeFile("README.md", data)
        })
}

// Function call to initialize app
init();
