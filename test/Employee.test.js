const Employee = require('../lib/Employee');

describe('employee', () => {
  const john = new Employee('John', '96312', 'jsmith@mycompanyemail.com');

  it('confirm employee has a name', () => {
    expect(john.name).toBe('John');
  });

  it('confirm employee has an ID', () => {
    expect(john.id).toBe('96312');
  });

  it('confirm employee has a name', () => {
    expect(john.email).toBe('jsmith@mycompanyemail.com');
  });
});
