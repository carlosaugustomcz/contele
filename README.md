# Contele fullstack-junior

# Como Executar:
Clonar o projeto do repositório (GitHub),

Executar os comandos abaixo no prompt da pasta do projeto:
- Instalar as dependência necessária para executar o projeto.
    * npm install --global yarn 

- Executar comando 
    * yarn --init 

- Executar os testes
    * yarn test

- Executar o projeto em modo desenvolvimento
    * yarn dev

# Documentação dos Endpoints

Verbo: POST

Criar um Usuário

http://localhost:3333/users

Body - raw (json)

{
    "email": "carlos@teste.com.br",
    "senha": "123"
}


Verbo: GET

Listar todos os Usuários

http://localhost:3333/users


Verbo: GET

Lista um Usuário

http://localhost:3333/users/:id


Verbo: Edit

Editar um Usuário

http://localhost:3333/users/:id

{
    "email": "augustos@teste.com.br",
    "senha": "1234"
}

Verbo: DEL

Deletar um Usuário

http://localhost:3333/users/:id

Verbo: DEL

Deletar todos os Usuários

http://localhost:3333/users