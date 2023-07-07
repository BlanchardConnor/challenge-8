# MySQL Employee Tracker
- - - -

## Description
An employee tracker built using mysql that allows the user to view their employees, their roles, and the departments they are in (as well as add these to the database).

## User Story
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```
## Video Of Application
A Link to the [Video](https://youtu.be/Ppa1f4M2d04)

## Installation
Run the following in your terminal:
> npm install `mysql2`,
npm install `inquirer`,
npm install `console.table --save`

## Usage
* Navigate to sql and input your sql user and password
* Run db, schema, and seeds files 
* Navigate to the server by running `node server`
* Navigate through the prompts

## Credits
* Various student study groups at 2023 KU Spring/Summer Coding Bootcamp