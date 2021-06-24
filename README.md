# **Aplicativo Meu Candidato (Deputados Estaduais)**

## **Objetivo do aplicativo**

    O intuito do aplicativo Meu Candidato será, possibilitar que o eleitor possa acompanhar candidatos de seu interesse. Exercendo assim seu papel democratico na sociedade, fiscalizando, cobrando e sugerindo propostas de lei.  

## **Requisitos do aplicativo**

> ### **Requisitos Funcionais:**  
> - **RF01:** O eleitor poderá se cadastrar no aplicativo utilizando seu email e uma senha de sua escolha.
> - **RF02:** O eleitor poderá realizar o cadastro com alguma mídia social (Facebook, Twitter, ...).
> - **RF03:** O eleitor poderá consultar a lista de deputados federais eleitos.
> - **RF04:** O eleitor poderá favoritar um ou mais deputados de seu interesse.
> - **RF05:** O eleitor poderá consultar os gastos mensais dos deputados (favoritados ou não).
> - **RF06:** O eleitor poderá consultar as propostas dos deputados (favoritados ou não).
> - **RF07:** O eleitor poderá consultar os projetos de lei votados pelos deputados (favoritados ou não).
> - **RF08:** O eleitor poderá consultar os eventos ocorridos ou previstos nos diversos orgãos da câmara.
> - **RF09:** O eleitor poderá consultar os partidos que ocupam cadeiras na camara dos deputados federais.
> - **RF10:** O eleitor poderá enviar uma mensagem (Cobranças, esclarecimentos, elogios, reclamações, ...) ao e-mail institucional do deputado federal de sua escolha.
    

## **Tecnologias**

    O aplicativo contará com uma interface gráfica (frontend) e um servidor (backend).

    - O backend será desenvolvido em Javascript+TypeScript utilizando o Node.js.
    - O frontend será desenvolvido em React Native+TypeScript com o auxilio do Expo para a exibição do app em tempo real.
    - Para a criação dos testes unitários será utilizado o framework Jest.

> - O ***Backend*** ficará responsável por gerenciar as requisições dos usuários, armazenar os dados e preferencias de cada usuário cadastrado no sistema.
> - O ***Frontend*** ficará responsável por exibir as informações retornadas do ***Backend***.