const db = require("../models")
const Skill = db.skills
const Op = db.Sequelize.Op

exports.create = (req, res) => {
    const skill = {
        name: req.body.name,
        weighting: req.body.weighting,
        minimumLevel: req.body.minimum_level,
        requiredAtMinimumLevel: req.body.required_at_minimum_level
    }

    Skill.create(skill)
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

exports.all = (req, res) => {
    const name = req.query.name
    let condition = name ? { name: { [Op.like]: `%${name}%` } } : null
    
    Skill.findAll({ where: condition })
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

exports.single = (req, res) => {
    const id = req.params.id
    
    Skill.findByPk(id)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "An unexpected error occurred"
        })
    })
}

exports.update = (req, res) => {
    const id = req.params.id
    
    Skill.update(req.name, {
        where: { id: id }
    })
    .then(result => {
        if (result == 1) {
            res.send({
                message: "Tutorial successfully updated"
            })
        } else {
            res.send({
                message: `Error updating skill ${id}`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "An unexpected error occurred"
        })
    })
}

exports.delete = (req, res) => {
    const id = req.params.id
    
    Skill.destroy({
        where: { id: id }
    })
    .then(result => {
        if (result == 1) {
            res.send({
                message: "Skill successfully deleted"
            })
        } else {
            res.send({
                message: `Error deleting skill ${id}`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "An unexpected error occurred"
        })
    })
}