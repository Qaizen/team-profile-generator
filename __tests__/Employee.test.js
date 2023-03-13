const Employee = require ('../lib/Employee');

test ('Does this create employee object', () => {
    const emp = new Employee();

    expect(typeof(emp)).toBe('object');
});

test ('Create an employee name, id, and email', () => {
    const employee = new Employee("Donnie", 1, "test@test.com");

    expect(employee.name).toBe('Donnie');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('test@test.com');
    expect(employee.getName()).toBe('Donnie'); 

    expect(employee.getRole()).toBe('Employee');
})