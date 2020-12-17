const mysql = require('mysql');
const inquirer = require("inquirer");


//sql connection information
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Regulater187$",
    database: "need to make"
});

//connection
connection.connect((err) => {
  if (err) throw err;
  runSearch();
});

const runSearch = () => {
    inquirer
        .prompt({

        })

}