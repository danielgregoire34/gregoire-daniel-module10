const Employee = require('./Employee');


class Intern extends Employee{
    constructor(name,id, email ,school) {
        super(name,id,email,school);
        this.employeeRole = this.employeeRole;
    }
    officeNumber(){
        return this.employeeRole;
    }
    
    Role(){
        return "Intern";
    }
}

module.exports = Intern;