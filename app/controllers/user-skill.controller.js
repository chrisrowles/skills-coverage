const db = require("../models")
const UserSkill = db.userSkills

exports.create = (req, res) => {
    console.log(req.body)
    const userSkill = {
        userId: req.body.user_id,
        skillId: req.body.skill_id,
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