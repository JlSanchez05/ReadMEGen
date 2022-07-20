
function generateMarkdown(data) {
    
    let licenseOption = `${data.license}`;
    let licenseLink = '';

    if (licenseOption === 'Mozilla Public License 2.0') {
      licenseOption = 'MozillaPublicLicense2.0';
      licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
    };
    if (licenseOption === 'Apache License 2.0') {
      licenseOption = 'ApacheLicense2.0';
      licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
    };
    if (licenseOption === 'MIT License') {
      licenseOption = 'MITLicense';
      licenseLink = 'https://choosealicense.com/licenses/mit/';
    };
    if (licenseOption === 'Boost Software License 1.0') {
      licenseOption = 'BoostSoftwareLicense1.0';
      licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
    };
    if (licenseOption === 'The Unlicense') {
      licenseOption = 'TheUnlicense';
      licenseLink = 'https://choosealicense.com/licenses/unlicense/';
    };
  
  let markdownTemplate =
      
  `# ${data.title}
  ## Description
  ${data.description}
  ![badge](https://img.shields.io/badge/license-${licenseOption}-brightorange)
  You can access more badges and their purposes at [shields.io](https://shields.io)
  `;

  
  let tableOfContents =
  `## Table of Contents`;
    if (data.installation) {
      tableOfContents +=
        `
    * [Installation](#installation)`
    };
    if (data.instructions) {
      tableOfContents +=
        `
    * [Usage](#usage)`
    };
    if (data.contribution) {
      tableOfContents +=
        `
    * [Contribution](#contribution)`
    };
    if (data.testing) {
      tableOfContents +=
        `
    * [Testing](#testing)`
    };
  
    markdownTemplate += tableOfContents;
  
    markdownTemplate +=
      `
    * [Questions](#questions)`;
    markdownTemplate +=
      `
    * [License](#license)
      
      `;
  
    if (data.installation) {
      markdownTemplate +=
        `
  ## Installation
      
    _Follow these steps to properly install this application:_
    ${data.installation}`
    };
  
    if (data.instructions) {
      markdownTemplate +=
        `
        
  ## Usage
    _Instructions for use:_
    ${data.instructions}`
    };
  
 
    if (data.contribution) {
      markdownTemplate +=
        `
        
  ## Contribution
    _If you would like to contribute, please adhere to these guidelines:_
    ${data.contribution}`
    };
    
    markdownTemplate +=
      `
      
  ## License
        
    _This application has the ${data.license}._
        
    For more information please view the [license description](${licenseLink}).
    
    `;
    return markdownTemplate;
  }
  
  module.exports = generateMarkdown;


