var inquirer = require('inquirer');
var fs = require('fs');
var path = require('path');

var Manager = require('./lib/Manager');


function work() {


    function createManager() {

         inquirer.prompt([
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
        ]).then((answers) => {
            console.log(answers)
            // Use user feedback for... whatever!!
            //pass answers to manager class object
            var manager = new Manager(answers.name, answers.id, answers.email, answers.number)  
             console.log(manager);
            //store manager in an array
            addTeam();
        })
    };


    function addTeam() {
        inquirer.prompt([
            {
            type: 'list',
            name: 'teamMember',
            message: 'what is the employee you want to create?',
            choices:[
                'Engineer',
                'Intern',
                'I do not want to create anymore team members'
            ]
         }
        ]).then(answers =>{
            switch(answers.teamMember) {
                case 'Engineer':
                    createEngineer();
                    break;
                case 'Intern':
                    createIntern();
                    break;
                default:
                    createTeam();
            }
        })
    };


    function createEngineer(){
        inquirer.prompt([
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
                message: 'what is the engineers github'
            }
        ])
        //last thing should be called
        //addTeam();
    };

    function createIntern(){
        inquirer.prompt([
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
                message: 'what is the engineers github'
            }
        ])
         //last thing should be called
        //addTeam();
    };

    function createTeam(){
        //we statrt to create our templates using the class object stored in array
    }







    
    /* this method on how to add more employees

       while (True) {
       await inquirer.prompt(["add another?", "add employee or intern?"])
       if (inquirer.answer_add_another == 'no')
       break;
       var empOrIntern = inquierer.answer;
       myHtml += makeEmployeeBox(empOrIntern);
       }*/





    createManager()
}

work();



//this function will create and add content to file
function writeFile(content) {
    console.log(content);

}

