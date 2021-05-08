module.exports = (sequelize, Sequelize) => {
    const UserSkill = sequelize.define("user_skill", {
        userId: {
            type: Sequelize.INTEGER,
            field: 'user_id'
        },
        skilId: {
            type: Sequelize.INTEGER,
            field: 'skill_id'
        },
        level: {
            type: Sequelize.INTEGER
        }
    }, {
        tableName: 'user_skill',
        underscored: true
    })

    sequelize.models.user.belongsToMany(sequelize.models.skill, { through: UserSkill })
    sequelize.models.skill.belongsToMany(sequelize.models.user, { through: UserSkill })
    
    return UserSkill
}