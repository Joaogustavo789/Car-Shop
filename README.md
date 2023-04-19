
# Car-Shop 🚗 🏍️

Car-Shop é uma aplicação Back-End de uma concessionária que vende carros e motos, que foi desenvolvida com o `Mongoose` (ODM), `Node.js`, `Express.js` e `TypeScript` através da Arquitetura de Software MSC`(Model, Service, Controller)`. Nela é possível Listar, Criar, Atualizar e Deletar os veículos.

## Rodando com Docker

<details>
  <summary>Clique para expandir</summary>
  
  ## É necessário ter o Docker instalado em sua máquina.
  
- Clone o projeto

```bash
  git clone git@github.com:Joaogustavo789/Car-Shop.git
```

- Entre no diretório do projeto

```bash
  cd Car-Shop
```

- Crie os Containers

```js
  docker-compose up -d  // Ele irá rodar dois serviços, um do node e um do db!
```

Se estiver usando `macOS` será necessário colocar manualmente uma opção `platform: linux/amd64` no serviço do banco de dados no arquivo docker-compose.yml desse projeto.

- Entre no container do projeto

```bash
docker exec -it car_shop bash
```

- Caso queira entrar no container do db, basta rodar

```bash
docker exec -it car_shop_db bash
```

- Instale as dependências dentro do container

```bash
  npm install
```
</details>

## Rodando localmente

<details>
  <summary>Clique para expandir</summary>
  
## É necessário ter o Node.js, MongoDB e o Mongoose instalados em sua máquina.

- Clone o projeto

```bash
  git clone git@github.com:Joaogustavo789/Car-Shop.git
```

- Entre no diretório do projeto

```bash
  cd Car-Shop
```

- Instale as dependências

```bash
  npm install
```
</details>

## Rodando os testes

<details>
  <summary>Clique para expandir</summary>
  <br>
  
Para rodar os testes, rode o seguinte comando

```bash
  npm test
```
</details>

## Documentação da API
<details>
  <summary>Clique para expandir</summary>

### Cria um novo carro

```http
  POST /cars
```
<details>
  <summary>Clique para expandir</summary>
  <br>

#### Formato da requisição

```js
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```

#### Resposta esperada

```js
{
  "id": "6348513f34c397abcad040b2",
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```
</details>

### Retorna todos os carros

```http
  GET /cars
```
<details>
  <summary>Clique para expandir</summary>
  <br>

#### Resposta esperada

```js
[
  {
    "id": "634852326b35b59438fbea2f",
    "model": "Marea",
    "year": 2002,
    "color": "Black",
    "status": true,
    "buyValue": 15.99,
    "doorsQty": 4,
    "seatsQty": 5
  },
  {
    "id": "634852326b35b59438fbea31",
    "model": "Tempra",
    "year": 1995,
    "color": "Black",
    "buyValue": 39,
    "doorsQty": 2,
    "seatsQty": 5
  }
]
```
</details>

### Retorna um carro

```http
  GET /cars/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do carro que você deseja buscar |
<details>
  <summary>Clique para expandir</summary>
  <br>

#### Resposta esperada

```js
 {
    "id": "634852326b35b59438fbea2f",
    "model": "Marea",
    "year": 2002,
    "color": "Black",
    "status": true,
    "buyValue": 15.99,
    "doorsQty": 4,
    "seatsQty": 5
  }
```

#### Resposta com algum parâmetro errado
<details>
  <summary>Clique para expandir</summary>
  <br>

- **carro não existente**

```js
{ "message": "Car not found" }
```

- **id inválido**

```js
{ "message": "Invalid mongo id" }
```
</details>
</details>

### Atualiza um carro

```http
  PUT /cars/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do carro que você deseja alterar |
<details>
  <summary>Clique para expandir</summary>
  <br>

#### Formato da requisição

```js
{
  "model": "Marea",
  "year": 1992,
  "color": "Red",
  "status": true,
  "buyValue": 12.000,
  "doorsQty": 2,
  "seatsQty": 5
}
```

#### Resposta esperada

```js
{
    "id": "634852326b35b59438fbea2f",
    "model": "Marea",
    "year": 1992,
    "color": "Red",
    "status": true,
    "buyValue": 12.000,
    "doorsQty": 2,
    "seatsQty": 5
  }
```

#### Resposta com algum parâmetro errado
<details>
  <summary>Clique para expandir</summary>
  <br>

- **carro não existente**

```js
{ "message": "Car not found" }
```

- **id inválido**

```js
{ "message": "Invalid mongo id" }
```
</details>
</details>

### Exclui um carro

