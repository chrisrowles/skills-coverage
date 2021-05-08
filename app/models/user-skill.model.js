module.exports = (sequelize, Sequelize, db) => {
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

    db.users.belongsToMany(db.skills, { through: UserSkill })
    db.skills.belongsToMany(db.users, { through: UserSkill })
    
    return UserSkill
}