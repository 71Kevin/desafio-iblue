const express = require('express')
const logger = require('../../commons/logger')
const router = require('./router')

class Server {
    constructor(port) {
        this.port = parseInt(port)
        this.app = express()
    }

    middlewares() {
        this.app.use(express.json({ limit: '200MB' }))
    }

    routes() {
        this.app.use(router)
    }

    listen() {
        this.app.listen(this.port, () =>
            logger.info(`${process.env.APP} initialized on port: ${this.port}`)
        )
    }

    bootstrap() {
        this.middlewares()
        this.routes()
        this.listen()
    }
}

module.exports = new Server(process.env.APP_PORT)
