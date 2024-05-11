## endereco_facil

# API Restful com Node.js, Express, Typescript, Typeorm e PostgreSQL

Para inicializar o projeto, siga as etapas abaixo:

1. Faça um clone deste repositório e instale no seu ambiente de desenvolvimento usando o seguinte comando no seu terminal (escolha um diretório apropriado):

```
git clone https://github.com/rafaellaranjo/endereco_facil.git
```

2. Após clonar o conteúdo do repositório, acesse o diretório criado e efetue a instalação das dependências:

```
cd endereco_facil

yarn

# ou

npm install
```

3. Crie o arquivo `ormconfig.json` na raiz do projeto para configurar o acesso do TypeORM ao banco de dados usando o seguinte código:

```json
{
"type": "postgres",
"host": "localhost",
"port": 5432,
"username": "postgres",
"password": "docker",
"database": "crm",
"entities": [ "./src/models/**/typeorm/entities/*.ts" ],
"migrations": [ "./src/shared/typeorm/migrations/*.ts" ],
"cli": { "migrationsDir": "./src/shared/typeorm/migrations" }
}

4. Após essa instalação execute a aplicação com o comando `yarn dev` ou `npm run dev`. O servidor estará em execução no endereço `http://localhost:3333`.

Certifique-se de ajustar as configurações, como host, porta, usuário, senha e nome do banco de dados de acordo com as configurações do seu ambiente.

Agora, o projeto está configurado e pronto para ser executado. Certifique-se de que o PostgreSQL esteja instalado e em execução, pois o arquivo de configuração ormconfig.json está definido para se conectar a um banco de dados PostgreSQL local.

Lembre-se de que você deve ajustar as configurações no arquivo `ormconfig.json` conforme necessário para corresponder às configurações do seu ambiente de desenvolvimento.