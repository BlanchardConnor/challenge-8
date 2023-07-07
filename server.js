// -- Importing required dependencies -- //
const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");

// -- Establishing MySQL connection -- //
const connection = mysql.createConnection({
host: 'localhost',

// -- Setting PORT # -- //
port: 3306,

user: 'root',
password: 'password',
database: 'company'
});

// -- Connecting to the database -- //
connection.connect((err) => {
    if (err) throw err;
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
    connection.query('SELECT * FROM employee_role', (err, res) => {
        if (err) throw err;
        console.table('Roles', res);
        start();
    });
}

// -- Function to view all departments -- //
function viewDepartments() {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw error;
        console.table('Departments', res);
        start();
    });
}

// -- Function to view all roles -- //
function viewEmployees() {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
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
        (err) => {
            if (err) throw err;
            console.log('Department created successfully!');
            start();
        }
    );
   });
}

// -- Function to add a role -- //
function addRole() {
    inquirer
    .prompt([
    {
        name: 'title',
        type: 'input',
        message: 'Enter the title of the role:',
    },
    {
        name: 'salary',
        type: 'input',
        message: 'Enter the salary for this role:',
    },
    {
        name: 'department_id',
        type: 'input',
        message: 'Enter the department ID for the role:',
    },
])
    .then((answers) => {
        const { title, salary, department_id } = answers;
     connection.query(
         'INSERT INTO employee_role (title, salary, department_id)VALUES (?, ?, ?)',
         [title, salary, department_id],
         (err) => {
             if (err) throw err;
             console.log('Role created successfully!');
             start();
         }
     );
    });
 }

// -- Function to add an employee -- //
function addEmployee() {
    inquirer
    .prompt([
    {
     name: 'first_name',
     type: 'input',
     message: 'Enter the first name of the employee:',
    },
    {
        name: 'last_name',
        type: 'input',
        message: 'Enter the last name of the employee:'
    },
    {
        name: 'role_id',
        type: 'input',
        message: 'Enter the role ID of the employee:'
    },
    {
        name: 'manager_id',
        type: 'input',
        message: 'Enter the manager ID of the employee (optional)'
    },
])
    .then((answer) => {
     connection.query(
         'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
            [answer.first_name, answer.last_name, answer.role_id, answer.manager_id],
         (err) => {
             if (err) throw err;
             console.log('Employee added successfully!');
             start();
         }
     );
    });
 }

// -- Function to update an employee role -- //
function updateEmployeeRole() {
    // - Fetch all employees from database - //
connection.query('SELECT * FROM employee', (err, employees) => {
    if (err) throw err;
    // - Prompt user to select an employee to update - // 
    inquirer
    .prompt([
    {
     name: 'employeeId',
     type: 'list',
     message: 'Select which employee to update:',
     choices: employees.map((employee) => ({
     name: `${employee.first_name} ${employee.last_name}`,
     value: employee.id
    })),
},
    // - Prompt user to enter new role ID for the chosen employee - //
{
    name: 'roleId',
    type: 'number',
    message: 'Enter the new role ID for the employee:',
},
])
    .then((answer) => {
    // - Update the employee's role in the DB - //
     connection.query(
         'UPDATE employee SET role_id = ? WHERE id = ?',
        [answer.roleId, answer.employeeId],
         (err) => {
             if (err) throw err;
             console.log('Employee role updated successfully!');
             start();
         }
     );
    });
 });
};