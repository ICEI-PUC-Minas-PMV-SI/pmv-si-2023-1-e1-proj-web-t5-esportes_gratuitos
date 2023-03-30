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

Pedro Almeida tem 20 anos e é um universitário que só quer saber de ficar em casa e usar o vídeo game como único meio de entretenimento, além de comer besteira não se importando com a saúde, e com isso desenvolveu obesidade nivel III. mesmo sabendo que essa doença causa vários problemas como por exemplo a diabete ele não fazia nada para alterar, por isso pessoas brincavam com seu fisíco e com isso afeta seu psicológico. E apesar disso ele acompanha campeonatos de vôlei e queria aprender a jogar. para mudar isso é preciso de um lugar acessível e sociavel para que pessoas pudessem ensinar a praticar esportes e ter amizades feitas através disso. 

<br clear="left">

<img align="left" width="256" src="https://user-images.githubusercontent.com/45612016/228737884-59f40c4f-4eea-432b-8e57-5facb5800184.jpg" />

### Carlos, 32 anos

Carlos tem 32 anos e é funcionário do banco,ele  quer passar a ter hábitos saudáveis e retomar a fazer atividades físicas,quando mais novo costumava sempre jogar futebol mas com o tempo foi perdendo o costume.Carlos tem dificuldade em encontrar locais gratuitos e seguros pra se exercitar ou praticar algum esporte e pessoas que tenham o mesmo intuito.Carlos quer encontrar companhia para realizar essas atividades  e lugares que tenham uma boa estrutura e segurança

<br clear="left">
<br>

<img align="left" width="256" src="https://user-images.githubusercontent.com/45612016/228738261-76dca216-4c94-45ea-af90-44ee7919059a.jpg" />

### João de Abreu, 28 anos, solteiro, estudante universitário.

João é um apaixonado por esportes, mas como estudante universitário não tem muito dinheiro para gastar em atividades físicas. Ele está sempre procurando por opções gratuitas para se exercitar, como jogar futebol com amigos ou correr no parque. No entanto, muitas vezes ele acaba perdendo tempo procurando por lugares e horários disponíveis. João precisaria de um aplicativo que pudesse ajudá-lo a encontrar facilmente locais gratuitos para praticar esportes, com informações atualizadas sobre horários e disponibilidade.

<br clear="left">
<br>

<img align="left" width="256" src="https://user-images.githubusercontent.com/45612016/228739247-8b9278c5-fdb4-45e1-aea8-8bda1ecb7baf.jpg" />

### Maria Cecília, 35 anos, casada, mãe de dois filhos.

Maria é uma profissional ocupada que tem pouco tempo livre para praticar esportes, mas ainda assim valoriza muito um estilo de vida saudável. Ela gosta de correr e fazer yoga, mas muitas vezes tem dificuldades em encontrar horários que se encaixem em sua agenda cheia. Além disso, ela não quer gastar muito dinheiro em academias ou aulas particulares. Maria precisaria de um aplicativo que pudesse ajudá-la a encontrar opções gratuitas de atividades físicas perto de sua casa ou trabalho, com informações sobre horários, níveis de dificuldade e equipamentos necessários.

<br clear="left">
<br>

<img align="left" width="256" src="https://user-images.githubusercontent.com/45612016/228739499-3fe7b90a-760b-430b-8324-cc7962b7d83e.jpg" />

### Marcos de Alcântara, 22 anos, solteiro, recém-formado.

Marcos é um jovem que acabou de se formar na faculdade e está procurando emprego. Ele sempre foi uma pessoa ativa, praticando diversos esportes como futebol, basquete e natação. No entanto, agora que está sem dinheiro e sem plano de saúde, Marcos precisa encontrar opções gratuitas para se exercitar e manter sua saúde em dia. Ele gostaria de um aplicativo que pudesse ajudá-lo a encontrar opções gratuitas de atividades físicas perto de sua casa, com informações sobre horários e equipamentos necessários. Além disso, como ele está procurando emprego, seria útil se o aplicativo pudesse informar sobre eventos esportivos locais que ele pudesse participar para conhecer novas pessoas e fazer networking.

## Histórias de usuário

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Dr. Paulo Oliveira  | Emitir um relatório de atividades por filtros diversos | Analisar os dados para estudos |
|Dr. Paulo Oliveira  | Divulgar os resultados dos estudos | Conscientizar os usuários para os benefícios da prática de esportes  |
|João de Abreu | Encontrar locais que ofereçam atividades gratuitas perto de casa |Exercitar de forma regular e manter um estilo de vida saudável sem gastar muito dinheiro  |
|João de Abreu | Ver as avaliações de outros usuários sobre os locais de esportes gratuitos | Escolher os melhores lugares para me exercitar e evitar perder tempo em locais ruins ou mal avaliados  |
|Maria Cecília | Encontrar horários de atividades físicas gratuitas que se encaixem na minha agenda| Manter minha rotina de exercícios e cuidar da minha saúde sem prejudicar minhas obrigações profissionais e familiares   |
|Maria Cecília | Encontrar atividades físicas que sejam apropriadas para o meu nível de habilidade e condicionamento físico| Para que eu possa evitar lesões e melhorar minha performance gradualmente. |
|Marcos de Alcântara | Encontrar eventos esportivos locais | Conhecer novas pessoas e ampliar minha rede de contatos enquanto pratico atividades físicas |
|Marcos de Alcântara | Criar grupos de amigos que estejam interessados em praticar esportes juntos em locais gratuitos | Para que possamos nos motivar mutuamente e ter uma rotina regular de exercícios  |
|Carlos Maia | Encontrar locais seguros e gratuitos para se exercitar | Retomar a rotina saudável que tinha antes |
|Carlos Maia | Encontrar um grupo de amigos dispostos a acomapnhá-lo 





## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário cadastre-se na plataforma | ALTA |  |
|RF-002| Permitir que o usuário acesse a plataforma como convidado| ALTA |  |
|RF-003| Permitir que o usuário cadastre novos grupos esportivos | ALTA |  |
|RF-004| A aplicação deve ser integrada com uma API de localização | ALTA | |
|RF-005| Permitir que o usuário busque por grupos numa determinada área | ALTA | |
|RF-006| Permitir que o usuário integre seus grupos com as redes sociais | MÉDIA | |
|RF-007| Permitir que o usuário emita relatórios de atividades | MÉDIA | |
|RF-008| Permitir que o usuário avalie os grupos | MÉDIA | |
|RF-009| A aplicação deve ser acessível para todos os públicos | MÉDIA | |
|RF-010| Notificar o usuário de grupos criados em sua área | BAIXA | |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em diferentes resoluções | ALTA | 
|RNF-002| O sistema deve ser compatível com os navegadores mais utilizados | MÉDIA | 
|RNF-003| O sistema deve possuir uma interface amigável e intuitiva | MÉDIA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| A aplicação deve ser regida pela LGPD                 |
|04| A equipe de desenvolvimento está limitada a 6 integrantes |
