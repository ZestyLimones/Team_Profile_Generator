const Intern = require('../lib/Intern');

describe('isIntern', () => {
  const jason = new Intern(
    'Jason',
    '96314',
    'jthompson@mycompanyemail.com',
    'DU Bootcamp'
  );
  it('confirm employee has a school', () => {
    expect(jason.school).toEqual('DU Bootcamp');
  });
  it('confirm school method works', () => {
    expect(jason.getSchool()).toEqual('DU Bootcamp');
  });
  it('confirm get role method works', () => {
    expect(jason.getRole()).toEqual('Intern');
  });
});
