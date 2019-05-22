exports.up = function(knex, Promise) {
    return knex.schema.createTable('videogames', videogames => {
        videogames.increments();
        videogames
          .string('title', 128)
          .notNullable()
          .unique();
        videogames
          .string('genre', 128)
          .notNullable()
        videogames
          .string('releaseYear', 4)
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('videogames');
};