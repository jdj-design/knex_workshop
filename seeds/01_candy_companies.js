/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('candy_companies').del()
  await knex('candy_companies').insert([
    {id: 1, name: 'Hershey', location: 'USA'},
    {id: 2, name: 'Mars', location: 'USA'},
    {id: 3, name: 'Haribo', location: 'Germany'},
    {id: 4, name: 'Morinaga & Co.', location: 'Japan'},
    {id: 5, name: 'Orion Corp', location: 'Korea'}
  ]);
};
