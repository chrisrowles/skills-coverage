module.exports = (sequelize, Sequelize) => {
  const Skill = sequelize.define("skill", {
    name: {
      type: Sequelize.STRING
    },
    weighting: {
      type: Sequelize.FLOAT
    },
    minimumLevel: {
      type: Sequelize.INTEGER,
      field: 'minimum_level'
    },
    requiredAtMinimumLevel: {
      type: Sequelize.INTEGER,
      field: 'required_at_minimum_level'
    },
  })
  
  return Skill
}