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
        console.log(data);
        runSearch();
    })
}

const viewDepartments = () => {
    connection.query("SELECT * FROM department", function (err, data) {
        console.log(data);
        runSearch();
    })
}

const addEmployee = () => {
    connection.query("SELECT * FROM role", function (err, data) {
      if (err) throw err;
  
  inquirer
    .prompt([
  {
      name: "firstName",
      type: "input",
      message: "What's employee's first name?",

  },
  {
      name: "lastName",
      type: "input",
      message: "What's employee's last name?",
  },
  {
      type: "number",
      name: "roleId",
      message: "What's employee's role ID"
  },
  {
      type: "number",
      name: "managerId",
      message: "What's employee's manager's ID?"
  },
  
]).then((answer) => {
    let query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
    let values = [answer.firstName, answer.lastName, answer.roleId, answer.managerId]
    //filter method - filter.this
    connection.query(query, values, function(err, data) {
         if (err) throw err;
            console.log("Added successfully");
    })
    viewEmployees();
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
    let values = [answer.department]
    connection.query(query, values, function(err, data) {
      console.log(`${(answer.department)} was added`)
    })
  viewDepartments();
  })

}

const addRole = () => {
    connection.query("SELECT * FROM department", function (err, data) {
      if (err) throw err;
  
  inquirer
    .prompt([
    {
        message: "Enter the title:",
        type: "input",
        name: "title"
    }, {
        message: "Enter it's salary:",
        type: "number",
        name: "salary"
    }, {
        message: "Enter the department ID:",
        type: "number",
        name: "department_id"
    }
  ]).then((answer) => {
    let query = "INSERT INTO role VALUES (?, ?, ?)";
    let values = [answer.title, answer.salary, answer.department_id]
    connection.query(query, values, function(err, data) {
         if (err) throw err;
            console.log(`${(answer.role)} was added`);
            runSearch();
    })
  })
})
}

const updateEmployeeRole = () => {
    inquirer
    .prompt([
    {
      message: "which employee file needs to be updated",
      type: "input",
      name: "name"
    }, {
      message: "enter the new role Id:",
      type: "number",
      name: "role_id"
   }
  ]).then((answer) => {
     let query = "UPDATE employee SET role_id = ? WHERE first_name = ?";
     let values = [answer.role_id, answer.name,]
      connection.query(query, values, function(err, data) {
        if (err) throw err;
          console.log("Added successfully");
          runSearch();
    })
 })

}


