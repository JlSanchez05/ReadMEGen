
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
      
  `#Title
   ${data.title}

  ## Description
  ${data.description}

  ## Contribution
  ${data.contribution}

  ## Installation
  ${data.installation}

   ## Email
   ${data.email}

    ## GitHub UserName
  ${data.username}

 

  ![badge](https://img.shields.io/badge/license-${licenseOption}-brightorange)
  You Can Access More Badges And Their Purposes At [shields.io](https://shields.io)
  `;


    return markdownTemplate;
  }
  
  module.exports = generateMarkdown;


