# monopoly-simulator

## The challenge

Consider the following hypothetical game very similar to Monopoly, where several of its mechanics have been simplified. In a game of this game, players change in rounds, in an order randomly defined at the beginning of the game. Players always start a game with a balance of 300 each.

In this game, the board consists of 5 properties in sequence. Each property has a cost to sell, a rent value, an owner if they are already bought, and they follow a certain order on the board. It is not possible to build hotels and any other improvements on board properties, due to the simplicity of the problem.

At the beginning of his turn, the player rolls a 6-sided equiprobable die that determines how many spaces on the board the player will move.

When landing on an unowned property, the player can choose whether or not to buy the property. This is the only way a property can be purchased.

When he lands on a property owned by an owner, he must pay the owner the rental amount for the property.

When completing a turn on the board, the player earns 100 balance.

Players can only buy property if it has no owner and the player has the money from the sale. When buying a property, the player loses the money and gains ownership of the property.

Each of the players has a different behavior implementation, which dictates the actions they will take throughout the game. More details about the behavior will be explained later.

A player who has a negative balance loses the game and does not play anymore. It loses its properties and therefore can be bought by any other player.

It ends when there is only one player left with a positive balance, at any time in the match. That player is declared the winner.

We want to run a simulation to decide the best strategy. For this, we idealized a game with 4 different types of possible players. The defined behaviors are:

-   Player one is impulsive;
-   Player two is demanding;
-   Player three is cautious;
-   Player four is random;

The impulsive player buys any property he lands on.
The demanding player buys any property as long as its rent value is greater than 50.
The cautious player buys any property as long as he has a reserve of 80 balance left over after making the purchase.
The random player buys the property he lands on with probability 50%.

If the game takes too long, as is usual in games of this nature, the game ends in the thousandth round with the victory of the player with the most balance. The tiebreaker is the players' turn order in this match.

To get the result of the game, create an HTTP API.
Endpoint suggestion: http://localhost:8080/jogo/simular
winning property: a string whose value is Player winning.
players property: a string list of player names that is sorted by balance.

Example API response:

```JSON
{
"winner": "cautious",
"players": ["cautious", "random", "demanding", "impulsive"]
}
```

**Document it in a COMMENTS.md file as a step-by-step guide on how to run the application.**
