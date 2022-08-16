const { Router } = require("express");

const userRouter = require('./users.routes.js')
const movieRouter = require('./movies.routes.js')
const tagRouter = require('./tags.routes.js')
const sessionRouter = require('./sessions.routes.js')

const routes = Router();

routes.use("/users", userRouter)
routes.use("/movies", movieRouter)
routes.use("/tags", tagRouter)
routes.use("/sessions", sessionRouter)

module.exports = routes;