var inquirer = require('inquirer');
var fs = require('fs');
var path = require('path');

var Manager = require('./lib/Manager');
var Engineer = require('./lib/Engineer');
var Intern = require('./lib/Intern');


async function work() {

    //this function will create and add content to file
    function writeFile(content) {
        fs.writeFile('output.html', content, { flag: 'w+' }, err => {});
        console.log("file output to 'output.html'");
    }

    async function createManager() {

        await inquirer.prompt([
            /* Pass your questions in here */
            {
                type: 'input',
                name: 'name',
                message: 'what is the managers name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'what is the managers id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'what is the managers email?'
            },
            {
                type: 'input',
                name: 'number',
                message: 'what is the managers office number?'
            },
        ]).then(async (answers) => {
            console.log(answers)
            // Use user feedback for... whatever!!
            //pass answers to manager class object

            var manager = new Manager(answers.name, answers.id, answers.email, answers.number)
            console.log(manager);
            //store manager in an array
            await addTeam(manager);

            html = `
            <html>
            <body>
            `;
            html += manager.getHTML();
            for (let worker of manager.workers) {
                html += worker.getHTML();
            }
            html += `
            </body>
            </html>
            `;

            writeFile(html);
        })
    };


    async function addTeam(manager) {
        await inquirer.prompt([
            {
                type: 'list',
                name: 'teamMember',
                message: 'what is the employee you want to create?',
                choices: [
                    'Engineer',
                    'Intern',
                    'I do not want to create anymore team members'
                ]
            }
        ]).then(async answers => {
            switch (answers.teamMember) {
                case 'Engineer':
                    await createEngineer(manager);
                    break;
                case 'Intern':
                    await createIntern(manager);
                    break;
                default:
                    break;
            }
        })
    };


    async function createEngineer(manager) {
        await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'what is the engineers name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'what is the engineers id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'what is the engineers email?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'what is the engineers github?'
            }
        ]).then(async answers => {
            manager.workers.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
        });
        //last thing should be called
        await addTeam(manager);
    };

    async function createIntern(manager) {
        await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'what is the interns name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'what is the interns id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'what is the interns email?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'what is the interns github?'
            }
        ]).then(async answers => {
            manager.workers.push(new Intern(answers.name, answers.id, answers.email, answers.github));
        });
        //last thing should be called
        await addTeam(manager);
    };

    createManager()
}

work();

