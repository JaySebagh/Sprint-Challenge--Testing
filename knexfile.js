module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/videogames.db3',
    },
    migrations: {
      directory: './data/migrations',
    },
  },
};