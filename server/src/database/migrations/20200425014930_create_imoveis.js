exports.up = function(knex) {
   return knex.schema.createTable('imoveis', function(table) {
      table.increments();

      table.string('cidade').notNullable();
      table.string('bairro').notNullable();

      table.decimal('valor', 2).notNullable();
      table.string('tipo_negociacao').notNullable();
      table.string('tipo_imovel').notNullable();
      
      table.integer('area').notNullable();
      table.integer('quartos').notNullable();
      table.integer('banheiros').notNullable();
      table.integer('vagas').notNullable();

      table.string('anunciante_id').notNullable();

      table.foreign('anunciante_id').references('id').inTable('anunciantes')
   })
};

exports.down = function(knex) {
   return knex.schema.dropTable('imoveis')
};
