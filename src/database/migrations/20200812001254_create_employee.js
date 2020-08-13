exports.up = async function (knex) {
  await knex.schema.createTable("employee", (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("email");
    table.string("city");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("employee");
};
