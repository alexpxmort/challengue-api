<p align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Logo do Nest" />
  </a>
</p>

<p align="center">
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank">
    <img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" />
  </a>
  <a href="https://www.npmjs.com/package/@nestjs/core" target="_blank">
    <img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="Versão NPM" />
  </a>
  <a href="https://www.npmjs.com/package/@nestjs/core" target="_blank">
    <img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Licença do Pacote" />
  </a>
  <a href="https://www.npmjs.com/package/@nestjs/common" target="_blank">
    <img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="Downloads NPM" />
  </a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank">
    <img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master" alt="Cobertura de Testes" />
  </a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank">
    <img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord" />
  </a>
  <a href="https://opencollective.com/nest#backer" target="_blank">
    <img src="https://opencollective.com/nest/backers/badge.svg" alt="Apoiadores no Open Collective" />
  </a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank">
    <img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Patrocinadores no Open Collective" />
  </a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank">
    <img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Doe via PayPal" />
  </a>
  <a href="https://twitter.com/nestframework" target="_blank">
    <img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Seguir" alt="Seguir no Twitter" />
  </a>
</p>

## Descrição

Este é um repositório inicial para o [NestJS](https://github.com/nestjs/nest), um framework progressivo para Node.js que facilita a construção de aplicações escaláveis e eficientes no lado do servidor utilizando TypeScript.

## Instalação

Para começar a trabalhar com este projeto, siga os passos abaixo:

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/alexpxmort/challengue-api.git
   cd challengue-api
   ```

2. **Instale as Dependências:**

   Certifique-se de que você tenha o [Node.js](https://nodejs.org) instalado. Em seguida, execute o comando abaixo para instalar as dependências do projeto:

   ```bash
   yarn install ou npm install
   ```

## Docs

A documentação da Api esta no Swagger [Link](http://localhost:3000/api-docs)

## Configuração do Banco de Dados

Certifique-se de que você tem um banco de dados MySQL configurado. Você pode criar o banco de dados necessário usando o seguinte comando:

```sql
CREATE DATABASE api;
```

crie um arquivo .env com a configuração do seu database

e coloque como mostrado abaixo

```bash
DATABASE_URL="mysql://seu-user:sua-senha@127.0.0.1:3306/api"
```

certifique de trocar seu-user pelo seu usuário no mysql e onde esta sua-senha
pela sua senha

pode se basear no .env.example

## Migrações do Prisma

Depois de instalar as dependências e configurar o banco de dados, execute as migrações do Prisma:

```bash
npx prisma migrate dev
```

Isso aplicará todas as migrações pendentes ao banco de dados MySQL.

## Executando a Aplicação

Você pode executar a aplicação em diferentes modos:

- **Modo de Desenvolvimento:**

  Este modo fornece recarregamento automático e é útil durante o desenvolvimento.

  ```bash
  yarn start:dev ou npm run start:dev
  ```

- **Modo de Produção:**

  Este modo é otimizado para ambientes de produção.

  ```bash
  yarn start:prod ou npm run start:prod
  ```

- **Modo Padrão:**

  Este modo executa a aplicação sem recarregamento automático.

  ```bash
  yarn start ou npm start
  ```

Após isso o servidor estará disponível em `http://localhost:3000`.

## Testes

Execute os seguintes comandos para realizar diferentes tipos de testes:

- **Testes Unitários:**

  ```bash
  yarn test ou npm run test
  ```

- **Testes de Integração (E2E):**

  ```bash
  yarn test:e2e ou npm run test:e2e
  ```

- **Cobertura de Testes:**

  ```bash
  yarn test:cov ou npm run test:cov
  ```

## Suporte

O NestJS é um projeto de código aberto licenciado sob a licença MIT. Ele cresce graças ao apoio da comunidade e dos patrocinadores. Para apoiar o projeto, considere se tornar um [apoiador](https://opencollective.com/nest#backer) ou um [patrocinador](https://opencollective.com/nest#sponsor).

## Mantenha-se em Contato

- **Autor:** [Alex Pereira de Oliveira](https://www.linkedin.com/in/alex-pereira-de-oliveira-628245160/)

## Licença

O NestJS é licenciado sob a licença [MIT](LICENSE).
