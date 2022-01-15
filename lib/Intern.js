const Employee = require('./Employee');

class Intern extends Employee {

    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getrole(){
        return 'intern'
    };

    github(){
        return this.github;
    }
  
    getHTML() {
            return `
            <p>email: <a href = "mailto: ${this.email}">${this.email}</a></p>
            <p>name: ${this.name}</p>
            <p>id: ${this.id}</p>
            <p>github: ${this.github} <a href=https://github.com/${this.github} >${this.github}</a></p>
            <p>role: ${this.getrole()}</p>
            `;
    }

};

module.exports = Intern;