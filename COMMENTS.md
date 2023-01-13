# desafio-iblue

## 🔧 Como subir o ambiente

### Instale as dependências

```
npm i
```

### Rodando a aplicação

```
npm start
```

Obs: Subi o .env já com as variáveis de ambiente que a aplicação precisa

## 📦 Desenvolvimento

### Endpoints

GET /ping - Retorna com um "pong" no response para saber se a aplicação está alcançável. - Exemplo de request:
````
curl --location --request GET 'http://localhost:8080/ping'
````

POST /jogo/simular - Gera um simulado do jogo Banco Imobiliário e retorna com o Vencedor do jogo e os jogadores ordenado por saldo. - Exemplo de request:
````
curl --location --request POST 'http://localhost:8080/jogo/simular'
````
