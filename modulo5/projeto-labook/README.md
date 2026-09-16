# Projeto: Labook

### Projeto desenvolvido por Alex Maiolino Kalawatis

#### Documentação API:

https://documenter.getpostman.com/view/20351383/UzQmxTzo

<br>

## Descrição do projeto:

O projeto tem a inspiração no Facebook, onde foi proposto desenvolver uma API que fizesse as requisições de interação dos usuários, assim como cadastro, login e produção de conteúdo.

# Endpoints

## MVP

### Cadastro
O usuario deve fornecer nome, email e password para efetuar o cadastro. Todos os campos são obrigatórios. O proprio endpoint produz um id unico para cada usuário e o mesmo criptografa a senha do usuario, por fim armazena todas as inforções do usuario em um banco de dades relacional.

### Login
O usuario deve fornecer seu email e senha para ser autentica e autorizado a utilizar os serviços da plataforma. Este endpoint fornece um token unico e aleatorio. Com este token permite-se que o usuario usufrua das funcionalidades da API.

### Criar Post
Permite ao usuario criar uma postagem, com os seguintes campos: photo, description, type e created_at. Sendo type e description obrigatorios, caso o usuario nao forneça a data de criaçao o próprio endpoint produz. Todas essas informações sao guardadas em um banco de dados. Só é permitido criar um post se o usuario estiver autorizado e autenticado.

### Buscar Post
Permite ao usuario buscar um post especifico através do id do mesmo, o id vem do path params e há a necessidade de estar autorizado e autenticado.

<br>

# Loading ...

Proximas funcionalidades estão por vir 