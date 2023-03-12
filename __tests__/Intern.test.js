const Intern = require ('../lib/Intern');

test ('create an intern school and return of intern', () => {
    const intern = new Intern('Soph', 3, 'test3@test.com', 'UCF');

    expect(intern.school).toBe('UCF');
    expect(intern.getSchool()).toBe('UCF');  
    expect(intern.getRole()).toBe('Intern');
})

module.exports = Intern;