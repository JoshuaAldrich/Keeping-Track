const db = require("../db/connection");
const inquirer = require("inquirer");

//Get department names, and department ids
const getDepartments = function () {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM departments`;

    db.query(sql, (err, res) => {
      if (err) {
        console.log(err.message);
        console.log("View existing departments");
        console.table(res);
        return;
      }

      resolve();
    });
  });
};

//add a department
const addDepartment = function ({ name }) {
  return new Promise((resolve, reject) => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the department name?',
        }
    ])
    .then(answers => {
        const sql = `INSERT INTO departments (department_name) VALUES (?)`;
        const departmentName = [[answers.departmentName]];

        db.query(sql, [departmentName], (err, results) => {
          if (err) {
            console.log(err.message);
            return;
          }
          console.log("Your department has been added.");
          resolve();
    });
  });


//delete a department
const deleteDepartment = function ({ name }) {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM departments (department_name) VALUES (?)`;

    db.query(sql, name, (err, results) => {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log("Your department has been deleted.");
      resolve();
    });
  });
};

module.exports = { getDepartments, addDepartment, deleteDepartment };