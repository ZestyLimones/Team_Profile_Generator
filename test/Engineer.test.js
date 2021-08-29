const Engineer = require('../lib/Engineer');

describe('isEngineer', () => {
  const steve = new Engineer(
    'Steve',
    '96313',
    'sjackson@mycompanyemail.com',
    'steveGithub'
  );
  it('employee is an engineer', () => {
    expect(steve.github).toEqual('steveGithub');
  });
});
