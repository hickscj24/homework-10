
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


    getName() {
        return this.name
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    }


    getRole() {

        return "Employee";
    }

    getHTML() {
        return `
        <p>role: ${this.getRole()}</p>
        <p>email: <a href = "mailto: ${this.email}">${this.email}</a></p>
        <p>name: ${this.name}</p>
        <p>id: ${this.id}</p>
        `;
    }

};


module.exports = Employee;