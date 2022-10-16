INSERT INTO department (name)
VALUES
('Sales'),('Engineering'),('Finance'),('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Ronald', 'Firbank', 1, NULL),
    ('Virginia', 'Woolf', 2, 1),
    ('Piers', 'Gaveston', 3, NULL),
    ('Charles', 'LeRoi', 4, 3),
    ('Katherine', 'Mansfield', 5, NULL),
    ('Dora', 'Carrington', 6, 5),
    ('Edward', 'Bellamy', 7, NULL),
    ('Montague', 'Summers', 8, 7);