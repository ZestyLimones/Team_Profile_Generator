const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

const promptManagerQuestions = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        message: 'Please enter your name.',
        name: 'name',
      },
      {
        type: 'input',
        message: 'Please enter your ID number.',
        name: 'id',
      },
      {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Please enter your office phone number',
        name: 'officeNumber',
      },
    ])
    .then((responses) => {
      const manager = new Manager(
        responses.name,
        responses.id,
        responses.email,
        responses.officeNumber
      );
      team.push(manager);
      addTeamMembers();
    });
};

const addTeamMembers = () => {
  return;
};

const init = () => {
  promptManagerQuestions().then((responses) => {
    console.log(responses);
  });
};

init();
