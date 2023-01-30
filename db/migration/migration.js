exports.up = function (knex) {
  return knex.schema.createTable("admin", function (table) {
    table.uuid("id").notNullable().primary();
    table.string("email").nullable();
    table.string("password").nullable();
    table.string("name").notNullable();
    table.smallint("gender").defaultTo(1);
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("admin");
};
