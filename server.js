const cors = require("cors")
const express = require("express")

const app = express()
const config = {origin: "*"}

const db = require("./app/models")
db.sequelize.sync()

app.use(cors(config))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({ message: "Welcome." })
})

require("./app/routes/user.routes")(app)
require("./app/routes/skill.routes")(app)
require("./app/routes/user-skill.routes")(app)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}.`))