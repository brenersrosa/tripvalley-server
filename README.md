# Tripvalley

## Descrição

Projeto desenvolvido para divulgação e venda de pacotes de viagens com foco no Vale do Paraíba e Litoral Norte.

## Requisitos

Antes de iniciar a instalação e configuração do projeto, verifique se o seu sistema atende aos seguintes requisitos:

- Node.js (versão 18.16.0 ou superior)
- NPM (Node Package Manager) ou Yarn

## Instalação

Siga os passos abaixo para instalar e configurar o projeto em sua máquina local:

1. **Clone o repositório**:
    
    ```bash
    git clone https://github.com/brenersrosa/tripvalley-server
    ```
    
2. **Acesse o diretório do projeto**:
    
    ```bash
    cd tripvalley-server
    ```
    
3. **Instale as dependências**:
    
    ```bash
    npm install
    ```
    
    ou, se estiver usando Yarn:
    
    ```bash
    yarn install
    ```
    

## Configuração

1. **Crie um arquivo de configuração**:
    
    No diretório raiz do projeto, crie um arquivo chamado `.env` seguindo o modelo de `.env.example` e defina as variáveis de ambiente necessárias para o projeto. Exemplo:
    
    ```
    DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/<DATABASE_NAME>"
    
    PORT=""
    ```
    
    Obs.:
    
    `USER:PASSWORD`: credenciais de acesso ao banco de dados local.
    
    `HOST:PORT` : IP e porta de acesso configuradas no MySQL.
    
    `DATABASE_NAME` : nome do banco que deseja criar.


2. **Criar banco de dados com o Prisma**:

    Após a configuração do `.env`, é necessário criar o banco de dados usando o seguinte comando:

    ```bash
    npx prisma migrate dev
    ```
    
    Este comando irá criar a base de dados e executar o arquivo `seed.ts` para popular o banco com os dados de usuários.

3. **Visualizar o banco de dados com o Prisma**:

    Após a criação do banco de dados, é possível visualizar os dados e tabelas a partir do seguinte comando:

    ```bash
    npx prisma studio
    ```

## Execução

Após a instalação e configuração do projeto, você pode executá-lo usando o seguinte comando:

```bash
npm run dev
```

ou, se estiver usando Yarn:

```bash
yarn dev
```

Isso iniciará o servidor e o projeto estará acessível no seu navegador no endereço `http://localhost:3333` (ou a porta definida na variável de ambiente `PORT`).

## Licença

Este projeto está licenciado sob a **[MIT License](https://opensource.org/license/mit/).**