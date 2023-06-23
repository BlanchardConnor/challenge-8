// -- Importing required dependencies -- //
const inquirer = require("inquirer");
const mysql = require("mysql");
require("console.table");

// -- Establishing mysql connection -- //
const connection = mysql.createConnection({
host: 'localhost',

// -- Setting PORT # -- //
port: 3301,

user: root,
password: 'password',
database: 'employees_db'
});