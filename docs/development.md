# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |Artefato Criado |
|------|-----------------------------------------|----| ----|----|
|RF&#x2011;001| Permitir que o usuário cadastre-se na plataforma | ALTA | Bruno | /cadastro | 
|RF&#x2011;001| Permitir que o usuário cadastre-se na plataforma | ALTA | Gustavo | /termos-de-uso | 
|RF-002| Permitir que o usuário faça login na plataforma como usuário cadastrado ou convidado | ALTA | Harlynson | /login | 
|RF-002| Permitir que o usuário faça login na plataforma como usuário cadastrado ou convidado | ALTA | Gustavo | /perfil | 
|RF-002| Permitir que o usuário faça login na plataforma como usuário cadastrado ou convidado | ALTA | Lucas | /recuperacao conta | 
|RF-003| Permitir que o usuário (cadastrado) registre novos grupos esportivos, indicando local, horário, acessibilidade, entre outras informações | ALTA | Harlynson  | /adicionar-grupo/localizacao | 
|RF-003| Permitir que o usuário (cadastrado) registre novos grupos esportivos, indicando local, horário, acessibilidade, entre outras informações | ALTA |  Harlynson | /adicionar-grupo/horario | 
|RF-003| Permitir que o usuário (cadastrado) registre novos grupos esportivos, indicando local, horário, acessibilidade, entre outras informações | ALTA |  Harlynson | /adicionar-grupo/modalidade| 
|RF-003| Permitir que o usuário (cadastrado) registre novos grupos esportivos, indicando local, horário, acessibilidade, entre outras informações | ALTA |  Harlynson | /adicionar-grupo/dias | 
|RF-003| Permitir que o usuário (cadastrado) registre novos grupos esportivos, indicando local, horário, acessibilidade, entre outras informações | ALTA |  Harlynson | /adicionar-grupo/descricao | 
|RF-003| Permitir que o usuário (cadastrado) registre novos grupos esportivos, indicando local, horário, acessibilidade, entre outras informações | ALTA |  Raissila | /adicionar-grupo/acessibilidade | 
|RF-004| Permitir que o usuário busque por grupos esportivos, delimitando por modalidade, acessibilidade e/ou distância | ALTA | Bruno | /mapa | 
|RF-005| Permitir que o usuário (cadastrado) demonstre interesse em determinado esporte | ALTA | Raissila |  | 
|RF-006| A aplicação deve ser acessível para todos os públicos | ALTA | Harlynson | /login | 
|RF-006| A aplicação deve ser acessível para todos os públicos | ALTA | Bruno | /cadastro |
|RF-007| Permitir que o usuário (cadastrado) integre seus grupos com as redes sociais | MÉDIA | Gustavo | /perfil | 
|RF-008| Permitir que o usuário (cadastrado) gere demanda de esportes | MÉDIA | Harlynson|  /adicionar-grupo/localizacao | 
|RF-008| Permitir que o usuário (cadastrado) gere demanda de esportes | MÉDIA | Harlynson|  /adicionar-grupo/modalidade |
|RF-009| Permitir que o usuário (cadastrado) avalie os grupos | MÉDIA | Harlynson | /grupo | 
|RF-010| Notificar o usuário de grupos criados em sua área | BAIXA | Gustavo | /notificacao  | 

## Descrição das estruturas:

## Usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador do usuário                  | 1                                              |
| Nome           | Texto             | Nome do usuário                           | Carlos B. Machado                              |
| Email          | Texto             | Email do usuário                          | carlos.machado@gmail.com                       |
| Data de nascimento | Data          | Data de nascimento do usuário             | 04/06/1985                                     |
| Instagram      | Texto             | Identificador da conta de instagram do usuário | @carlosbmachado                           |
| Twitter        | Texto             | Identificador da conta do twitter do usuário | @carlosbmachado                             |
| Facebook       | Texto             | Identificador da conta de facebook do usuário | /CarlosBMachado                             |

## Grupo
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador do grupo                    | 1                                              |
| Nome           | Texto             | Nome do grupo                             | Vôlei do Lalá                                  |
| Descricao      | Texto             | Descrição do grupo                        | Lorem ipsum dolor sit amet, consectetur adipiscing elit |
| Modalidade     | Numero (Inteiro)  | Identificador da modalidade               | 19                                             |
| Acessibilidade | Booleano          | Flag de acessibilidade do grupo           | true                                           |
| Reunioes       | Lista (Reunião)   | Data e hora das reuniões do grupo         |[{"id":1,"dia":"Segunda","hora":"20h"},{"id":2,"dia":"Terça","hora":"20h"},{"id":6,"dia":"Sábado","hora":"16:30h"}]|

## Reunião
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador do dia da reunião           | 1                                              |
| Dia            | Texto             | Dia da reunião                            | Segunda                                        |
| Hora           | Texto             | Horas da reunião                          | 20h                                            |

## Modalidade
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador da modalidade               | 19                                             |
| Nome           | Texto             | Nome da modalidade                        | Vôlei                                          |
