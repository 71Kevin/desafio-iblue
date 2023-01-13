const router = require('express').Router()
const monopoly = require('../../controller/monopoly')

router.get('/ping', (req, res) => res.send({ message: 'pong' }))

router.post('/jogo/simular', async function (req, res) {
    await monopoly.game(req, res)
})

module.exports = router
