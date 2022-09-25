exports.seed = (knex) => {
  return knex('contacts')
    .del()
    .then(() => {
      return knex('contacts').insert([
        {
          id: 1,
          user_id: 'auth0|123',
          name: 'Grape Man',
          username: 'grape_gatsby',
          blocked: false,
        },
        {
          id: 2,
          user_id: 'auth0|456',
          name: 'Banana Joe',
          username: 'banana_llama',
          blocked: false,
        },
      ])
    })
}
