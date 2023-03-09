const Employee = require('./Employee');


class Manager extends Employee{
    constructor(name,id, email ,officeNumber) {
        super(name,id,email,officeNumber);
        this.employeeRole = this.employeeRole;
    }
    officeNumber(){
        return this.employeeRole;
    }
    
    Role(){
        return "Manager";
    }
}

module.exports = Manager;