#language: pt

Funcionalidade: Acessar pagina principal
    Como usuario
    Quero acessar a pagina principal do site
    Para visualizar as opcoes disponiveis

    Contexto: Acessar site do ultimateqa
    Dado que acesso o site ultimateqa

@acessarPaginaPrincipal
Cenario: Visualizar pagina principal do site
    Quando visualizo as informacoes apresentadas
    Entao sao apresentados os dados da pagina principal

@realizarPesquisaPaginaPrincipal
Cenario: Realizar pesquisas na pagina principal
    Quando realizo pesquisa atraves do "<campo_pesquisa>"
    Entao sou redirecionado para a pagina do blog

    Exemplos:
    |campo_pesquisa     |
    |Playwright         |
    |Cucumber           |

@acessarAutomationExercises
Cenario: Acessar a pagina de Automation Exercises
    Quando clico no menu Automation Exercises
    Entao sou direcionado para pagina correspondente
