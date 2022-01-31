// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [

    
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
            message: 'What are the steps required to install your project?',
            validate: installInput => {
                if (installInput) {
                    return true;
                } 
                else {
                    console.log('Please enter your installation instructions');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter your use examples');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license to use for this project',
            choices: ['MIT', 'ISC', 'GNU GPLv3', 'None']
        },
        {
            type: 'confirm',
            name: 'confirmContributers',
            message: 'Allow other contributors?',
            default: true
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide contributing information.',
            when: ({ confirmContributers }) => {
                if (confirmContributers) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: contributerInput => {
                if (contributerInput) {
                    return true;
                } else {
                    console.log('Please enter contributer guidelines');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide instructions for testing.',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter your use test instructions');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Provide your github username.',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide your Email address for questions.',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                    return false;
                }
            }
        }
    ]

// TODO: Create a function to write README file
const writetoFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generated-files/generated-readme.md', fileContent, err => {
            if (err) {
             return console.log(err);
            }
            console.log('The markdown file has been created')
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    });
}

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMarkdown => {
    return writetoFile(pageMarkdown);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
});;

