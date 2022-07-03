# Supertest Com Cucumber

# Primeiros passos

## Configurar sua API

**Acesse a pasta SRC**

    * Na pasta SRC você vai ter a estrutura da sua API, que terá o arquivo base de App
    * o Arquivo app é consumido pelo Supertest
    * Você pode optar por colocar por URL, mas se os testes forem executados integrado com o ambiente de desenvolvimento chame por App


## Escrevendo os cenários

**Acesse a pasta features**

    * Dentro da pasta features você pode escrever seus cenários
    * Cada arquivo .feature representa um servico dentro da sua API: Exemplo: Minha API é de produtos, e tenho a parte de cadastro, listar, excluir. Portanto você tera um arquivo representando a funcionalidade dessa api.
    * Escreva os cenários de maneira que o PO e todos possam entender
    * Atue em conjunto com o desenvolvedor

## Criando comandos

**Dentro da pasta test/commands**

    * Você pode criar functions voltadas para cada contexto: create (POST), research (GET), update (PUT), delete (DELETE)
    * Cada arquivo representa uma parte do crud, o create você fica com todas functions para registrar e enviar dados
    * O research terá functions para pegar os dados e validar essa entrega
    * Os commands são uma maneira que evitar a repeticao e utilizar estruturas menores dentro do step, bem como ajudar na refatoracao

## Crie o seu step

**Após criar um command, você pode criar o step em tests/steps**

    * Cada step representa um passo escrito no arquivo .feature
    * A estrutura do step é construída pelo framework cucumber, que consegue compilar o gherkin em linguagem de programacao


## Massa de dados: Fixtures


## Help Functions: tests/helpers


# Configurando Husku

1. npm i husky -D

2. npx husky-init && npm install 

