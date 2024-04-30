const inquirer = require('inquirer');
const colors = require("colors");
const fs = require('fs');
const Circle = require('./lib/circle')
const Square = require('./lib/square')
const Triangle = require('./lib/triangle')

inquirer
    .prompt([
        {
            type: 'input',
            name: 'string',
            message: 'Enter up to 3 letters to display in the shape.'

        },
        {
            type: 'input',
            name: 'stringColor',
            message: 'What color would you like the letters to be?',

        },
        {
            type: 'list',
            name: 'shape',
            message: 'Which shape would you like to use?',
            choices: ['square', 'triangle', 'circle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like the shape to be?',

        },

    ])
    .then((response) => {
        let userChoice;
        switch (response.shape) {
            case 'square':
                userChoice = new Square( response.shapeColor ,  response.string ,  response.stringColor )
                userChoice.render()
                break;
            case 'circle':
                userChoice = new Circle( response.shapeColor ,  response.string ,  response.stringColor )
                userChoice.render()
                break;
            case 'triangle':
                userChoice = new Triangle( response.shapeColor ,  response.string ,  response.stringColor )
                userChoice.render()
                break;
        }
    })
