const Employee = require('../lib/Employee');

describe('testing all aspects of employee constructor', () => {
  const name = 'John';
  const id = 96312;
  const email = 'jsmith@mycompanyemail.com';
  const role = 'Employee';

  const john = new Employee(name, id, email);

  it('confirm employee has a name', () => {
    expect(john.name).toEqual(name);
  });

  it('confirm employee has an ID', () => {
    expect(john.id).toEqual(id);
  });

  it('confirm employee has an email', () => {
    expect(john.email).toEqual(email);
  });

  it('confirm get name method works', () => {
    expect(john.getName()).toEqual(name);
  });
  it('confim get id method works', () => {
    expect(john.getId()).toEqual(id);
  });
  it('confirm get email method works', () => {
    expect(john.getEmail()).toEqual(email);
  });
  it('confirm get role method works', () => {
    expect(john.getRole()).toEqual(role);
  });
});
