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
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Would you like to add an employee?',
        choices: ['Yes', 'No'],
        name: 'addMember',
      },
    ])
    .then((responses) => {
      if (responses.addMember === 'Yes') {
        promptTeamQuestions();
      } else {
        // generageHTML();
        console.log(team);
      }
    });
};

const promptTeamQuestions = () => {
  return inquirer
    .prompt([
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
        when: (responses) => {
          return responses.roles === 'Manager';
        },
        type: 'input',
        message: "Please enter the employee's office phone number.",
        name: 'officeNumber',
      },
      {
        when: (responses) => {
          return responses.roles === 'Engineer';
        },
        type: 'input',
        message: "Please enter the employee's Github username.",
        name: 'github',
      },
      {
        when: (responses) => {
          return responses.roles === 'Intern';
        },
        type: 'input',
        message: "Please enter the employee's school name.",
        name: 'school',
      },
    ])
    .then((responses) => {
      createTeam(responses);
      addTeamMembers();
    });
};

const createTeam = (responses) => {
  if (responses.roles === 'Manager') {
    let addEmployee = new Manager(
      responses.name,
      responses.id,
      responses.email,
      responses.officeNumber
    );
    team.push(addEmployee);
  } else if (responses.roles === 'Engineer') {
    let addEmployee = new Engineer(
      responses.name,
      responses.id,
      responses.email,
      responses.github
    );
    team.push(addEmployee);
  } else if (responses.roles === 'Intern') {
    let addEmployee = new Intern(
      responses.name,
      responses.id,
      responses.email,
      responses.school
    );
    team.push(addEmployee);
  }
};

const generageHTML = () => {
  //this is where the src file stuff goes
  fs.writeFileSync();
};

const init = () => {
  promptManagerQuestions().then((responses) => {
    generageHTML();
  });
};

init();
