const Intern = require('../lib/Intern');

describe('isIntern', () => {
  const jason = new Intern(
    'Jason',
    '96314',
    'jthompson@mycompanyemail.com',
    'DU Bootcamp'
  );
  it('employee is an intern', () => {
    expect(jason.school).toEqual('DU Bootcamp');
  });
});
