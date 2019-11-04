### Saas adonisJs

## Iniciar a aplicacão :checkered_flag:

A aplicação está dividida em três partes, sendo elas: Backend, Frontend e Mobile.

## Backend

Depois de efetuar o download da aplicação, acesse a pasta `backend` e execute o comando abaixo para efetuar o download das dependências:

```console
npm install
```

_Depois renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente._

Execute o comando abaixo para criar as tabelas no banco de dados:

```console
npx adonis migration:run
```

Para rodar a aplicação esteja na pasta `backend` e execute o comando:

```console
npx adonis server --dev
```

---
