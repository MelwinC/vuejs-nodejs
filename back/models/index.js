const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
// configuration database
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});
// constante BDD
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// model and table
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.chaussette = require("../models/chaussette.model.js")(sequelize, Sequelize);
// relation Many to Many between Role and Users
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});
db.ROLES = ["user", "admin", "moderator"];
module.exports = db;
