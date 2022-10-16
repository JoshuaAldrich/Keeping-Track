const db = require("../db/connection");
const inquirer = require("inquirer");

//Get department names, and department ids
const getDepartments = function () {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM departments`;

    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err.message);
        return;
      }

      resolve(rows);
    });
  });
};

//add a department
const addDepartment = function ({ name }) {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO departments (department_name) VALUES (?)`;

    db.query(sql, name, (err, results) => {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log("Your department has been added.");
      resolve(results);
    });
  });
};

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
      resolve(results);
    });
  });
};

module.exports = { getDepartments, addDepartment };
