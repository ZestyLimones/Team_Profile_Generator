const Intern = require('../lib/Intern');

describe('isIntern', () => {
  it('employee is an intern', () => {
    const jason = new Intern('Jason', '96314', 'jthompson@mycompanyemail.com');
    expect(jason).toEqual(true);
  });
});
