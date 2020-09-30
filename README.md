## Modo de executar

### Banco de dados
Será preciso ter um banco de dados postgres para executar a aplicação
<br />
No desenvolvimento foi usado um banco de dados em um container do Docker
<br />

Criado com o seguinte código:
#### docker run --name desafio_dourasoft -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

<br />

caso o banco de dados seja criado de outra forma, com porta, nome do banco de dados ou porta diferente, as mesmas informações devem ser modificadas no arquivo:
#### ./backend/src/config/database.js

### Back-end:
dentro da pasta ./backend execute a seguinte linha de código:
#### npm run dev
o servidor irá rodar no endereço: http://localhost:3333

### Front-end:
dentro da pasta ./frontend execute a seguinte linha de código:
### yarn start
a aplicação irá rodar no endereço: http://localhost:3000