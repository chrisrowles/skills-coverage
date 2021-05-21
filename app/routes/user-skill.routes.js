module.exports = app => {
  const userSkills = require("../controllers/user-skill.controller")
  const router = require("express").Router()
  
  router.post("/", userSkills.create)
  router.put("/:user_id/:skill_id", userSkills.update)
  
  app.use("/api/user/skills", router)
}