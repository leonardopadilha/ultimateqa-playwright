#language: pt

Funcionalidade: Validar links de acesso do ultimateqa
    Como usuario
    Quero acessar a tela de automation
    Para visualizar as opçcoes de treinamento  em automacao

    Contexto: Clicar nos links de acesso do ultimateqa na tela de automation
    Dado que acesso a tela automation do site ultimateqa

    @validarRedirecionamentoDeLinks
    Cenario: Validar redirecionamento dos links de acesso do ultimateqa na tela de automation
    Quando clico no link "<link_acesso>"
    Entao o redirecionamento para a "<link_acesso>" ocorre com sucesso

    Exemplos:
    |link_acesso                                                    |
    |Big page with many elements                                    |
    |Fake Landing Page                                              |
    |Fake Pricing Page                                              |
    |Fill out forms                                                 |
    |Learn how to automate an application that evolves over time    |
    |Login automation                                               |
    |Interactions with simple elements                              |