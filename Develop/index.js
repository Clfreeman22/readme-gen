// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    if (!projectData.projects) {
        projectData.projects = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log('Please enter the title to continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a product description.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log('Please enter the description to continue.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license to use for this project',
            choices: ['MIT', 'ISC', 'GNU GPLv3']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide contributing information.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide instructions for testing.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Provide your github username.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide your Email address for questions.'
        }
    ])
    .then(readmeData => {
        projectData.projects.push(readmeData);
        return readmeData;
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

