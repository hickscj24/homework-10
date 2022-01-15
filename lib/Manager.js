const Employee = require('./Employee');

class Manager extends Employee {

    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.employees = [];
    }

    getrole(){
        return 'Manager'
    };

    getOfficeNumber(){
        return this.officeNumber;
    }
   
    getHTML() {
            return `
            <p>email: <a href = "mailto: ${this.email}">${this.email}</a></p>
            <p>name: ${this.name}</p>
            <p>id: ${this.id}</p>
            <p>office number: ${this.officeNumber}</p>
            <p>role: ${this.getrole()}</p>
            `;
    }

};

module.exports = Manager;