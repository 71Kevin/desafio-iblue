const logger = require('../commons/logger')
const randomizePlayers = require('../commons/randomizePlayers')

const monopoly = {
    game: async (req, res) => {
        try {
            let players = [
                {
                    name: 'cauteloso',
                    balance: 300,
                    position: 0,
                    status: 'playing',
                },
                {
                    name: 'aleatorio',
                    balance: 300,
                    position: 0,
                    status: 'playing',
                },
                {
                    name: 'exigente',
                    balance: 300,
                    position: 0,
                    status: 'playing',
                },
                {
                    name: 'impulsivo',
                    balance: 300,
                    position: 0,
                    status: 'playing',
                },
            ]
            let board = [
                {
                    name: 'start',
                    number: 0,
                    cost: 0,
                    owner: null,
                },
                {
                    name: 'smart fit',
                    number: 1,
                    cost: 100,
                    owner: null,
                },
                {
                    name: 'farmacia',
                    number: 2,
                    cost: 80,
                    owner: null,
                },
                {
                    name: 'mercado',
                    number: 3,
                    cost: 60,
                    owner: null,
                },
                {
                    name: 'shopping',
                    number: 4,
                    cost: 120,
                    owner: null,
                },
                {
                    name: 'restaurante',
                    number: 5,
                    cost: 70,
                    owner: null,
                },
                {
                    name: 'bar',
                    number: 6,
                    cost: 60,
                    owner: null,
                },
                {
                    name: 'cabeleireiro',
                    number: 7,
                    cost: 60,
                    owner: null,
                },
                {
                    name: 'padaria',
                    number: 8,
                    cost: 60,
                    owner: null,
                },
                {
                    name: 'cinema',
                    number: 9,
                    cost: 130,
                    owner: null,
                },
                {
                    name: 'loja de roupas',
                    number: 10,
                    cost: 50,
                    owner: null,
                },
                {
                    name: 'smart fit',
                    number: 11,
                    cost: 100,
                    owner: null,
                },
                {
                    name: 'farmacia',
                    number: 12,
                    cost: 80,
                    owner: null,
                },
                {
                    name: 'mercado',
                    number: 13,
                    cost: 60,
                    owner: null,
                },
                {
                    name: 'shopping',
                    number: 14,
                    cost: 120,
                    owner: null,
                },
                {
                    name: 'restaurante',
                    number: 15,
                    cost: 70,
                    owner: null,
                },
                {
                    name: 'bar',
                    number: 16,
                    cost: 60,
                    owner: null,
                },
                {
                    name: 'cabeleireiro',
                    number: 17,
                    cost: 60,
                    owner: null,
                },
                {
                    name: 'padaria',
                    number: 18,
                    cost: 60,
                    owner: null,
                },
                {
                    name: 'cinema',
                    number: 19,
                    cost: 130,
                    owner: null,
                },
                {
                    name: 'loja de roupas',
                    number: 20,
                    cost: 50,
                    owner: null,
                },
            ]
            let dice
            let winner
            let losers = []
            let round = 1

            randomizePlayers(players)

            while (round <= 1000) {
                if (losers.length == players.length - 1) {
                    winner = players.find(
                        (monopolyWinner) => monopolyWinner.status == 'playing'
                    ).name
                    logger.info(
                        `Partida finalizada | perdedores: ${losers} | ganhador: ${winner}`
                    )

                    let sortedPlayersByBalance = players
                        .sort((r1, r2) =>
                            r1.balance > r2.balance
                                ? 1
                                : r1.balance < r2.balance
                                ? -1
                                : 0
                        )
                        .reverse()
                    let playerNamesFiltered = []
                    sortedPlayersByBalance.map((players) => {
                        playerNamesFiltered.push(players.name)
                    })

                    res.status(200).send({
                        vencedor: winner,
                        jogadores: playerNamesFiltered,
                    })
                    break;
                } else {
                    logger.info(`Partida ${round} iniciada`)
                    players.map((player) => {
                        if (!losers.includes(player.name)) {
                            dice = Math.floor(Math.random() * 6) + 1
                            logger.info(
                                `Jogador ${player.name} jogou o dado e tirou o valor ${dice}`
                            )

                            player.position = player.position + dice

                            if (player.position > board.length - 1) {
                                player.position =
                                    player.position - (board.length - 1)
                                player.balance = player.balance + 100
                                logger.info(
                                    `Jogador ${player.name} deu a volta no tabuleiro e teve seu saldo atualizado para ${player.balance}`
                                )
                            }

                            if (
                                board[player.position].owner &&
                                losers.includes(board[player.position].owner)
                            ) {
                                board[player.position].owner = null
                            }

                            if (!board[player.position].owner) {
                                if (player.name == 'impulsivo') {
                                    board[player.position].owner = 'impulsivo'
                                    player.balance =
                                        player.balance -
                                        board[player.position].cost
                                    logger.info(
                                        `Jogador ${
                                            player.name
                                        } comprou a propriedade ${
                                            board[player.position].name
                                        }`
                                    )
                                } else if (
                                    player.name == 'exigente' &&
                                    board[player.position].cost > 50
                                ) {
                                    board[player.position].owner = 'exigente'
                                    player.balance =
                                        player.balance -
                                        board[player.position].cost
                                    logger.info(
                                        `Jogador ${
                                            player.name
                                        } comprou a propriedade ${
                                            board[player.position].name
                                        }`
                                    )
                                } else if (
                                    player.name == 'cauteloso' &&
                                    player.balance -
                                        board[player.position].cost >=
                                        80
                                ) {
                                    board[player.position].owner = 'cauteloso'
                                    player.balance =
                                        player.balance -
                                        board[player.position].cost
                                    logger.info(
                                        `Jogador ${
                                            player.name
                                        } comprou a propriedade ${
                                            board[player.position].name
                                        }`
                                    )
                                } else if (
                                    player.name == 'aleatorio' &&
                                    Math.random() > 0.5
                                ) {
                                    board[player.position].owner = 'aleatorio'
                                    player.balance =
                                        player.balance -
                                        board[player.position].cost
                                    logger.info(
                                        `Jogador ${
                                            player.name
                                        } comprou a propriedade ${
                                            board[player.position].name
                                        }`
                                    )
                                }

                                let updatePlayer = players.find((p) => {
                                    return p.name === player.name
                                })

                                updatePlayer.balance = player.balance
                                updatePlayer.position = player.position
                            } else {
                                let updatePlayer = players.find((p) => {
                                    return p.name === player.name
                                })

                                updatePlayer.balance =
                                    player.balance - board[player.position].cost
                                updatePlayer.position = player.position

                                let updateOwnerBalance = players.find((p) => {
                                    return (
                                        p.name === board[player.position].owner
                                    )
                                })

                                updateOwnerBalance.balance =
                                    updateOwnerBalance.balance +
                                    board[player.position].cost

                                logger.info(
                                    `Jogador ${
                                        player.name
                                    } pagou o aluguel de ${
                                        board[player.position].cost
                                    } para ${updateOwnerBalance.name}`
                                )
                            }

                            logger.info(
                                `Saldo final do jogador ${player.name} é de ${player.balance}`
                            )

                            if (player.balance < 0) {
                                losers.push(player.name)

                                let updateStatus = players.find((p) => {
                                    return p.name === player.name
                                })

                                updateStatus.status = 'loser'
                                logger.info(
                                    `Mudando o status do jogador ${player.name} para perdedor`
                                )
                            }
                        }
                    })

                    if (round == 1000) {
                        logger.info(`Ultima partida, encerrando...`)

                        let sortedPlayersByBalance = players
                            .sort((r1, r2) =>
                                r1.balance > r2.balance
                                    ? 1
                                    : r1.balance < r2.balance
                                    ? -1
                                    : 0
                            )
                            .reverse()
                        let playerNamesFiltered = []
                        sortedPlayersByBalance.map((players) => {
                            playerNamesFiltered.push(players.name)
                        })

                        res.status(200).send({
                            vencedor: sortedPlayersByBalance[0].name,
                            jogadores: playerNamesFiltered,
                        })
                        break;
                    }
                }
                round++
            }
        } catch (e) {
            logger.error(e.message)
            res.status(500).send(e.message)
        }
    },
}

module.exports = monopoly
