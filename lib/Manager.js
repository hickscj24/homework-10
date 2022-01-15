const Employee = require('./Employee');

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.workers = [];
    }

    getRole() {
        return 'Manager'
    };

    getOfficeNumber() {
        return this.officeNumber;
    }

    getHTML() {
        return super.getHTML() + `<p>office number: ${this.officeNumber}</p>
            `;
    }

};

module.exports = Manager;