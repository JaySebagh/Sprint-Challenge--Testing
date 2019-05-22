const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
};

function find() {
  return db('videogames').select('id', 'title', 'genre', 'releaseYear');
}

async function add(videogames) {
  const [id] = await db('videogames').insert(videogames);
  
  return db('videogames')
    .where({ id })
    .first()
}