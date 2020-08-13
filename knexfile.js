// Update with your config settings.

const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT } = process.env;
// console.log(
//   "knexfile Dotenv variables: ",
//   DB_USER,
//   DB_HOST,
//   DB_NAME,
//   DB_PASSWORD,
//   DB_PORT
// );

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: DB_HOST,
      user: DB_USER,
      port: DB_PORT,
      database: DB_NAME,
      password: DB_PASSWORD,
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
    useNullAsDefault: true,
  },

  production: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      port: "5432",
      database: "poll-var",
      password: "admin",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
    useNullAsDefault: true,
  },
};
