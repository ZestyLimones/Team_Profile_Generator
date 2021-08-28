const Engineer = require('../lib/Engineer');

describe('isEngineer', () => {
  it('employee is an engineer', () => {
    const steve = new Engineer('Steve', '96313', 'sjackson@mycompanyemail.com');
    expect(steve).toEqual(true);
  });
});
