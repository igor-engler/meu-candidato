# **Aplicativo Meu Candidato (Deputados Federais)**

## **Objetivo do aplicativo**

    O intuito do aplicativo Meu Candidato será, possibilitar que o eleitor possa acompanhar candidatos
    de seu interesse. Exercendo assim seu papel democrático na sociedade, fiscalizando, cobrando e sugerindo propostas de lei.

## **Requisitos do aplicativo**

> ### **Requisitos Funcionais:**
>
> - **RF01:** O eleitor poderá se cadastrar no aplicativo utilizando seu email e uma senha de sua escolha.
> - **RF02:** O eleitor poderá realizar o cadastro com alguma mídia social (Facebook, Twitter, ...).
> - **RF03:** O eleitor poderá consultar a lista de deputados federais eleitos.
> - **RF04:** O eleitor poderá favoritar um ou mais deputados de seu interesse.
> - **RF05:** O eleitor poderá remover um ou mais deputados de sua lista de favoritos.
> - **RF06:** O eleitor poderá consultar os gastos mensais dos deputados (favoritados ou não).
> - **RF07:** O eleitor poderá consultar as propostas dos deputados (favoritados ou não).
> - **RF08:** O eleitor poderá consultar os projetos de lei votados pelos deputados (favoritados ou não).
> - **RF09:** O eleitor poderá consultar os eventos ocorridos ou previstos nos diversos órgãos da câmara.
> - **RF10:** O eleitor poderá consultar os partidos que ocupam cadeiras na camará dos deputados federais.
> - **RF11:** O eleitor poderá enviar uma mensagem (Cobranças, esclarecimentos, elogios, reclamações, ...) ao e-mail institucional do deputado federal de sua escolha.
> - **RF12:** O eleitor poderá solicitar a exclusão de sua conta do aplicativo a qualquer momento. Não deixando nenhuma informação residual, tanto no celular do eleitor, quanto na base de dados do aplicativo.

## **Tecnologias**

    O aplicativo contará com uma interface gráfica (frontend) e um servidor (backend).

    - O backend será desenvolvido em Javascript+TypeScript utilizando o Node.js.
    - O frontend será desenvolvido em React Native+TypeScript com o auxilio do Expo para a exibição do app em tempo real.
    - Para a criação dos testes unitários será utilizado o framework Jest.

> - O **_Backend_** ficará responsável por gerenciar as requisições dos usuários, armazenar os dados e preferencias de cada usuário cadastrado no sistema.
> - O **_Frontend_** ficará responsável por exibir as informações retornadas do **_Backend_**.

## **Dependências**
>
> - <a href="https://www.npmjs.com/package/express">Express</a>
> - <a href="https://www.npmjs.com/package/firebase">Firebase</a> </br>
> - <a href="https://www.npmjs.com/package/nodemon">Nodemon</a> </br>
> - <a href="https://www.npmjs.com/package/dotenv">Dotenv</a> </br>
> - **Mais dependências virão no decorer do projeto** </br></br>

> ### **Dependências de desenvolvimento**
>
> - <a href="https://www.typescriptlang.org/docs/">Typescript</a>
> - <a href="https://www.npmjs.com/package/ts-node-dev">ts-node-dev</a> </br>
> - <a href="https://www.npmjs.com/package/@types/express">@types/express</a> </br>
> - <a href="https://typedoc.org/api/">Typedoc</a>
> - **Mais dependências virão no decorer do projeto** </br>
> - **Obs.:** Recomendamos que o gerenciador de pacotes utilizado seja o **Yarn**. Porém o desenvolvedor é livre na escolha de **_ferramentas/frameworks_**.
