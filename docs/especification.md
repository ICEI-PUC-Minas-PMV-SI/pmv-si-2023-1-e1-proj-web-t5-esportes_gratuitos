# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

<br>

<img align="left" width="256" src="https://user-images.githubusercontent.com/45612016/228673629-7ec6e2ea-3a5c-4158-a64d-591d6f3df014.jpg" />

### Dr. Paulo Oliveira, 45 anos

Dr. Paulo Oliveira é um pesquisador renomado em sua área, que se dedica à pesquisa de doenças crônicas não transmissíveis, como obesidade, diabetes e doenças cardiovasculares. Ele trabalha em uma grande instituição que tem como objetivo melhorar a saúde da população através de pesquisas científicas. Está buscando informações que corroborem com suas pesquisas, permitindo que ele analise como a participação em atividades físicas e esportivas podem ajudar a prevenção de doenças.

<br clear="left">
<br>
 
<img align="left" width="256" src="https://user-images.githubusercontent.com/85028195/228701554-a446aeba-383a-4443-818a-fe51742e4867.jpg" />

### Ana Júlia, 17 anos

Ana júlia é estudante de ensino médio e gosta de praticar esportes, principalmente futebol, mas não consegue praticar esse esporte com muita frequência porque não conhece outras meninas que também gostem de praticar futebol, outra dificuldade de Ana Júlia é achar um local que seja seguro para ela praticar esportes, sem que se sinta ameaçada de alguma forma ou seja assediada em algum momento.

<br clear="left">
<br>

<img align="left" width="256" src="https://this-person-does-not-exist.com/img/avatar-gen0ec119bba47709ffaca6c0f80c9cd71c.jpg" />

### Pedro Almeida, 20 anos

Pedro Almeida tem 20 anos e é um universitário que só quer saber de ficar em casa e usar o vídeo game como único meio de entretenimento, além de comer besteira não se importando com a saúde, e com isso desenvolveu obesidade nivel III. mesmo sabendo que essa doença causa vários problemas como por exemplo a diabete ele não faz nada para alterar, por isso pessoas brincam com seu fisíco e isso afeta seu psicológico. E apesar disso ele acompanha campeonatos de vôlei e quer aprender a jogar. para mudar isso é preciso de um lugar acessível e sociavel para que pessoas pudessem ensinar a praticar esportes e ter amizades feitas através disso. 

<br clear="left">


<img align="left" width="256" src="https://user-images.githubusercontent.com/45612016/228738261-76dca216-4c94-45ea-af90-44ee7919059a.jpg" />

### João de Abreu, 28 anos, solteiro, estudante universitário.

João é um apaixonado por esportes, mas como estudante universitário não tem muito dinheiro para gastar em atividades físicas. Ele está sempre procurando por opções gratuitas para se exercitar, como jogar futebol com amigos ou correr no parque. No entanto, muitas vezes ele acaba perdendo tempo procurando por lugares e horários disponíveis. João precisaria de um aplicativo que pudesse ajudá-lo a encontrar facilmente locais gratuitos para praticar esportes, com informações atualizadas sobre horários e disponibilidade.

<br clear="left">
<br>

## Histórias de usuário

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Dr. Paulo Oliveira  | Emitir um relatório de atividades por filtros diversos | Analisar os dados para estudos |
|Dr. Paulo Oliveira  | Divulgar os resultados dos estudos | Conscientizar os usuários para os benefícios da prática de esportes  |
|João de Abreu | Encontrar locais que ofereçam atividades gratuitas perto de casa |Exercitar de forma regular e manter um estilo de vida saudável sem gastar muito dinheiro  |
|João de Abreu | Ver as avaliações de outros usuários sobre os locais de esportes gratuitos | Escolher os melhores lugares para me exercitar e evitar perder tempo em locais ruins ou mal avaliados  |
|Ana Júlia | Encontrar outras meninas que possuem os mesmos gostos para esportes do que ela e encontrar locais seguros para qualquer mulher praticar esportes | praticar seus esportes favoritos e manter uma rotina saudável
|Pedro Almeida | Encontrar lugares que possa aprender a praticar esportes | utilizar o esporte como estratégia de emagrecimento |




## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário cadastre-se na plataforma | ALTA |  |
|RF-002| Permitir que o usuário faça login na plataforma como usuário cadastrado ou convidado | ALTA |  |
|RF-003| Permitir que o usuário (cadastrado) registre novos grupos esportivos, indicando local,horário e acessibilidade| ALTA |  |
|RF-004| Permitir que o usuário busque por grupos numa determinada área | ALTA | |
|RF-005| Permitir que o usuário (cadastrado) demonstre interesse em determinado esporte | ALTA | |
|RF-006| Permitir que o usuário (cadastrado) integre seus grupos com as redes sociais | MÉDIA | |
|RF-007| Permitir que o usuário (cadastrado) emita relatórios de demanda de esportes | MÉDIA | |
|RF-008| Permitir que o usuário (cadastrado) avalie os grupos | MÉDIA | |
|RF-009| A aplicação deve ser acessível para todos os públicos | MÉDIA | |
|RF-010| Notificar o usuário de grupos criados em sua área | BAIXA | |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em diferentes resoluções | ALTA | 
|RNF-002| O sistema deve ser compatível com os navegadores mais utilizados | ALTA | 
|RNF-003| O sistema deve possuir uma interface amigável e intuitiva | ALTA | 
|RNF-004| A aplicação deve ser integrada com uma API de localização | ALTA | 
|RNF-005| A aplicação deve ser integrada com uma API de redes sociais | MÉDIA | 
|RNF-006| A aplicação deve ser regida pela LGPD | ALTA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| A equipe de desenvolvimento está limitada a 6 integrantes |
