// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
const generateHtml = require("./util/generateHtml")
const Employee = require("./lib/Employee");
const employees = [new Employee];


// Function that asks for user input when application starts
function askQuestion() {
    // Inquirer package to gather responses from user
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter the Team Manager's name."
        },
        {
            name: "id",
            type: "input",
            message: "Enter the Team Manager's employee ID."
        },
        {
            name: "email",
            type: "input",
            message: "Enter the Team Manager's email address."
        },
        {
            name: "office",
            type: "input",
            message: "Enter the Team Manager's office number."
        },
        {
            name: "question",
            type: "list",
            message: "Would you like to add an engineer or an intern to your team?",
            choices: ["Add engineer", "Add intern"]
        }
    ])
    
    .then(response => {
        const managerName = response.name;
        const id = response.id;
        const office = response.office;
        const question = response.question;

        switch (response.question) {
            case "Add engineer":
                console.log("add engineer!")
                addEngineer();
                break;

            case "Add intern":
                console.log("add intern!")
                addIntern();
                break;

            default:
                console.log("goodbye!")
                break;
        }
        generateHtml.generateTeam();
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter the engineer's name."
        },
        {
            name: "id",
            type: "input",
            message: "Enter the engineer's employee ID."
        },
        {
            name: "email",
            type: "input",
            message: "Enter the engineer's email address."
        },
        {
            name: "github",
            type: "input",
            message: "Enter the engineer's GitHub username."
        }
    ]).then(response => {
        const name = response.name;
        const id = response.id;
        const email = response.email;
        const github = response.github;
    })
}

function addIntern() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter the engineer's name."
        },
        {
            name: "id",
            type: "input",
            message: "Enter the engineer's employee ID."
        },
        {
            name: "email",
            type: "input",
            message: "Enter the engineer's email address."
        },
        {
            name: "school",
            type: "input",
            message: "Enter the engineer's GitHub username."
        }
    ]).then(response => {
        const name = response.name;
        const id = response.id;
        const email = response.email;
        const school = response.school;
    
        askQuestion();
    })
}

askQuestion();