exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('delay').del()
  await knex('delay').insert([
    { id: 1, name: 'Within 30 days', value: 30 },
    { id: 2, name: 'Within 60 days', value: 60 },
    { id: 3, name: 'Within 90 days', value: 90 },
  ])
}
