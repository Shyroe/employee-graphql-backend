const knex = require("../database/index");

module.exports = {
  Query: {
    employees: async () => {
      const employeesData = await knex("employee").returning("*");
      console.log("Query employees Data: ", employeesData);
      return employeesData;
    },
    employee: async (_, { id }) => {
      const data = await knex("employee").where("id", id);
      const onlyEmployee = data[0];
      console.log("Query employee Data: ", onlyEmployee);
      return onlyEmployee;
    },
  },
  Mutation: {
    createEmployee: async (_, { name, email, city }) => {
      const newEmployee = {
        name,
        email,
        city,
      };
      const data = await knex("employee").insert(newEmployee).returning("*");
      const createEmployeeData = data[0];
      console.log("Mutation CreateEmployee: ", createEmployeeData);
      return createEmployeeData;
    },
    deleteEmployee: async (_, { id }) => {
      console.log("Delete id: ", id);

      const data = await knex("employee").where("id", id).del();
      console.log("Deleted employee: ", data);
      // return "Employee is deleted";
      return {
        message: "Employee is deleted",
      };
    },
    updateEmployee: async (_, { id, name, email, city }) => {
      console.log("Update id: ", id);

      const newEmployee = {
        name,
        email,
        city,
      };
      console.log("update Employee newEmployee: ", newEmployee);
      const data = await knex("employee")
        .where("id", id)
        .update({
          name,
          email,
          city,
        })
        .returning("*");

      console.log("update Data: ", data);
      const updatedEmployee = data[0];
      return updatedEmployee;
    },
  },
};
