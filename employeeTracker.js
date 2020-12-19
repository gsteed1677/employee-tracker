const mysql = require('mysql');
const inquirer = require("inquirer");

//logo
const logo = require('asciiart-logo');
const config = require('./package.json');
console.log(logo(config).render());


//sql connection information
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Regulater187$",
    database: "employee_trackerDB"
});

//connection
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  runSearch();
});

//iquirer prompt for selection
const runSearch = () => {
    inquirer
        .prompt({
          message: "Choose which section you want to go through:",
        type: "list",
        choices: [
            "view all employees",
            "view all departments",
            "add employee",
            "add department",
            "add role",
            "update employee role",
            "QUIT"
        ],
        name: "choice"
    }).then(answers => {
        console.log(answers.choice);
        switch (answers.choice) {
            case "view all employees":
                viewEmployees()
                break;

            case "view all departments":
                viewDepartments()
                break;

            case "add employee":
                addEmployee()
                break;

            case "add department":
                addDepartment()
                break;

            case "add role":
                addRole()
                break;

            case "update employee role":
                updateEmployeeRole();
                break;

            default:
                connection.end()
                break;
          }

        })

}

const viewEmployees = () => {
    connection.query("SELECT * FROM employee", function (err, data) {
        console.table(data);
        runSearch();
    })
}

const viewDepartments = () => {
    connection.query("SELECT * FROM department", function (err, data) {
        console.table(data);
        runSearch();
    })
}

const addEmployee = () => {
    connection.query("SELECT * FROM roles", function (err, data) {
      if (err) throw err;
  
  inquirer
    .prompt({
      name: "firstName",
      type: 'input',
      message: 'What is employees first name?',

  }).then((answer) => {
    console.log(answer)
    //filter method - filter.this

  })

})
}

const addDepartment = () => {
  inquirer
    .prompt({
      name: "department",
      type: 'input',
      message: 'What is the name of the new department?',

  }).then((answer) => {
    console.log(answer)
    let query = "INSERT INTO department (name) VALUES (?)";
    connection.query(query, answer.department, function(err, res) {
      console.log(`${(answer.department)} was added`)
    })
  viewDepartments();
  })

}

const addRole = () => {
    connection.query("SELECT * FROM roles", function (err, data) {
      if (err) throw err;
  
  inquirer
    .prompt({
      name: "firstName",
      type: 'input',
      message: 'What is employees first name?',

  })
  .then((answer) => {
    console.log(answer)
    //filter method - filter.this

  })

})
}
