const Employee = require('../lib/Employee');

describe('create Employee object',()=>{
    const employee = new Employee('Daniel',1,'danielgregoire34@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

describe('create Employee name',()=>{
    const employee = new Employee('Daniel',1,'danielgregoire34@gmail.com');
    expect(employee.Name()).toEqual(expect.any(String));
})

describe('create Employee ID',()=>{
    const employee = new Employee('Daniel',1,'danielgregoire34@gmail.com');
    expect(employee.ID()).toEqual(expect.any(Number));
})

describe('create Employee email',()=>{
    const employee = new Employee('Daniel',1,'danielgregoire34@gmail.com');
    expect(employee.Email()).toEqual(expect.any(String));
})


describe('create Employee role',()=>{
    const employee = new Employee('Daniel',1,'danielgregoire34@gmail.com');
    expect(employee.Role()).toEqual("Employee");
})

