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
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Would you like to add an employee?',
      choices: ['Yes', 'No'],
      name: 'addEmployee',
    },
    {
      type: 'list',
      message: "PLease select the employee's role.",
      choices: ['Manager', 'Engineer', 'Intern'],
      name: 'roles',
    },
    {
      type: 'input',
      message: "Please enter the employee's name.",
      name: 'name',
    },
    {
      type: 'input',
      message: "Please enter the employee's ID number.",
      name: 'id',
    },
    {
      type: 'input',
      message: "Please enter the employee's email address.",
      name: 'email',
    },
    {
      when: (position) => {
        return position.role === 'Manager';
      },
      type: 'input',
      message: "Please enter the employee's office phone number.",
      name: 'officeNumber',
    },
    {
      when: (position) => {
        return position.role === 'Engineer';
      },
      type: 'input',
      message: "Please enter the employee's Github username.",
      name: 'github',
    },
    {
      when: (position) => {
        return position.role === 'Intern';
      },
      type: 'input',
      message: "Please enter the employee's school name.",
      name: 'school',
    },
  ]);
};

const init = () => {
  promptManagerQuestions().then((responses) => {
    console.log(responses);
  });
};

init();
