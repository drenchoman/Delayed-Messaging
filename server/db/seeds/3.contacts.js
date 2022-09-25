exports.seed = (knex) => {
  return knex('contacts')
    .del()
    .then(() => {
      return knex('contacts').insert([
        {
          id: 1,
          user_id: 'auth0|123',
          name: 'Samuel',
          username: 'sam01',
          blocked: false,
        },
        {
          id: 2,
          user_id: 'auth0|123',
          name: 'keagen',
          username: 'kea01',
          blocked: false,
        },
        {
          id: 3,
          user_id: 'auth0|123',
          name: 'Dan',
          username: 'danny01',
          blocked: false,
        },
        {
          id: 4,
          user_id: 'auth0|123',
          name: 'Grace',
          username: 'gracie01',
          blocked: false,
        },
      ])
    })
}
