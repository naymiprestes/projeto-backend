# Projeto Banck-end - Contatos

O projeto é referente a criação de contatos, onde o usuário precisa criar uma conta, para conseguir logar e acessar sua dashboard e ssim cadastrar seus contatos.

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/naymiprestes/projeto-backend
```

Entre no diretório do projeto

```bash
  cd projeto-backend
```

Instale as dependências

```bash
  yarn install
```

Inicie o servidor

```bash
  yarn dev
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as variáveis de ambiente no seu .env. Estão disponiveis na raíz do projeto em `.env.example`

## Rodando as migratons

Para os dados permaceream no banco de dados é necessário gerar as migrations

- Para os dados serem gerados:

```bash
  yarn typeorm migration:generate src/migrations/createUser -d src/data-source
```

- Após serem criados, os dados precisam permanecer no banco:

```bash
  yarn typeorm migration:run -d src/data-source
```

Inicie o servidor

```bash
  yarn dev
```

## Funcionalidades

- Cadastro de usuário
- Informações de dados do usuário
- Editar informações do usuário
- Excluir conta do usuário
- Login
- Cadastro de contato
- Informações de dados do contato
- Editar informações do contato

- Excluir conta do contato
