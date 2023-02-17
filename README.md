# Igma-techTest-back
<p align="center">Projeto desenvolvido para teste tecnico na Igma digital product company</p>

<!--ts-->
   * [Pré-requisitos](#pré-requisitos)
   * [Como usar](#como-usar)
   * [Documentação](#documentação)
   * [Testes de integração](#testes-de-integração)
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
  $ git clone https://github.com/joaovcordeiro/Igma-techTest-back.git
  
  # Acesse o terminar na raiz do diretorio
  
  # Instale as dependências
  $ npm install
  
  # Excute o seguinte comando para subir o banco de dados
  $ docker-compose up -d --build
  
  # Após isso execute o comando para subir o servidor em modo de desenvolvimento na porta 5000
  $ npm run dev
```

## Documentação

   A documentação deste projeto foi feita utilizando [Swagger](https://swagger.io)
  
  Para acessa-lá entre no navegador e digite a url localhost:5000/docs com o servidor rodando, verá esta tela:
  
  <h1 align="center">
  <img alt="Swagger" title="#Swagger" src="/assets/swagger.png" />
  </h1>
  
  Nesta tela é possivel testar os endpoints e funcionalidades sem a necessidade de outros softwares.
  
## Testes de integração
  Para rodar os testes da aplicação, com o servidor rodando:
  
```bash
  # Em um terminal na raiz do projeto, execute o comando
  $ npm run test
  
```

## Tecnologias
<div  align="center" style="display: flex-start"><br>
  <div>Typescript <img align="center" alt="Joao-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"></div>
   <div>NodeJs <img align="center" alt="Joao-Node" height="30" width="40" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" /></div>
   <div>Jest <img align="center" alt="Joao-Jest" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"></div>
   <div>Postgresql  <img align="center" alt="Joao-Postgres" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" /></div>
<div>Swagger  <img align="center" alt="Joao-Docker" height="30" width="40" src="https://user-images.githubusercontent.com/25181517/186711335-a3729606-5a78-4496-9a36-06efcc74f800.png" /></div>
  <div>Docker   <img align="center" alt="Joao-Docker" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" />
</div>
  
  
  
 
 
  
</div>
