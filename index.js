const inquirer = require("inquirer");
// const db = require("./db/connection");
// const sql = require("mysql2");
const cTable = require("console.table");
const {
  getDepartments,
  addDepartments,
  deleteDepartment,
} = require("./lib/department");
const {
  getEmployees,
  addEmployees,
  updateRole,
  deleteEmployee,
} = require("./lib/employee");
const { allRoles, addRole } = require("./lib/roles");

const start = (answers) => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "select an option",
        choices: [
          "SHOW DEPARTMENTS",
          "SHOW ROLES",
          "SHOW EMPLOYEES",
          "ADD DEPARTMENT",
          "ADD ROLE",
          "ADD EMPLOYEE",
          "UPDATE EMPLOYEE`S ROLE",
          "DELETE EMPLOYEE",
          "DELETE DEPARTMENT",
        ],
      },
    ])
    .then((answers) => {
      if (answers.options == "SHOW DEPARTMENTS"){
        getDepartments().then(() => {
                start();
              });
      } 
      if (answers.options == "SHOW ROLES"){
        allRoles().then(() => {
                start();
              });
    }
      if

      // console.log(answers.options);
      // switch (answers.options) {
      //   case "SHOW DEPARTMENTS":
      //     getDepartments().then(() => {
      //       start();
      //     });
      //     break;
      //   case "SHOW ROLES":
      //     allRoles().then(() => {
      //       start();
      //     });
      //     break;
      //   case "SHOW EMPLOYEES":
      //     getEmployees().then(() => {
      //       start();
      //     });
      //     break;
      //   case "ADD DEPARTMENT":
      //     addDepartments().then(() => {
      //       getDepartments();
      //       start();
      //     });
      //     break;
      //   case "ADD ROLE":
      //     addRole().then(() => {
      //       allRoles();
      //       start();
      //     });
      //     break;
      //   case "ADD EMPLOYEE":
      //     addEmployees().then(() => {
      //       getEmployees();
      //       start();
      //     });
      //     break;
      //   case "UPDATE EMPLOYEE`S ROLE":
      //     updateRole().then(() => {
      //       getEmployees();
      //       start();
      //     });
      //     break;
      //   case "DELETE EMPLOYEE":
      //     deleteEmployee().then(() => {
      //       getEmployees();
      //       start();
      //     });
      //     break;
      //   case "DELETE DEPARTMENT":
      //     deleteDepartment().then(() => {
      //       getDepartments();
      //       start();
      //     });
      //     break;
      // }
    })
    .catch((err) => {
      console.log(err);
    });
};

start();
