require('dotenv').config();
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      charset: 'utf8',
      //ssl: process.env.DB_SSL,
      pool: {
        min: process.env.DB_POOL_MIN,
        max: process.env.DB_POOL_MAX
      }
    },
    migrations: {
      directory: __dirname + '/db/migration',
    },
    seeds: {
      directory: __dirname + '/db/seeder',
    },
  } 

};