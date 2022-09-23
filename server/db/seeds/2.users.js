exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          auth0_id: 'auth0|123',
          name: 'Banana Joe',
          username: 'banana_llama',
          email: 'banana@gmail.com',
          delay_id: 1,
        },
        {
          auth0_id: 'auth0|456',
          name: 'Grape Man',
          username: 'grape_gatsby',
          email: 'grape@gmail.com',
          delay_id: 2,
        },
      ])
    )
}
