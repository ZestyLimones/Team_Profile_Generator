const Employee = require('../lib/Employee');

describe('employee', () => {
  it('if entered correctly, get an employee', () => {
    const john = new Employee('John', '96312', 'jsmith@mycompanyemail.com');
    expect(john).toEqual(true);
});
