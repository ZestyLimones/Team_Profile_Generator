const Manager = require('../lib/Manager');

describe('testing all aspects of manager constructor', () => {
  const name = 'Megan';
  const id = 96315;
  const email = 'mbrown@mycompanyemail.com';
  const officeNumber = '9705559999';
  const role = 'Manager';

  const megan = new Manager(name, id, email, officeNumber);

  it('confirm employee has an office number', () => {
    expect(megan.officeNumber).toEqual(officeNumber);
  });
  it('confirm office number method works', () => {
    expect(megan.getOfficeNumber()).toEqual(officeNumber);
  });
  it('confirm get role method works', () => {
    expect(megan.getRole()).toEqual(role);
  });
});
