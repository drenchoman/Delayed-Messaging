exports.up = function (knex) {
  return knex.schema.createTable('delay', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('value')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('delay')
}
