const logger = require('../commons/logger');

const monopoly = {
  game: async (req, res) => {
    const players = [
      { name: 'impulsivo', money: 300, position: 0, round: 0 },
      { name: 'exigente', money: 300, position: 0, round: 0 },
      { name: 'cauteloso', money: 300, position: 0, round: 0 },
      { name: 'aleatorio', money: 300, position: 0, round: 0 },
    ];
    const properties = [
      { name: 'Propriedade 1', cost: 10, rent: 2, owner: null },
      { name: 'Propriedade 2', cost: 20, rent: 4, owner: null },
      { name: 'Propriedade 3', cost: 30, rent: 6, owner: null },
      { name: 'Propriedade 4', cost: 40, rent: 8, owner: null },
      { name: 'Propriedade 5', cost: 50, rent: 10, owner: null },
      { name: 'Propriedade 6', cost: 60, rent: 12, owner: null },
      { name: 'Propriedade 7', cost: 70, rent: 14, owner: null },
      { name: 'Propriedade 8', cost: 80, rent: 16, owner: null },
      { name: 'Propriedade 9', cost: 90, rent: 18, owner: null },
      { name: 'Propriedade 10', cost: 100, rent: 20, owner: null },
      { name: 'Propriedade 11', cost: 110, rent: 22, owner: null },
      { name: 'Propriedade 12', cost: 120, rent: 24, owner: null },
      { name: 'Propriedade 13', cost: 130, rent: 26, owner: null },
      { name: 'Propriedade 14', cost: 140, rent: 28, owner: null },
      { name: 'Propriedade 15', cost: 150, rent: 30, owner: null },
      { name: 'Propriedade 16', cost: 160, rent: 32, owner: null },
      { name: 'Propriedade 17', cost: 170, rent: 34, owner: null },
      { name: 'Propriedade 18', cost: 180, rent: 36, owner: null },
      { name: 'Propriedade 19', cost: 190, rent: 38, owner: null },
      { name: 'Propriedade 20', cost: 200, rent: 40, owner: null },
    ];

    function playRound(player, diceRoll) {
      let position = (player.position + diceRoll) % properties.length;
      const property = properties[position];
      const cost = property.cost;
      const rent = property.rent;
      const owner = property.owner;

      if (owner === null) {
        if (player.money >= cost) {
          player.money -= cost;
          property.owner = player.name;
        }
      } else {
        if (owner !== player.name) {
          player.money -= rent;
          getPlayer(owner).money += rent;
        }
      }
      player.position = position;
      if (position === 0) {
        player.money += 100;
      }
    }

    function getPlayer(name) {
      return players.find((player) => player.name === name);
    }

    function getNextPlayer() {
      players.push(players.shift());
      return players[0];
    }

    function isGameOver() {
      const activePlayers = players.filter((player) => player.money >= 0);
      return activePlayers.length === 1 || getRound() >= 1000;
    }

    function getRound() {
      return players[0].round;
    }

    try {
      while (!isGameOver()) {
        const player = getNextPlayer();
        const diceRoll = Math.ceil(Math.random() * 6);
        playRound(player, diceRoll);
        player.round++;
      }

      const sortedPlayers = players.sort((a, b) => b.money - a.money);
      const winner = sortedPlayers[0].name;
      const response = {
        vencedor: winner,
        jogadores: sortedPlayers.map((player) => player.name),
      };

      res.status(200).send(response);
    } catch (e) {
      logger.error(e.message);
      res.status(500).send(e.message);
    }
  },
};

module.exports = monopoly;
