const util = require('util');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkDown');



const questions = [{
  type: 'input',
  name: 'title',
  message: 'What Is The Title Of The Repository? (Required)',
  //Adding validation if statements to make sure user
  // is properly entering info
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please Enter Repository Title!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'description',
  message: 'Enter Description Of The Repository (Required)',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please Enter A Description Of The Repository!');
      return false;
    }
  }
  },
{
  type: 'confirm',
  name: 'confirmInstallation',
  message: 'Is There An Installation Process?'
  },
{
  type: 'input',
  name: 'installation',
  message: 'Please List Installation Instructions',
  when: ({ confirmInstallation }) => {
    if (confirmInstallation) {
      return true;
    } else {
      return false;
    }
  }
},

{
  type: 'confirm',
  name: 'confirmContribution',
  message: 'May Other Developers Contribute To Your Repository?'
},
{
  type: 'input',
  name: 'contribution',
  message: 'Please Give instructions On How Other Developers May Contribute To Your Project',
  when: ({ confirmContribution }) => {
    if (confirmContribution) {
      return true;
    } else {
      return false;
    }
  }
},

{
  type: 'checkbox',
  name: 'license',
  message: 'Please Choose A License.',
  choices: [ 'Mozilla Public License 2.0',
    'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
    'The Unlicense'],
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please Select A License.');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'username',
  message: 'Enter GitHub Username (Required)',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please Enter Your GitHub Username.');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'email',
  message: 'What Is Your Email Address? (Required)',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please Enter Your Email.');
      return false;
    }
  }
},
]; 
