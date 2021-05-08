const db = require("../models")
const User = db.users
const Op = db.Sequelize.Op

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Invalid Request"
        })
        return
    }

    const user = {
        name: req.body.name
    }

    User.create(user)
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
    
    User.findAll({
        where: condition,
        include: [{ model: db.skills }]
    })
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
    
    User.findByPk(id, {
        include: [{ model: db.skills }]
    })
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
    
    User.update(req.name, {
        where: { id: id }
    })
    .then(result => {
        if (result == 1) {
            res.send({
                message: "Tutorial successfully updated"
            })
        } else {
            res.send({
                message: `Error updating user ${id}`
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
    
    User.destroy({
        where: { id: id }
    })
    .then(result => {
        if (result == 1) {
            res.send({
                message: "User successfully deleted"
            })
        } else {
            res.send({
                message: `Error deleting user ${id}`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "An unexpected error occurred"
        })
    })
}