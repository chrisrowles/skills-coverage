module.exports = app => {
    const userSkills = require("../controllers/user-skill.controller")
    const router = require("express").Router()
    
    router.post("/", userSkills.create)
    
    app.use("/api/user/skills", router)
}