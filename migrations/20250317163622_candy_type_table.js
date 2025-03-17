/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('candy_types', table =>{
    table.increments();
    table.string('type', 250);
    table.foreign('candy_companies_id').references('id').inTable('candy_companies').onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('candy_types', table =>{
    table.dropForeign('candy_companies_id')
  })
  .then(function(){
    return knex.schema.dropTableIfExists('candy_types');

  });
};
