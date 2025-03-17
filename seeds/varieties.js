/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('candy_types').del()
  await knex('candy_types').insert([
    {id: 1, type: 'chocolate'}
 
  ]);
};
