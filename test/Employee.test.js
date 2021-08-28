const Employee = require('../lib/Employee');

describe('employee', () => {
  it('if entered correctly, get an employee', () => {
    const john = new Employee('John', '96385', 'jsmith@myemail.com');
    console.log(john);
  });
});
