module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "secret",
  DB: "chaussette",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
