// The application database is pretty much entirely instantiated from here
const { Sequelize } = require("sequelize")
const config = require("../db.config")

// Create a new instance
const sequelize = new Sequelize(config.name, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
    operatorsAliases: false,
    
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
    }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// Define database models
db.users = require("./user.model")(sequelize, Sequelize)
db.skills = require("./skill.model")(sequelize, Sequelize)

module.exports = db