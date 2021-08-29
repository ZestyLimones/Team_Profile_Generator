const Engineer = require('../lib/Engineer');

describe('isEngineer', () => {
  const steve = new Engineer(
    'Steve',
    '96313',
    'sjackson@mycompanyemail.com',
    'steveGithub'
  );
  it('confirm employee has a Github', () => {
    expect(steve.github).toEqual('steveGithub');
  });
  if (
    ('confirm get Github method works',
    () => {
      expect(steve.getRole()).toEqual('steveGithub');
    })
  );
  it('confirm get role method works', () => {
    expect(steve.getRole()).toEqual('Engineer');
  });
});
