// inquirer colors fs
const inquirer = require("inquirer");
const colors = require("colors");

// add prompt with inquirer, maybe copy from assignment
// switch case, for each case: shape = new Square() ***example***
// write file, generate svg

class CLI {
    run(){
        return inquirer
        .prompt([
            {
                type: 'lsit',
                message: 'Which shape would you like to use?',
                name: 'shape',
                choices: ['squre', 'triangle', 'circle']
            },
            {
                type: 'input',
                message: 'What color would you like the shape to be?',
                name: 'shapeColor'
            },
            {
                type: 'input',
                message: 'Enter up to 3 letters to display in the shape.',
                name: 'string'
            },
            {
                type: 'input',
                message: 'What color would you like the letters to be?',
                name: 'stringColor'
            }
        ]
        )

    }
}

module.exports = CLI