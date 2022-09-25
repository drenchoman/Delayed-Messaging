exports.seed = (knex) => {
  return knex('contacts')
    .del()
    .then(() => {
      return knex('contacts').insert([
        {
          id: 1,
          user_id: 'auth0|123',
          friend: 'auth0|456',
          blocked: false,
        },
        {
          id: 2,
          user_id: 'auth0|123',
          friend: 'auth0|1200',
          blocked: false,
        },
        {
          id: 3,
          user_id: 'auth0|123',
          friend: 'auth0|1201',
          blocked: false,
        },
        {
          id: 4,
          user_id: 'auth0|456',
          friend: 'auth0|123',
          blocked: false,
        },
        {
          id: 5,
          user_id: 'auth0|456',
          friend: 'auth0|1201',
          blocked: false,
        },
      ])
    })
}
