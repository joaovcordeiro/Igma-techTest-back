# Igma-techTest-back
<p align="center">Projeto desenvolvido para teste tecnico na Igma digital product company</p>

<!--ts-->
   * [Pré-requisitos](#Pré-requisitos)
   * [Como usar](#como-usar)
   * [Tecnologias](#tecnologias)
<!--te-->

### Features

- [x] Cadastro de usuarios
- [x] Busca de usuarios
- [x] Busca de usuarios por cpf
- [x] Validação de cpf pré-cadastro

## Pré-requisitos
Este projeto pode ser executado localmente para propositos de desenvolvimento e teste.

O projeto pode ser iniciado com npm, caso não tenha instalado em sua maquina:
* **Npm** é distribuido junto ao Node.js, portanto quando você o obtém automaticamento quando o Node é instalado. [Download Node.js](https://nodejs.org/en/download/)

### Configurando banco de dados

O projeto utiliza [PostgreSQL](https://www.postgresql.org).

É recomendavel utilizar [Docker](https://www.docker.com) para executar o banco de dados.

## Como usar

### 🎲 Rodando o Back End (servidor)

```bash
  # Clone este repositório
  $ git clone <https://github.com/joaovcordeiro/Igma-techTest-back.git>
  
  # Acesse o terminar na raiz do diretorio
  
  # Instale as dependências
  $ npm install
  
  # Excute o seguinte comando para subir o banco de dados
  $ docker-compose up --build
  
  # Após isso execute o comando para subir o servidor em modo de desenvolvimento na porta 5000
  $ npm run dev
```

### 🎲 Documentação


  # A documentação deste projeto foi feita utilizando [Swagger](https://swagger.io)
  
  Para acessa-lá entre no navegador e digite a url localhost:5000/docs
  
  # Instale as dependências
  $ npm install
  
  # Excute o seguinte comando para subir o banco de dados
  $ docker-compose up --build
  
  # Após isso execute o comando para subir o servidor em modo de desenvolvimento na porta 5000
  $ npm run dev
