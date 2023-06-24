// -- Importing required dependencies -- //
const inquirer = require("inquirer");
const mysql = require("mysql");
require("console.table");

// -- Establishing MySQL connection -- //
const connection = mysql.createConnection({
host: 'localhost',

// -- Setting PORT # -- //
port: 3306,

user: root,
password: 'password',
database: 'employees_db'
});

// -- Connecting to the database -- //
connection.connect((error) => {
    if (error) throw error;
    console.log('Connected to the database.');
    start();
});

// -- Function to start the app -- //
function start() {
    inquirer
    .prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit',
        ],
    })
    .then((answer) => {
        switch (answer.action) {
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployeeRole();
                break;
            case 'Exit':
                connection.end();
                break;
        default:
            console.log('Invalid option. Please select again.');
            start();
        }
    });
}

// -- Function to view all roles -- //
function viewRoles() {
    connection.query('SELECT * FROM role', (err, res) => {
        if (error) throw error;
        console.table('Roles', res);
        start();
    });
}

// -- Function to view all departments -- //
function viewDepartments() {
    connection.query('SELECT * FROM department', (err, res) => {
        if (error) throw error;
        console.table('Departments', res);
        start();
    });
}

// -- Function to view all roles -- //
function viewEmployees() {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (error) throw error;
        console.table('Employees', res);
        start();
    });
}

// -- Function to add a department -- //
function addDepartment() {
   inquirer
   .prompt({
    name: 'department',
    type: 'input',
    message: 'Enter the name of the department:',
   })
   .then((answer) => {
    connection.query(
        'INSERT INTO department SET ?',
        {
            name: answer.department,
        },
        (error) => {
            if (error) throw error;
            console.log('Department created successfully!');
            start();
        }
    );
   });
}

// -- Function to add a role -- //
function addRole() {
    inquirer
    .prompt({
     name: 'role',
     type: 'input',
     message: 'Enter the name of the role:',
    })
    .then((answer) => {
     connection.query(
         'INSERT INTO role SET ?',
         {
             name: answer.role,
         },
         (error) => {
             if (error) throw error;
             console.log('Role created successfully!');
             start();
         }
     );
    });
 }

// -- Function to add an employee -- //
function addEmployee() {
    inquirer
    .prompt({
     name: 'employee',
     type: 'input',
     message: 'Enter the name of the employee:',
    })
    .then((answer) => {
     connection.query(
         'INSERT INTO employee SET ?',
         {
             name: answer.employee,
         },
         (error) => {
             if (error) throw error;
             console.log('Employee added successfully!');
             start();
         }
     );
    });
 }

// -- Function to update an employee role -- //
function updateEmployeeRole() {
    inquirer
    .prompt({
     name: 'employeeRole',
     type: 'input',
     message: 'Enter the role of the employee:',
    })
    .then((answer) => {
     connection.query(
         'INSERT INTO employeeRole SET ?',
         {
             name: answer.employeeRole,
         },
         (error) => {
             if (error) throw error;
             console.log('Employee role updated successfully!');
             start();
         }
     );
    });
 }