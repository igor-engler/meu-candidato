# `Node.Js`

## `O que é Node.Js?`

> - O Node.Js é uma plataforma open-source, que permite a execução de código <span style="color:yellow">Javascript</span> do lado do servidor.
> - v8+libuv+conjunto de módulos

## `O que o Node.Js veio resolver?`

> - Ryan Dahl estava trabalhando em uma integração com o **flikr** e não conseguia ter acesso a barra de progresso, sem realizar uma requisição ao servidor. Percebendo que as tecnologias da época não tinham um suporte ao processo de _I/O_. Portanto o Node.Js surgiu como uma resposta a essa falta de ferramentas para lidar com _I/O_, principalmente _I/O_ assíncronos.

## `Características do Node.Js`

> - Baseado em <span style="color:LightGreen">Event Loop</span>.
>   - Call Stack
> - Single Thread.
> - Non-Blocking I/O. (Uma função não precisa necessáriamente ter terminado para que outra função seja executada)
> - Módulos Próprios
>   - http
>   - dns
>   - filesystem
>   - buffer
>   - ## ...

## **<span style="color:LightGreen">Event Loop</span>**

> - O <span style="color:LightGreen">Event Loop</span> uma função single thread que fica escutando as requisições que chegam a call stack, porém ao escutar uma nova requisição. O <span style="color:LightGreen">Event Loop</span> então acaba alocando aquela requisição em uma thread disponível no processador da máquina/servidor.
>   > - `Obs.: A call stack (Pilha de funções) utiliza o sistema FILO (First In, Last Out/Primeiro a entrar, último a sair).`

# `Gerenciadores de pacotes`

## **O que são <span style="color:Red">gerenciadores</span> de <span style="color:LightCoral">pacotes</span>?**

> - Atualmente mais utilizados atualmente são o **NPM** e o **Yarn**.
> - Instalar pacotes/dependências externas
> - Disponibilizar bibliotecas
> - Particularmente é recomendável utilizar o <span style="color:SteelBlue">**Yarn**</span>. Pois ele é mais simples de se utilizar e gerenciar as dependência. Além de ser mais rápido que o NPM.

# `Frameworks`

## `O que são Frameworks?`

> - Frameworks são um conjunto de abstrações que possibilitam a construção de recursos disponíveis na linguagem de uma maneira mais simplificada.
> - Exemplo de frameworks são: Express, Next.Js, TypeScript, **...**

# `API REST`

## `O que são API?`

> - API é um acrônimo para **Application Programming Interface** _(Interface de programação de aplicativos)_
> - Conjunto de especificações de possíveis interações entre aplicações.
> - Dentro de uma API é extremamente possuir uma documentação, descrevendo a aplicação.

## `O que é REST?`

> - Representation State Transfer _(Transferência representacional de estado)_.
> - REST é um modelo de arquitetura.
> - REST é definido por 6 regras.

### `Regras REST`

> 1. **`Client-Server`**: Basicamente o cliente consumidor da API não necessita saber detalhes de implementação do servidor. Assim como o servidor não precisa se preocupar com o que está acontecendo com o lado do cliente.
>
> > - **OBS.: O Client não precisa ser necessariamente um frontend consumindo a aplicação. Pode ser um backend por exemplo.**
>
> 2. **`Stateless`**: O cliente pode requisitar quantas requisições ele quiser, porém, o servidor não precisa armazenar nenhum estado referente a elas. Ou seja, quando o cliente requisitar alguma informação ele deve fornecer todos os parâmetros para o server atender a requisição.</br>
> 3. **`Cache`**: A aplicação deve ser construída de forma a possibilitar a implementação de sistemas de cache. Porém ela não precisa estar presente desde o inicio da construção da aplicação.
> 4. **`Interface Uniforme`**: Contrato de como o servidor e o cliente irão compartilhar informações.
>
>    - <span style="color:PaleGreen">Identificação de recursos:</span>
>      - http://enderecoservidor.com.br/products
>      - http://enderecoservidor.com.br/clients
>    - <span style="color:PaleGreen">Representação dos recursos:</span> é como o servidor irá retornar as informações requisitadas _(JSON, XML, HTML, **...**)_
>
>    - <span style="color:PaleGreen">Mensagens auto-descritivas</span>: O servidor deve retornar mensagens bem descritivas das requisições, principalmente quando ocorre algum tipo de erro
>    - <span style="color:PaleGreen">**HATEOAS** _(Hyper Text As The Engine of Application State)_</span>: Basicamente é poder entregar links dentro da resposta a uma requisição qualquer requisição.  
>      **Exemplo:**
>
>      ```json
>      {
>        "id": 1,
>        "user": "marcos",
>        "created_at": "2020-07-06",
>        "commentLink": "api/users/1/comments"
>      }
>      ```
>
> 5. **`Camadas`**: A aplicação deve ser criada em camadas. Ou seja, a aplicação deve permitir que existam camadas entre o client e o server.  
>    **Ex.: Balanceamento de cargas, segurança, entre outras.**
> 6. **`Código sob demanda` _`(Opcional)`_**: O sistema caso permita esta regra, deve permitir que as funcionalidades do cliente possam ser estendidas na forma de scripts/mini aplicativos.

# `Métodos de requisições - HTTP Verbs`

> Os métodos de requisição servem para quando estamos trabalhando com APIs, pois cada método tem sua função bem definida. Os métodos disponíveis são:
>
> 1. <span style="color:LightGreen">GET</span> - Leitura de uma informação.
> 2. <span style="color:LightGreen">POST</span> - Criação de algum objeto/informação dentro da aplicação.
> 3. <span style="color:LightGreen">PUT</span> - Atualização de informação (vários dados de um objeto/registro).
> 4. <span style="color:LightGreen">DELETE</span> - Remoção de alguma informação.
> 5. <span style="color:LightGreen">PATCH</span> - Atualização parcial de uma informação.

# `HTTP Codes`

> `HTTP Codes` são códigos numéricos que são retornados ao _Client_ após uma requisição. Para melhor informações e detalhes [HTTP Codes](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status).

## `Parâmetros das requisições`

> - <span style="color:LightGreen">**Header Params**</span>
>
> ```
>   authority: app.rocketseat.com.br
>   method: GET
>   path: /api/journey-nodes
>   referer: https://app.rockseat.com.br/node
> ```
>
> - <span style="color:LightGreen">**Query Params**</span>
>
>   - <a style="color:white">http://enderecoservidor.com.br/v1/users?</a><span style="color:LightBlue">page</span><span style="color:LightCoral">=</span><span style="color:Yellow">2</span><span style="color:Aquamarine">&</span><span style="color:LightBlue">limit</span><span style="color:LightCoral">=</span><span style="color:Yellow">50</span>
>   - <span style="color:LightBlue">Chave</span>
>   - <span style="color:Yellow">Valor</span>
>   - <span style="color:Aquamarine">Separação</span> </br></br>
>
> - ### <span style="color:LightGreen">**Route Params**</span>
>   - <a style="color:white">http://enderecoservidor.com.br/v1/users/</a><span style="color:LightCoral">**{id}**</span>
> - ### <span style="color:LightGreen">**Body Param**</span>
>   ```json
>   {
>     "name": "Marcos",
>     "username": "kyhaiu"
>   }
>   ```
>   </br>
