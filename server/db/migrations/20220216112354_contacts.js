exports.up = (knex) => {
  return knex.schema.createTable('contacts', (table) => {
    table.increments('id').primary()
    table.string('user_id').references('users.auth0_id')
    table.string('name')
    table.string('username')
    table.boolean('blocked')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('contacts')
}
