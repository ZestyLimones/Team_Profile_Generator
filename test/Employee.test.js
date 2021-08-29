const Employee = require('../lib/Employee');

describe('employee', () => {
  const john = new Employee('John', '96312', 'jsmith@mycompanyemail.com');

  it('confirm employee has a name', () => {
    expect(john.name).toEqual('John');
  });

  it('confirm employee has an ID', () => {
    expect(john.id).toEqual('96312');
  });

  it('confirm employee has an email', () => {
    expect(john.email).toEqual('jsmith@mycompanyemail.com');
  });

  it('confirm get name method works', () => {
    expect(john.getName()).toEqual('John');
  });
  it('confim get id method works', () => {
    expect(john.getId()).toEqual('96312');
  });
  it('confirm get email method works', () => {
    expect(john.getEmail()).toEqual('jsmith@mycompanyemail.com');
  });
  it('confirm get role method works', () => {
    expect(john.getRole()).toEqual('Employee');
  });
});
