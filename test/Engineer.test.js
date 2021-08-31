const Engineer = require('../lib/Engineer');

describe('testing all aspects of engineer constructor', () => {
  const name = 'Steve';
  const id = 96313;
  const email = 'sjackson@mycompanyemail.com';
  const github = 'steveGithub';
  const role = 'Engineer';

  const steve = new Engineer(name, id, email, github);

  it('confirm employee has a Github', () => {
    expect(steve.github).toEqual(github);
  });
  it('confirm get Github method works', () => {
    expect(steve.getGithub()).toEqual(github);
  });

  it('confirm get role method works', () => {
    expect(steve.getRole()).toEqual(role);
  });
});
