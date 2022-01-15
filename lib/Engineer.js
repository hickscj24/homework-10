const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return 'engineer'
    };

    getGithub() {
        return this.github;
    }

    getHTML() {
        return super.getHTML() + `<p>github: ${this.github} <a href=https://github.com/${this.github} >${this.github}</a></p>
            `;
    }
};

module.exports = Engineer;