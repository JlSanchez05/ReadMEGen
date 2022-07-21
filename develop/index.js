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
  type: 'input',
  name: 'installation',
  message: 'Please List Installation Instructions',
 
},


{
  type: 'input',
  name: 'contribution',
  message: 'Please Give instructions On How Other Developers May Contribute To Your Project',
 
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

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, error => {
    if (error) {
      return console.log('Error Is Occuring ' + error);
    }
  })
}


const createReadMe = util.promisify(writeToFile);

async function createReadMeFile() {
  try {
    const userAnswers = await inquirer.prompt(questions);
    console.log('Data Is Being Proccessed', userAnswers);
    const myMarkdown = generateMarkdown(userAnswers);
    console.log(myMarkdown);
    await createReadMe('README2.md', myMarkdown);
    
  } catch (error) {
    console.log('Error ' + error);
  }
};

createReadMeFile()