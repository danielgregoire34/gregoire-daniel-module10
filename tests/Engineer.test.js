const Engineer = require('../lib/Engineer');

describe('create Engineer object',()=>{
    const engineer = new Engineer('Daniel',1,'danielgregoire34@gmail.com','danielgregoire34');
    expect(engineer.github).toEqual(expect.any(String));
})

describe('create Engineer github',()=>{
    const engineer = new Engineer('Daniel',1,'danielgregoire34@gmail.com','danielgregoire34');
    expect(engineer.Github()).toEqual(expect.any(String));
})

describe('create Engineer role',()=>{
    const engineer = new Engineer('Daniel',1,'danielgregoire34@gmail.com','danielgregoire34');
    expect(engineer.Role()).toEqual("Engineer");
})

