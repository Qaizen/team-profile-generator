const Engineer = require ('../lib/Engineer');

test ('create an engineer gitHub and return of Manager', () => {
    const engineer = new Engineer('Jen', 2, 'test2@test.com', 'boba');

    expect(engineer.github).toBe('boba');
    expect(engineer.getGithub()).toBe('boba');  
    expect(engineer.getRole()).toBe('Engineer');
})