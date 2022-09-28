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
        {
          id: 5,
          user_id: 'auth0|6331ff7335450ad949086015',
          name: 'Grace',
          username: 'gracie01',
          blocked: false,
        },
        {
          id: 6,
          user_id: 'auth0|6331ff7335450ad949086015',
          name: 'Bryden',
          username: 'bryden01',
          blocked: false,
        },
        {
          id: 7,
          user_id: 'auth0|6331ff7335450ad949086015',
          name: 'Oscar',
          username: 'Oscar01',
          blocked: false,
        },
        {
          id: 8,
          user_id: 'auth0|6331ff7335450ad949086015',
          name: 'Livi',
          username: 'Livi01',
          blocked: false,
        },
        {
          id: 9,
          user_id: 'auth0|63336870d3036f897e16eadf',
          name: 'Frey',
          username: 'ceo_frey',
          blocked: false,
        },
        {
          id: 10,
          user_id: 'auth0|63336870d3036f897e16eadf',
          name: 'Daniel',
          username: 'dan02',
          blocked: false,
        },
        {
          id: 11,
          user_id: 'auth0|63336870d3036f897e16eadf',
          name: 'Banana Man',
          username: 'banana_llama',
          blocked: false,
        },
      ])
    })
}
