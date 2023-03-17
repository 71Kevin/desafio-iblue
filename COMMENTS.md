# monopoly-simulator

## Step-by-step guide to run the application

1. Make sure that Node.js is installed on your computer. If you don't have it yet, download and install Node.js from the official website https://nodejs.org/en/.
2. Download or clone the project repository.
3. Open the terminal or command prompt and navigate to the project folder.
4. Run the command npm install to install the project dependencies.
5. Run the command npm start to start the application.
6. Access the API through the endpoint http://localhost:8080/jogo/simular using a program like Postman or any other HTTP request software.

Note: The application is implemented in Node.js and uses the Express framework to create the API. The main file is monopoly-simulator.js and the routes are defined in the file routes/jogo.js. The game is simulated on every GET request to the endpoint http://localhost:8080/jogo/simular and the response is returned in JSON format, containing the name of the winning player and a list of player names ordered by balance. The maximum number of rounds is defined in the file config.js and can be changed if necessary.
