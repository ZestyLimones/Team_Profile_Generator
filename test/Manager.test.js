const Manager = require('../lib/Manager');

describe('isManager', () => {
  const megan = new Manager(
    'Megan',
    '96315',
    'mbrown@mycompanyemail.com',
    '9705559999'
  );
  it('confirm employee has an office number', () => {
    expect(megan.officeNumber).toEqual('9705559999');
  });
  it('confirm get role method works', () => {
    expect(megan.getRole()).toEqual('Manager');
  });
});
