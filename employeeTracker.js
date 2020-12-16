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


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    askQuestions();
});