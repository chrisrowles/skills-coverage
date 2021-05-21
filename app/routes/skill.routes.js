module.exports = app => {
  const skills = require("../controllers/skill.controller")
  const router = require("express").Router()
  
  router.post("/", skills.create)
  router.get("/", skills.all)
  router.get("/:id", skills.single)
  router.put("/:id", skills.update)
  router.delete("/:id", skills.delete)
  
  app.use("/api/skills", router)
}