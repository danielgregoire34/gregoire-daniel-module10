const Employee = require('./Employee');


class Engineer extends Employee{
    constructor(name,id, email ,github) {
        super(name,id,email,github);
        this.employeeRole = this.employeeRole;
    }
    officeNumber(){
        return this.employeeRole;
    }
    
    Role(){
        return "Engineer";
    }
}

module.exports = Engineer;