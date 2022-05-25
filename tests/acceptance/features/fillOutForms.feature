#language: pt

Funcionalidade: Validar envio de email
    Como usuario
    Quero realizar o envio do email
    Para enviar as informacoes necessarias

    Contexto: Encaminhar email corretamente 
    Dado que acesso a pagina Fill out forms

    @preencherCampoEmailCorretamente
    Cenario: Envio de email realizado com sucesso
    Quando preencho os campos "<first_name>", "<first_message>", "<second_name>", "<second_message>" corretamente
    Entao o email e enviado com sucesso conforme "<message>"

    Exemplos:
    |first_name     |first_message              |second_name    |second_message             |message                    |
    |Primeiro Nome  |Esse é o primeiro texto    |Segundo Nome   |Esse e o segundo texto     |Thanks for contacting us   |


    