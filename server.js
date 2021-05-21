const cors = require("cors")
const path = require("path")
const express = require("express")

const app = express()
const config = {origin: "*"}

const db = require("./app/models")
db.sequelize.sync()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors(config))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Frontend routes
app.get("/", (req, res) => res.render('dashboard'))
app.get("/assessment", (req, res) => res.render('assessment'))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// API routes
require("./app/routes/user.routes")(app)
require("./app/routes/skill.routes")(app)
require("./app/routes/user-skill.routes")(app)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}.`))