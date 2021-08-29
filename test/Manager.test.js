const Manager = require('../lib/Manager');

describe('isManager', () => {
  const megan = new Manager(
    'Megan',
    '96315',
    'mbrown@mycompanyemail.com',
    '9705559999'
  );
  it('employee is an manager', () => {
    expect(megan.officeNumber).toEqual('9705559999');
  });
});
