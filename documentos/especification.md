# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

<img align="left" width="256" src="https://user-images.githubusercontent.com/45612016/228673629-7ec6e2ea-3a5c-4158-a64d-591d6f3df014.jpg" />

### Dr. Paulo Oliveira, 45 anos

Dr. Paulo Oliveira é um pesquisador renomado em sua área, que se dedica à pesquisa de doenças crônicas não transmissíveis, como obesidade, diabetes e doenças cardiovasculares. Ele trabalha em uma grande instituição que tem como objetivo melhorar a saúde da população através de pesquisas científicas. Está buscando informações que corroborem com suas pesquisas, permitindo que ele analise como a participação em atividades físicas e esportivas podem ajudar a prevenção de doenças.

<br clear="left">
<br/>
<img align="left" width="256" src="https://user-images.githubusercontent.com/85028195/228701554-a446aeba-383a-4443-818a-fe51742e4867.jpg" />

### Ana Júlia, 17 anos

Ana júlia é estudante de ensino médio e gosta de praticar esportes, principalmente futebol, mas não consegue praticar esse esporte com muita frequência porque não conhece outras meninas que também gostem de praticar futebol, outra dificuldade de Ana Júlia é achar um local que seja seguro para ela praticar esportes, sem que se sinta ameaçada de alguma forma ou seja assediada em algum momento.

<br clear="left">
<br/>
<img align="left" width="256" src="https://this-person-does-not-exist.com/img/avatar-gen0ec119bba47709ffaca6c0f80c9cd71c.jpg" />

### Pedro Almeida, 20 anos

Pedro Almeida tem 20 anos e é um universitário que só quer saber de ficar em casa e usar o vídeo game como único meio de entretenimento, além de comer besteira não se importando com a saúde, e com isso desenvolveu obesidade nivel III. mesmo sabendo que essa doença causa vários problemas como por exemplo a diabete ele não fazia nada para alterar, por isso pessoas brincavam com seu fisíco e com isso afeta seu psicológico. E apesar disso ele acompanha campeonatos de vôlei e queria aprender a jogar. para mudar isso é preciso de um lugar acessível e sociavel para que pessoas pudessem ensinar a praticar esportes e ter amizades feitas através disso. 

### Carlos,32 anos

Carlos tem 32 anos e é funcionário do banco,ele  quer passar a ter hábitos saudáveis e retomar a fazer atividades físicas,quando mais novo costumava sempre jogar futebol mas com o tempo foi perdendo o costume.Carlos tem dificuldade em encontrar locais gratuitos e seguros pra se exercitar ou praticar algum esporte e pessoas que tenham o mesmo intuito.Carlos quer encontrar companhia para realizar essas atividades  e lugares que tenham uma boa estrutura e segurança

### João, 28 anos, solteiro, estudante universitário.

João é um apaixonado por esportes, mas como estudante universitário não tem muito dinheiro para gastar em atividades físicas. Ele está sempre procurando por opções gratuitas para se exercitar, como jogar futebol com amigos ou correr no parque. No entanto, muitas vezes ele acaba perdendo tempo procurando por lugares e horários disponíveis. João precisaria de um aplicativo que pudesse ajudá-lo a encontrar facilmente locais gratuitos para praticar esportes, com informações atualizadas sobre horários e disponibilidade.

### Maria, 35 anos, casada, mãe de dois filhos.

Maria é uma profissional ocupada que tem pouco tempo livre para praticar esportes, mas ainda assim valoriza muito um estilo de vida saudável. Ela gosta de correr e fazer yoga, mas muitas vezes tem dificuldades em encontrar horários que se encaixem em sua agenda cheia. Além disso, ela não quer gastar muito dinheiro em academias ou aulas particulares. Maria precisaria de um aplicativo que pudesse ajudá-la a encontrar opções gratuitas de atividades físicas perto de sua casa ou trabalho, com informações sobre horários, níveis de dificuldade e equipamentos necessários.

### Pedro, 22 anos, solteiro, recém-formado.

Pedro é um jovem que acabou de se formar na faculdade e está procurando emprego. Ele sempre foi uma pessoa ativa, praticando diversos esportes como futebol, basquete e natação. No entanto, agora que está sem dinheiro e sem plano de saúde, Pedro precisa encontrar opções gratuitas para se exercitar e manter sua saúde em dia. Ele gostaria de um aplicativo que pudesse ajudá-lo a encontrar opções gratuitas de atividades físicas perto de sua casa, com informações sobre horários e equipamentos necessários. Além disso, como ele está procurando emprego, seria útil se o aplicativo pudesse informar sobre eventos esportivos locais que ele pudesse participar para conhecer novas pessoas e fazer networking.

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA |  |
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)