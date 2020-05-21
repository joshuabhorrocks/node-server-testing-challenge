exports.up = function (knex) {
    return knex.schema.createTable("songs", tbl => {
      tbl.increments();
  
      tbl.string("name", 255).notNullable();
      tbl.string("artist", 255).notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("songs");
  };