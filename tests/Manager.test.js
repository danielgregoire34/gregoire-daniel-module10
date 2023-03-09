const Manager = require('../lib/Manager');

describe('create Manager object',()=>{
    const manager = new Manager('Daniel',1,'danielgregoire34@gmail.com','34');
    expect(manager.officeNumber).toEqual(expect.any(String));
})

describe('create Manager office number',()=>{
    const manager = new Manager('Daniel',1,'danielgregoire34@gmail.com','34');
    expect(manager.OfficeNumber()).toEqual(expect.any(Number));
})

describe('create Manager role',()=>{
    const manager = new Manager('Daniel',1,'danielgregoire34@gmail.com','34');
    expect(manager.Role()).toEqual("Manager");
})

