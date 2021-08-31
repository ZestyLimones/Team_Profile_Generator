const Intern = require('../lib/Intern');

describe('testing all aspects of intern constructor', () => {
  const name = 'Jason';
  const id = 96314;
  const email = 'jthompson@mycompanyemail.com';
  const school = 'DU Bootcamp';
  const role = 'Intern';

  const jason = new Intern(name, id, email, school, role);
  it('confirm employee has a school', () => {
    expect(jason.school).toEqual(school);
  });
  it('confirm school method works', () => {
    expect(jason.getSchool()).toEqual(school);
  });
  it('confirm get role method works', () => {
    expect(jason.getRole()).toEqual(role);
  });
});
