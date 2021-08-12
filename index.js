// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readMe = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'app',
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
        name: 'installation',
        message: 'Please write the steps for installation of your application: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use:'
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this application with? (check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node', 'React', 'Other']
    },
    {
        type: 'input', 
        name: 'creditsCollaborators', 
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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        // if there's an error, reject the Promise and sent the error to the Promise's `.catch()` method
        if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
        }

        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        return({
            ok: true,
            message: 'File created!'
        });
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((
            responses
        ) => {
            const data = readMe(responses);

            writeToFile("README.md", data)
        })
}

// Function call to initialize app
init();