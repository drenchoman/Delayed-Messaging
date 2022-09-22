exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.string('auth0_id').primary()
    table.string('username')
    table.string('name')
    table.string('email')
    table.string('delay_id').references('delay.id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
