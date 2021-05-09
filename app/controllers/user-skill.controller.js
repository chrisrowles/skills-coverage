const db = require("../models")
const UserSkill = db.userSkills

exports.create = (req, res) => {
    const userSkill = {
        userId: req.body.user.id,
        skillId: req.body.skill.id,
        level: req.body.level
    }

    UserSkill.create(userSkill)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "An unexpected error occurred"
        })
    })
}

exports.update = (req, res) => {
    const userId = req.params.user_id
    const skillId = req.params.skill_id
    
    UserSkill.update({
        level: req.body.level
    }, {
        where: { userId: userId, skillId: skillId }
    })
    .then(result => {
        if (result == 1) {
            res.send({
                message: "User skill successfully updated"
            })
        } else {
            res.send({
                message: `Error updating user ${id}`
            })
        }
    })
}