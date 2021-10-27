// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
const generateHtml = require("./util/generateHtml")
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const employees = [];

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
            // Sets responses to variables
            const managerName = response.name;
            const id = response.id;
            const email = response.email
            const office = response.office;
            const question = response.question;

            // Sets responses to our new instance of the constructor
            const newManager = new Manager(managerName, id, email, office)
            console.log(newManager);
            employees.push(newManager);

            // Directs user to appropriate function based on their input
            switch (question) {
                case "Add engineer":
                    console.log("add engineer!")
                    addEngineer();
                    break;

                case "Add intern":
                    console.log("add intern!")
                    addIntern();
                    break;
                default:
                    break;
            }
        })
}

// Handles adding engineer
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

        const newEngineer = new Engineer(name, id, email, github)
        console.log(newEngineer);
        employees.push(newEngineer);
        finalQuestion();
    })
}

// Handles adding intern
function addIntern() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter the intern's name."
        },
        {
            name: "id",
            type: "input",
            message: "Enter the intern's employee ID."
        },
        {
            name: "email",
            type: "input",
            message: "Enter the intern's email address."
        },
        {
            name: "school",
            type: "input",
            message: "Enter the intern's GitHub username."
        }
    ]).then(response => {
        const name = response.name;
        const id = response.id;
        const email = response.email;
        const school = response.school;

        const newIntern = new Intern(name, id, email, school)
        console.log(newIntern);
        employees.push(newIntern);
        finalQuestion();
    })
}

// Handles starting over or quitting based on user input
function finalQuestion() {
    inquirer.prompt([
        {
            name: "question",
            type: "list",
            message: "Would you like to add another team member?",
            choices: ["Yes", "No"]
        }
    ])

        .then(response => {
            switch (response.question) {
                case "Yes":
                    askQuestion();
                    break;

                case "No":
                    console.log("Thank you. Goodbye!");
                    break;
                default:
                    break;
            }

            // Generates output folder and html file based on user data
            const html = generateHtml(employees)
            const folderName = "./output"

            try {
                if (!fs.existsSync(folderName)) {
                    fs.mkdirSync(folderName)
                }
            } catch (err) {
                console.error(err)
            }
            fs.writeFileSync("./output/index.html", html)
        })
}

askQuestion();