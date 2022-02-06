// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
    if (license === 'MIT') {
      licenseBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      return licenseBadge;
    } else if (license === 'GNU GPLv3') {
      licenseBadge = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      return licenseBadge;
    } else if (license === 'ISC') {
      licenseBadge = 'https://img.shields.io/badge/License-ISC-blue.svg';
      return licenseBadge;
    }else {
      return ' ';
    }  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT') {
    licenseLink = `https://choosealicense.com/licenses/mit/`;
    return licenseLink;
  } else if (license === 'GNU GPLv3') {
    licenseLink = `https://choosealicense.com/licenses/gpl-3.0/`;
    return licenseLink;
  } else if (license === 'ISC') {
    licenseLink = `https://choosealicense.com/licenses/isc/`;
    return licenseLink;
  }else {
    return ' ';
  }  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    * [License](#license)
      `;
    } else {
      return ' ';
    }
}


function renderContributingSection(confirmContributers, data) {
  if (!confirmContributers) {
    return `
  I will not be accepting help from contributors.
    `;
  } else {
    return `
  ${data}
    `;
  }
}

function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)
    Covered under the following license:
    ${renderLicenseLink(license)}
      `;
    } else {
      return '';
    }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## [Description](#table-of-contents)
  ${data.what}
  ${data.why}
  ${data.how}
  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseSection(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Installation](#table-of-contents)
  ${data.installation}
  ## [Usage](#table-of-contents)
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  ## [Contributing](#table-of-contents)
  
  ${renderContributingSection(data.confirmContributers, data.contribute)}
  ## [Tests](#table-of-contents)
  ${data.test}
  
  ## [Questions](#table-of-contents)
  Contact me:
  [GitHub](https://github.com/${data.githubUsername})
  
  [Email: ${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
