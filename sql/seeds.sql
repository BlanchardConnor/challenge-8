USE company;

INSERT INTO department (name) VALUES ('Marketing');
INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Customer Service');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Human Resources');

INSERT INTO employee_role (title, salary, department_id) VALUES ('Role A', 80000, 1);
INSERT INTO employee_role (title, salary, department_id) VALUES ('Role B', 65000, 2);
INSERT INTO employee_role (title, salary, department_id) VALUES ('Role C', 50000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Timothy', 'Mills', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Rogers', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Alicia', 'Roberts', 3, 2);