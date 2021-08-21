# nodejs-meu-candidato
Clean Architecture for node.js projects

## Estrutura do Projeto 

```
src
│   main.ts         # Ponto de entrada do Backend
└───api             # Todas as rotas e middleware para todos os serviços
└───config          # Variáveis de ambiente e configurações
└───errors          # Módulo genérico responsável por receber os erros da aplicação
└───framework       # Contem todos as interfaces de acesso aos métodos de cada framework usado no projeto
└───loaders         # Divide a inicialização do backend em módulos
└───models          # Entidades
└───repositories    # Responsável por conter as operações do banco de dados de cada modelo
└───services        # Todas as regras de negócios estão aqui

```


## Começando

### Passo 1: Configurando seu ambiente de desenvolvimento

Você precisa configurar seu ambiente de desenvolvimento antes de qualquer coisa.

Baixe e Instale o [Node.js and NPM](https://nodejs.org/en/download/) OU

- no OSX use [homebrew](http://brew.sh) `brew install node`
- no Windows [chocolatey](https://chocolatey.org/) `choco install nodejs`
- no Linux `use seu gerenciador de pacotes e instale o nodejs`

### Instalar as dependências

- Instale todas as dependências com o comando `yarn install`
- Se não possuir o [yarn](https://yarnpkg.com/) rode o seguinte comando:
```
    npm install -g yarn
```

### Executando em modo desenvolvimento
 
- Execute o seguinte comando `yarn dev`
- O endereço do servidor será exibido para você no terminal, e ficará disponível no endereço [localhost:8080](http://localhost:8080)

### Buildando e executando

- Execute o seguinte comando `yarn build` para converter todos os códigos de TypeScript do projeto para JavaScript.
- O código do backend gerado ficará localizado na pasta `dist`.

Inspirado no [nodejs-boilerplate project](https://github.com/satishbabariya/nodejs-boilerplate) e no [react-clean-architecture](https://github.com/eduardomoroni/react-clean-architecture).