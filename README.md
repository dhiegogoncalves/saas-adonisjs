# Saas AdonisJs / React / React Native

> Projeto SaaS de Gerenciamento de Projetos, desenvolvido com as tecnologias: Node.js + ReactJS (Redux, Saga) + React Native.

## Site

<p align="center">
    <img src="frontend/print2.png" alt="drawing" width="700"/>
</p>

## Iniciar a aplicacão :checkered_flag:

A aplicação está dividida em três partes, sendo elas: Backend, Frontend e Mobile.

## Backend

Depois de efetuar o download da aplicação, acesse a pasta `backend` e execute o comando para efetuar o download das dependências:

```console
npm install
```

_Depois renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente._

Execute o comando para criar as tabelas no banco de dados:

```console
npx adonis migration:run
```

Execute o comando para criar o `usuário admin` no banco de dados:

```console
npx adonis seed
```

_Obs: Login: `admin@email.com`, Password: `123456`._

Para rodar a aplicação esteja na pasta `backend` e execute o comando:

```console
npx adonis server --dev
```

Foi desenvolvido um Job (Queue) para enviar por email os convites. Acesse a pasta `backend` e execute o comando:

```console
npx adonis kue:listen
```

---

## Frontend

Acesse a pasta `frontend` e execute o comando para efetuar o download das dependências:

```console
yarn
```

_Depois renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente._

Para rodar a aplicação esteja na pasta `frontend` e execute o comando:

```console
yarn start
```

Em seguida, será aberto o endereço [http://localhost:3000](http://localhost:3000) em seu navegador.

---
