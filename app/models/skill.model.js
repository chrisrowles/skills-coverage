module.exports = (sequelize, Sequelize) => {
    const Skill = sequelize.define("skill", {
        name: {
            type: Sequelize.STRING
        },
        weighting: {
            type: Sequelize.FLOAT
        },
        minimumLevel: {
            type: Sequelize.INTEGER
        },
        requiredAtMinimumLevel: {
            type: Sequelize.INTEGER
        },
    })
    
    return Skill
}