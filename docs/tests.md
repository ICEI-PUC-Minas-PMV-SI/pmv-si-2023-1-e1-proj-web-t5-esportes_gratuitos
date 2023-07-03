# Testes

Neste projeto serão realizados dois tipos de testes:

- O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
- O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo.

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

- [Plano de Testes de Software](#plano-de-testes-de-software)
- [Registro dos Testes de Software](#registro-dos-testes-de-software)
- [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
- [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
- [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
- [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.

|     **Caso de Teste**     | **CT01 - Criar conta**                                                                                                                                                          |
| :-----------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Usuário informa nome, idade,telefone, email e senha e clica no botão "Criar conta".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam. |
| **Requisitos associados** | RF-001                                                                                                                                                                          |
|  **Resultado esperado**   | Cadastro de usuário                                                                                                                                                             |
|   **Dados de entrada**    | Inserção de dados válidos no formulário de cadastro.                                                                                                                            |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                        |

|     **Caso de Teste**     | **CT02 - Fazer Login**                                                                                                                                                                                                                              |
| :-----------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Usuário informa seu email e a senha que foram cadastrados anteriormente,e clica em 'Entrar'.<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A aplicação direciona o usuário para a tela de mapa. |
| **Requisitos associados** | RF-002                                                                                                                                                                                                                                              |
|  **Resultado esperado**   | Login de usuário                                                                                                                                                                                                                                    |
|   **Dados de entrada**    | Inserção de dados válidos no formulário de cadastro.                                                                                                                                                                                                |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                                                            |

|     **Caso de Teste**     | **CT03 - Trocar de senha do usuário**  |
| :-----------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Usuário clica em "Esqueci minha senha" na tela de login, após isso ele informa o email cadastro e o sistema informa o código de recuperação de senha, depois disso o usuário pode mudar sua senha e realizar o login com a nova senha. |
| **Requisitos associados** | RF-001                                                                                                                                                                          |
|  **Resultado esperado**   | Mudança de senha do usuário                                                                                                                                                            |
|   **Dados de entrada**    | Inserção de dados válidos no formulário de 'Esqueci minha senha'.                                                                                                                            |
|   **Resultado obtido**    | Sucesso.                      |

|     **Caso de Teste**     | **CT04 - Criar um grupo esportivo**                                                                                                                                                                                                                              |
| :-----------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Usuário preenche o formulário de criação do grupo, selecionando o esporte, dias, horário, local, nome, descrição e se o local é acessível ou não|
| **Requisitos associados** | RF-003                                                                                                                                                                                                                                            |
|  **Resultado esperado**   | Criação do grupo esportivo                                                                                                                                                                                                                                   |
|   **Dados de entrada**    | Preencher o formulário da criação do grupo                                                                                                                                                                                                |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                                                            |

|     **Caso de Teste**     | **CT05 - Filtrar os grupos esportivos na tela e poder participar ou demonstrar interesse no grupo**      |
| :-----------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     **Procedimento**      | 1) Usuário seleciona o filtro desejado e aperta para buscar o grupo desejado de acordo com o filtro selecionado|
| **Requisitos associados** | RF-004 / RF-005                                                                                                                                                                                                                                           |
|  **Resultado esperado**   | Visualização de grupos esportivos através de algum tipo de filtro              |
|   **Dados de entrada**    | Selecionar o filtro desejado na tela de filtros                                                                                                                                                                                                |
|   **Resultado obtido**    | Sucesso.                                                                                                                                                                                                                                            |

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

| _Caso de Teste_                   | **\*CT01 - Criar conta**                                                                             |
| --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Requisito Associado               | RF-001 - Permitir que o usuário cadastre-se na plataforma                                            |
| Link do vídeo do teste realizado: | https://www.loom.com/share/4952ac8fe8bd4590aead0c5bbc001431?sid=1daeba0c-4356-4da2-b89a-a8babda40dcb |

| _Caso de Teste_                   | **CT02 - Fazer login**                                                                               |
| --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Requisito Associado               | RF-002 - Permitir que o usuário faça login na plataforma como usuário cadastrado ou convidado        |
| Link do vídeo do teste realizado: | https://www.loom.com/share/c4801b63583a4caf8907d0e0e4a61d7d?sid=216e6102-e606-4980-aa3f-ab3d5ccd7423 |

| _Caso de Teste_                   | **CT03 - Trocar de senha do usuário**                                                                               |
| --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Requisito Associado               | RF-002 - Permitir que o usuário faça login na plataforma como usuário cadastrado ou convidado        |
| Link do vídeo do teste realizado: | https://www.loom.com/share/788bba7e719646cf88ab01aaaeb3e0de?sid=efeb2b3d-5c5b-4938-8131-8a113ce435e1 |

| _Caso de Teste_                   | **CT04 - Criar um grupo esportivo**                 |
| --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Requisito Associado               | RF-003 - Permitir que o usuário (cadastrado) registre novos grupos esportivos, indicando local, horário, acessibilidade, entre outras informações        |
| Link do vídeo do teste realizado: | https://www.loom.com/share/40b3b54df1f54216b786c7005e1f2390?sid=b68a4dc7-7106-4064-977b-7cd84580567d |

| _Caso de Teste_                   | **CT05 - Filtrar os grupos esportivos na tela**   |
| --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Requisito Associado               | RF-004 - Permitir que o usuário busque por grupos esportivos, delimitando por modalidade, acessibilidade e/ou distância / RF-005 - Permitir que o usuário (cadastrado) demonstre interesse em determinado esporte      |
| Link do vídeo do teste realizado: | https://www.loom.com/share/ba5021de00d84a6dab3c3a094aa9192e?sid=809255c7-54ca-4e76-b324-8f0f11340e6b |


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo;
2. Ruim;
3. Regular;
4. Bom;
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário                                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 1             | Você é uma pessoa que deseja criar uma nova conta para participar de grupos esportivos na sua região. Entre no site, cadastre seus dados, crie sua conta e faça login com dados cadastrados. |
| 2            | Você é uma pessoa que quer criar um grupo em sua região para poder encontrar pessoas que gostem do mesmo esporte que você, crie um grupo esportivo do seu gosto e veja ele disponível no mapa |
| 3           | Você quer saber quais grupos esportivos já criados em sua região possuem algum tipo de acessibilidade para pessoas com deficiência, filtre os grupos através da aba de filtros ao apertar o ícone na barra de pesquisa |


## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja criar uma nova conta para participar de grupos esportivos na sua região. Entre no site, cadastre seus dados, crie sua conta e faça login com dados cadastrados.

| Usuário                                    | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
| ------------------------------------------ | --------------- | -------------------- | ------------------------------- |
| 1                                          | SIM             | 5                    | 1:57.81 minutos                 |
| 2                                          | SIM             | 5                    | 53.58 segundos                  |
| 3                                          | SIM             | 5                    | 58.27 segundos                  |
|                                            |                 |                      |                                 |
| **Média**                                  | 100%            | 5                    | 89 segundos                  |
| **Tempo para conclusão pelo especialista** | SIM             | 5                    | 8.66 segundos                   |

    Comentários dos usuários: Cadastro é fácil e prático de fazer;
    Gostei da interface do projeto e também da agilidade e praticidade ao criar a conta e fazer o login;
    tem uma interface agradável, é simples e prático
    
Cenário 2: Você é uma pessoa que quer criar um grupo em sua região para poder encontrar pessoas que gostem do mesmo esporte que você, crie um grupo esportivo do seu gosto e veja ele disponível no mapa

| Usuário                                    | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
| ------------------------------------------ | --------------- | -------------------- | ------------------------------- |
| 1                                          | SIM             | 5                    | 1:20.15 minuto                |
| 2                                          | SIM             | 4                    | 2:30.32 minutos                 |
| 3                                          | SIM             | 5                    | 1:15.47 minuto                  |
|                                            |                 |                      |                                 |
| **Média**                                  | 100%            | 5                    | 1:40 minuto                 |
| **Tempo para conclusão pelo especialista** | SIM             | 5                    | 18.6 segundos                   |

    Comentários dos usuários: Tela limpa e intuitiva;
    Fácil acesso para poder criar grupos personalizados;
    Boa visualização do grupo criado no mapa;

Cenário 3: Você quer saber quais grupos esportivos já criados em sua região possuem algum tipo de acessibilidade para pessoas com deficiência, filtre os grupos através da aba de filtros ao apertar o ícone na barra de pesquisa

| Usuário                                    | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
| ------------------------------------------ | --------------- | -------------------- | ------------------------------- |
| 1                                          | SIM             | 5                    | 20.54 segundos                |
| 2                                          | SIM             | 5                    | 19.32 segundos                  |
| 3                                          | SIM             | 5                    | 14.07 segundos                  |
|                                            |                 |                      |                                 |
| **Média**                                  | 100%            | 5                    | 18 segundos                  |
| **Tempo para conclusão pelo especialista** | SIM             | 5                    | 6.21 segundos                   |

    Comentários dos usuários: Muito fácil de fazer o filtro;
    Filtro bem feito e fácil visualização no mapa;
    


## Avaliação dos Testes de Usabilidade

De acordo com os resultados obtidos, a aplicação web apresenta boas soluções para os problemas propostos, contendo apenas alguns ajustes a serem feitos, como tornar possível a visualização da senha do usuário enquanto ele digita sua senha nos formulários de cadastro e login, mas o resultados foram positivos tendo em vista os testes de usabilidade com usuários reais e tendo suas respectivas taxas de sucesso com um resultado positivo

Os resultados obtidos tiveram algumas diferenças em relação ao tempo em que o usuário levou para conseguir realizar o teste proposto, porém é importante ressaltar que os usuários tinham idades bem diferentes e possuíam backgrounds tecnológicos muito diferentes também, o que pode ter acarretado nessa diferença do tempo da realização do teste.

Mas no geral os resultados obtidos foram muito positivos, tendo em vista que as notas dadas pelos usuários foram altas (entre 4 e 5) e que também os comentários feitos pelos usuários foram de suma importância para a melhoria de certos aspectos do projeto e também para futuras melhorias que o projeto posssa sofrer.
