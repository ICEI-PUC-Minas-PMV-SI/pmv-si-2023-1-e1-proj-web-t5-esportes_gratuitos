# Especificações do Projeto

O projeto se baseia numa aplicação para solucionar um problema muito comum no Brasil e no mundo inteiro, o sedentarismo e a obesidade, onde o usuário pode ver áreas onde ocorrem práticas de esportes de seu interesse em sua cidade e assim pode se juntar a essas pessoas sem pagar por isso, as áreas de atividades também oferecem informações sobre acessibilidade, tornando a aplicação ainda mais inclusiva. 

5 personas foram criadas para que os problemas e as soluções ficassem mais claras e a partir disso apresentar uma aplicação web que realmente seja útil para as pessoas que sofrem com problemas de saúde por conta de obesidade, que são sedentárias ou que simplesmente gostam de manter uma rotina saudável e um corpo ativo.


## Personas

<br>

<img align="left" width="256" src="https://user-images.githubusercontent.com/45612016/228673629-7ec6e2ea-3a5c-4158-a64d-591d6f3df014.jpg" />

### Paulo Oliveira, 45 anos

Paulo Oliveira é um agente público que trabalha em uma cidade com cerca de 500 mil habitantes. Ele é formado em administração pública e tem experiência em desenvolvimento de políticas públicas voltadas para a área de saúde. Paulo está sempre em busca de soluções inovadoras para melhorar a qualidade de vida da população. No momento ele busca informações que possam ajudá-lo a entender melhor a demanda por atividades físicas e esportivas na cidade, a fim de desenvolver políticas públicas que incentivem a prática dessas atividades e melhorem a saúde da população.

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

### João de Abreu, 28 anos

João é um apaixonado por esportes, mas como estudante universitário não tem muito dinheiro para gastar em atividades físicas. Ele está sempre procurando por opções gratuitas para se exercitar, como jogar futebol com amigos ou correr no parque. No entanto, muitas vezes ele acaba perdendo tempo procurando por lugares e horários disponíveis. João precisaria de um aplicativo que pudesse ajudá-lo a encontrar facilmente locais gratuitos para praticar esportes, com informações atualizadas sobre horários e disponibilidade.

<br clear="left">

<br>

<img align="left" width="256" src="https://img.freepik.com/fotos-gratis/retrato-do-professor-mais-velho-posando-isolado-no-branco_155003-41567.jpg" />

### Joaquim Carlos Martins, 58 anos

Joaquim Carlos Martins é um escritor português, ele tinha 20 anos de idade quando sofreu um acidente que prejudicaram a mobilidade de suas mãos, logo após, devido a problemas físicos precisou mudar pra EUA. Com dificuldades de adaptação na nova cidade ele travava lutas diárias, seu medico recomendou praticar atividades físicas para avanço de seu tratamento, com objetivo de adotar hábitos saudáveis no seu dia a dia Joaquim procura meios de informações quem disponibilizam locais acessíveis para PCD.


## Histórias de usuário

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Paulo Oliveira  | Emitir um relatório de demanda por atividades físicas solicitadas pela população | Analisar os dados e elaborar políticas públicas pertinentes |
|Paulo Oliveira  | Divulgar novas atividades esportivas ofertadas gratuitamente | Disponibilizá-las para a população |
|João de Abreu | Encontrar locais que ofereçam atividades gratuitas perto de casa | Exercitar de forma regular e manter um estilo de vida saudável sem gastar muito dinheiro  |
|João de Abreu | Ver as avaliações de outros usuários sobre os locais de esportes gratuitos | Escolher os melhores lugares para me exercitar e evitar perder tempo em locais ruins ou mal avaliados  |
|Ana Júlia | Encontrar outras meninas que possuem os mesmos gostos para esportes do que ela e encontrar locais seguros para qualquer mulher praticar esportes | praticar seus esportes favoritos e manter uma rotina saudável
|Joaquim Carlos Martins | Encontrar lugares acessíveis para PCD praticar atividade física | utilizar o esporte como qualidade de vida |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF&#x2011;001| Permitir que o usuário cadastre-se na plataforma | ALTA |  |
|RF-002| Permitir que o usuário faça login na plataforma como usuário cadastrado ou convidado | ALTA |  |
|RF-003| Permitir que o usuário (cadastrado) registre novos grupos esportivos, indicando local, horário, acessibilidade, entre outras informações | ALTA |  |
|RF-004| Permitir que o usuário busque por grupos esportivos, delimitando por modalidade, acessibilidade e/ou distância | ALTA | |
|RF-005| Permitir que o usuário (cadastrado) demonstre interesse em determinado esporte | ALTA | |
|RF-006| A aplicação deve ser acessível para todos os públicos | ALTA | |
|RF-007| Permitir que o usuário (cadastrado) gere demanda de esportes | MÉDIA | |
|RF-008| Permitir que o usuário (cadastrado) avalie os grupos | MÉDIA | |
|RF-009| Notificar o usuário de grupos criados em sua área | BAIXA | |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|---------|-------------------------|----|
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
