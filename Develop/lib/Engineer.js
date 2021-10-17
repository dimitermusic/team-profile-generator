// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, employeeId, emailAddress, gitHub) {
        super(name, employeeId, emailAddress,);
        this.gitHub = gitHub
    }
}

module.exports = Engineer