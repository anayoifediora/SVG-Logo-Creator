const inquirer = require('inquirer');
const fs = require('fs');
const {generateSquare} = require('./lib/square');
const {generateTriangle} = require('./lib/triangle');
const {generateCircle} = require('./lib/circle');

inquirer.prompt([
    {
        type: 'input',
        name: 'logotext',
        message: 'please enter 3 words for the logo',
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'please enter a text color',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for the logo',
        choices: ['Square', 'Triangle', 'Circle']
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'enter a shape color',
    },
])

.then(({shapecolor, textcolor, logotext, shape}) => {
    
    let shapeChoice = ['Square', 'Triangle', 'Circle'];
    // Conditional statement to check user's shape choice and render appropriate shape following user choice.
    if (shape === shapeChoice[0]) {
        fs.writeFile('./examples/logo.svg', generateSquare(shapecolor, textcolor, logotext), (err) =>
        err? console.log(err) : console.log('Generated logo'));
    } else if (shape === shapeChoice[2]) {
        fs.writeFile('./examples/logo.svg', generateCircle(shapecolor, textcolor, logotext), (err) =>
        err? console.log(err) : console.log('Generated logo'));
    } else {
        fs.writeFile('./examples/logo.svg', generateTriangle(shapecolor, textcolor, logotext), (err) =>
        err? console.log(err) : console.log('Generated logo'));
    }
    
})