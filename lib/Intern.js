const Employee = require('./Employee');

class Intern extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return 'intern'
    };

    getGithub() {
        return this.github;
    }

    getHTML() {
        return super.getHTML() + `<p>github: ${this.github} <a href=https://github.com/${this.github} >${this.github}</a></p>
            `;
    }

};

module.exports = Intern;