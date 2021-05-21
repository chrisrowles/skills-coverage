module.exports = app => {
  const users = require("../controllers/user.controller")
  const router = require("express").Router()
  
  router.post("/", users.create)
  router.get("/", users.all)
  router.get("/:id", users.single)
  router.put("/:id", users.update)
  router.delete("/:id", users.delete)
  
  app.use("/api/users", router)
}