USE employee_trackerDB;

INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("Software/IT");
INSERT INTO department (name) VALUES ("Finance");
INSERT INTO department (name) VALUES ("Human Resources");

INSERT INTO roles (title, salary,  department_id) VALUES("Sales Executive", 100000, 1);
INSERT INTO roles (title, salary,  department_id) VALUES("Software Engineer", 115000, 2);
INSERT INTO roles (title, salary,  department_id) VALUES("Team Lead Engineer", 200000, 2);
INSERT INTO roles (title, salary,  department_id) VALUES("Accountant", 125000, 3);
INSERT INTO roles (title, salary,  department_id) VALUES("HR employee", 75000, 4);

INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES ("Buzz", "Lightyear", 1, 3);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES ("Woody", "Allen", 2, 1);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES ("Chuck", "Berry", 3, NULL);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES ("James", "Dean", 2, 2);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES ("James", "Franco", 5, 1);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES ("Sharon", "Stone", 3, NULL);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES ("Dick", "Johnson", 1, 2);