```http
  DELETE /cars/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do carro que você deseja excluir |
<details>
  <summary>Clique para expandir</summary>
  <br>

#### Resposta com algum parâmetro errado

- **carro não existente**

```js
{ "message": "Car not found" }
```

- **id inválido**

```js
{ "message": "Invalid mongo id" }
```

**OBS: Caso a exclusão tenha dado certo, o status 204 é retornado sem conteúdo.**
</details>

### Cria uma nova moto

```http
  POST /motorcycles
```
<details>
  <summary>Clique para expandir</summary>
  <br>

#### Formato da requisição

```js
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.000,
  "category": "Street",
  "engineCapacity": 600
}
```

#### Resposta esperada

```js
{
  "id": "6348513f34c397abcad040b2",
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.000,
  "category": "Street",
  "engineCapacity": 600
}
```
</details>

### Retorna todas as motos

```http
  GET /motorcycles
```
<details>
  <summary>Clique para expandir</summary>
  <br>

#### Resposta esperada

```js
[
  {
    "id": "634852326b35b59438fbea2f",
    "model": "Honda Cb 600f Hornet",
    "year": 2005,
    "color": "Yellow",
    "status": true,
    "buyValue": 30.000,
    "category": "Street",
    "engineCapacity": 600
  },
  {
    "id": "634852326b35b59438fbea31",
    "model": "Honda Cbr 1000rr",
    "year": 2011,
    "color": "Orange",
    "status": true,
    "buyValue": 59.900,
    "category": "Street",
    "engineCapacity": 1000
  }
]
```
</details>

### Retorna uma moto

```http
  GET /motorcycles/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da moto que você deseja buscar |
<details>
  <summary>Clique para expandir</summary>
  <br>

#### Resposta esperada

```js
{
  "id": "634852326b35b59438fbea31",
  "model": "Honda Cbr 1000rr",
  "year": 2011,
  "color": "Orange",
  "status": true,
  "buyValue": 59.900,
  "category": "Street",
  "engineCapacity": 1000
}
```

#### Resposta com algum parâmetro errado
<details>
  <summary>Clique para expandir</summary>
  <br>

- **moto não existente**

```js
{ "message": "Motorcycle not found" }
```

- **id inválido**

```js
{ "message": "Invalid mongo id" }
```
</details>
</details>

### Atualiza uma moto

```http
  PUT /motorcycles/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da moto que você deseja alterar |
<details>
  <summary>Clique para expandir</summary>
  <br>

#### Formato da requisição

```js
{
  "model": "Honda Cb 600f Hornet",
  "year": 2014,
  "color": "Red",
  "status": true,
  "buyValue": 45.000,
  "category": "Street",
  "engineCapacity": 600
}
```

#### Resposta esperada

```js
{
  "id": "634852326b35b59438fbea2f",
  "model": "Honda Cb 600f Hornet",
  "year": 2014,
  "color": "Red",
  "status": true,
  "buyValue": 45.000,
  "category": "Street",
  "engineCapacity": 600
}
```

#### Resposta com algum parâmetro errado
<details>
  <summary>Clique para expandir</summary>
  <br>

- **moto não existente**

```js
{ "message": "Motorcycle not found" }
```

- **id inválido**

```js
{ "message": "Invalid mongo id" }
```
</details>
</details>

### Exclui uma moto

```http
  DELETE /motorcycles/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da moto que você deseja excluir |
<details>
  <summary>Clique para expandir</summary>
  <br>

#### Resposta com algum parâmetro errado

- **moto não existente**

```js
{ "message": "Motorcycle not found" }
```

- **id inválido**

```js
{ "message": "Invalid mongo id" }
```

**OBS: Caso a exclusão tenha dado certo, o status 204 é retornado sem conteúdo.**
</details>
</details>

## Ferramentas e Tecnologias

<br>
<br>
<table width="320px" align="center">
  <tbody>
    <tr valign="top">
      <td width="80px" align="center">
        <span><strong>Docker</strong></span>
        <img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" />
      </td>
      <td width="80px" align="center">
        <span><strong>Mongoose</strong></span><br>
        <img height="50" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png" />
      </td>
      <td width="80px" align="center">
        <span><strong>Node.js</strong></span><br>
          <img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
      </td>
      <td width="80px" align="center">
        <span><strong>Express.js</strong></span><br>
          <img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
      </td>
      <td width="80px" align="center">
        <span><strong>TypeScript</strong></span><br>
          <img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
      </td>
      <td width="80px" align="center">
        <span><strong>Mocha</strong></span><br>
          <img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" />
      </td>
    </tr>
  </tbody>
</table>

## Documentação

- [Docker](https://docs.docker.com/)
- [Mongoose](https://mongoosejs.com/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/)
- [Mocha](https://mochajs.org/)

## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio de jgustavomendonca@gmail.com
