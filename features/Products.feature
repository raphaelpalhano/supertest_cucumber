Feature: Acessando o servico de produtos

    Rule: Como usuario, quero acessar o produto, para que eu possa: Incluir; Excluir; Pesquisar; Listar; os produtos


    @create
    Scenario: Cadastrando um produto
        Given que eu cadastro um produto "valid"
        Then deve retornar statuscode 201
        And deve conter a propriedade "sellPrice"

