# Boas vindas ao repositório do projeto Trybe Wallet!

- Projeto desenvolvido com React e Redux no módulo de Front-End da Trybe

# Habilidades
Neste projeto, verificamos se voce é capaz de:

  * Criar um store Redux em aplicações React

  * Criar reducers no Redux em aplicações React

  * Criar actions no Redux em aplicações React

  * Criar dispatchers no Redux em aplicações React

  * Conectar Redux aos componentes React

  * Criar actions assíncronas na sua aplicação React que faz uso de Redux.

## O que deverá ser desenvolvido

Neste projeto você vai desenvolver uma carteira de controle de gastos com conversor de moedas, ao utilizar essa aplicação um usuário deverá ser capaz de:
  - Adicionar, remover e editar um gasto;
  - Visualizar uma tabelas com seus gastos;
  - Visualizar o total de gastos convertidos para uma moeda de escolha;

Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre Git & GitHub no Course sempre que precisar!


## Desenvolvimento

Você deve desenvolver uma aplicação em React que use Redux como ferramenta de manipulação de estado.

Através dessa aplicação, será possível realizar as operações básicas de criação e manipulação de um estado de redux.

## Documentação da API de Cotações de Moedas

Sua página _web_ irá consumir os dados da API do _awesomeapi API de Cotações_ para realizar a busca de câmbio de moedas. Para realizar essas buscas, vocês precisarão consultar o seguinte _endpoint_:

- https://economia.awesomeapi.com.br/json/all

O retorno desse endpoint será algo no formato:
```
{
   {
     "USD": {
       "code":"USD",
       "codein":"BRL",
       "name":"Dólar Comercial",
       "high":"5.6689",
       "low":"5.6071",
       "varBid":"-0.0166",
       "pctChange":"-0.29",
       "bid":"5.6173",
       "ask":"5.6183",
       "timestamp":"1601476370",
       "create_date":"2020-09-30 11:32:53"
       },
      ...
   }
}
```

Se você quiser aprender mais informações sobre a API, veja a [documentação](https://docs.awesomeapi.com.br/api-de-moedas).

# Requisitos do projeto

### Página de Login

Crie uma página para que a pessoa usuária se identifique, com email e senha. Esta página deve ser a página inicial de seu aplicativo.

  ![image](login.gif)

#### 1. Crie uma página inicial de login com os seguintes campos e características:

  * A rota para esta página deve ser ‘/’.

  * Você deve criar um local para que a pessoa usuária insira seu email e senha. Utilize o atributo `data-testid="email-input"` para o email e `data-testid="password-input"` para a senha.

  * Crie um botão com o texto ‘Entrar’.

  * Realize as seguintes verificações nos campos de email e senha, de modo que caso sejam falsas o botão fique desabilitado:

    * O email está no formato válido, como 'alguem@alguem.com'.

    * A senha possui 6 ou mais caracteres.

  * Salve o email no estado da aplicação, com a chave ***email***, assim que a pessoa usuária logar.

  * A rota deve ser mudada para '/carteira' após o clique no botão '**Entrar**'.

### Página da Carteira

Crie uma página para gerenciar a carteira de gastos em diversas moedas, e que traga a despesa total em real que é representado pelo código 'BRL'. Esta página deve ser renderizada por um componente chamado ***Wallet***.

  ![image](carteira.gif)

### Header

#### 3. Crie um header para a página de carteira contendo as seguintes características:

  * Um elemento que exiba o email da pessoa usuária que fez login.

  * Um elemento com a despesa total gerada pela lista de gastos.

  * Um elemento que mostre qual câmbio está sendo utilizado, que será neste caso será 'BRL'.

### Formulário de adição de Despesa

#### 4. Desenvolva um formulário para adicionar uma despesa contendo as seguintes características:

  * Um campo para adicionar valor da despesa.

  * Um campo para adicionar a descrição da despesa.

  * Um campo para selecionar em qual moeda será registrada a despesa.
    
  * Um campo para adicionar qual método de pagamento será utilizado.

    * Este campo deve ser um dropdown. A pessoa usuária deve poder escolher entre os campos: 'Dinheiro', 'Cartão de crédito' e 'Cartão de débito'.

  * Um campo para selecionar uma categoria (tag) para a despesa.

    * Este campo deve ser um dropdown. a pessoa usuária deve poder escolher entre os campos: 'Alimentação', 'Lazer', 'Trabalho', 'Transporte' e 'Saúde'.

  * Um botão com o texto \'Adicionar despesa\' que salva as informações da despesa no estado global e atualiza a soma de despesas no header.

    * Desenvolva a funcionalidade do botão "Adicionar despesa" de modo que ao clicar no botão, as seguintes ações sejam executadas:
    
    * Os valores dos campos devem ser salvos no estado da aplicação, na chave ***expenses***, dentro de um array contendo todos gastos que serão adicionados:

      * O `id` da despesa **deve** ser um número sequencial, começando em 0. Ou seja: a primeira despesa terá id 0, a segunda terá id 1, a terceira id 2, e assim por diante.

      * Você deverá salvar a cotação do câmbio feita no momento da adição para ter esse dado quando for efetuar uma edição do gasto. Caso você não tenha essa informação salva, o valor da cotação trazida poderá ser diferente do obtido anteriormente.

    * Após adicionar a despesa, atualize a soma total das despesas.

#### 5. Implemente a lógica para preencher as opções do campo "Moedas" buscando as siglas da API

  * A pessoa usuária deve poder escolher entre os campos: 'USD', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', 'LTC', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH' e 'XRP'.

### Tabela de Gastos

#### 6. Desenvolva uma tabela com os gastos contendo as seguintes características:

  * A tabela deve possuir um cabeçalho **exatamente** com os campos Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido e Moeda de conversão

#### 7. Implemente a lógica para que a tabela seja alimentada pelo estado da aplicação

* A tabela deve ser alimentada pelo estado da aplicação.

#### 8. Crie um botão para deletar uma despesa da tabela contendo as seguintes características:

    ![image](btnExcluir.gif)

  * Ao ser clicado, o botão deleta a linha da tabela, alterando o estado global e o header.

### Bônus

#### 9. Crie um botão para editar uma despesa da tabela contendo as seguintes características:

    ![image](btnEditar.gif)

  * O botão deve estar dentro do último item da linha da tabela e deve possuir `data-testid="edit-btn"`

  * Ao ser clicado, o botão habilita um formulário para editar a linha da tabela. Ao clicar em "Editar despesa" ela é atualizada, alterando o estado global.
  