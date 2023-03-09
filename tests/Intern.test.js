const Intern = require('../lib/Intern');

describe('create Intern object',()=>{
    const intern = new Intern('Daniel',1,'danielgregoire34@gmail.com','UF');
    expect(intern.school).toEqual(expect.any(String));
})

describe('create Intern school',()=>{
    const intern = new Intern('Daniel',1,'danielgregoire34@gmail.com','UF');
    expect(intern.School()).toEqual(expect.any(String));
})

describe('create Engineer role',()=>{
    const intern = new Intern('Daniel',1,'danielgregoire34@gmail.com','UF');
    expect(intern.Role()).toEqual("Intern");
})

