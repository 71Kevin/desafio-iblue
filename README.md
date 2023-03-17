# monopoly-simulator

## The Challenge

Consider a hypothetical game similar to Monopoly, where several mechanics have been simplified. Players take turns in rounds, in a randomly defined order at the beginning of the game. At the start of the game, each player has a balance of 300.

The game board consists of five properties in sequence. Each property has a sale cost, rental value, and an owner, if it is already bought. Properties must be purchased when a player lands on it for the first time.

At the beginning of a player's turn, they roll a six-sided die to determine how many spaces they will move.

If a player lands on an unowned property, they have the option to buy the property if they have sufficient funds. If they land on a property owned by another player, they must pay the rental amount for that property.

Upon completion of a turn, the player earns 100 balance.

Players can only purchase a property if it has no owner and the player has enough funds. Upon purchasing a property, the player loses the funds and gains ownership of the property.

Each player has a unique behavior implementation that dictates the actions they will take throughout the game. There are four types of players:

Player one is impulsive
Player two is demanding
Player three is cautious
Player four is random
The impulsive player buys any property they land on. The demanding player purchases any property as long as the rent value is greater than 50. The cautious player buys any property only if they have a reserve of 80 balance left after the purchase. The random player has a 50% chance of buying a property they land on.

If a player has a negative balance, they lose the game and can no longer play. They forfeit their properties, which can then be purchased by any other player.

The game ends when there is only one player left with a positive balance, at any time during the game. The winning player is declared the winner.

The goal is to run a simulation to determine the best strategy for the game. The simulation involves four players with different behaviors, and the result should be generated through an HTTP API.

Endpoint suggestion: http://localhost:8080/jogo/simular

The API response should include the name of the winning player and a list of player names sorted by balance.

Example API response:

```JSON
{
"winner": "cautious",
"players": ["cautious", "random", "demanding", "impulsive"]
}
```

**Document the steps to run the application in a COMMENTS.md file.**
