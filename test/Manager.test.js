const Manager = require('../lib/Manager');

describe('isManager', () => {
  it('employee is an manager', () => {
    const megan = new Manager('Megan', '96315', 'mbrown@mycompanyemail.com');
    expect(megan).toEqual(true);
  });
});
