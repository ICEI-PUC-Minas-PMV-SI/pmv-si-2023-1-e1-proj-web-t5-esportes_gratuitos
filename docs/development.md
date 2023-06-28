# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |Artefato Criado |
|------|-----------------------------------------|----| ----|----|
|RF&#x2011;001| Permitir que o usuário cadastre-se na plataforma | ALTA | Bruno | /register | 
|RF&#x2011;001| Permitir que o usuário cadastre-se na plataforma | ALTA | Gustavo | /user-terms | 
|RF-002| Permitir que o usuário faça login na plataforma como usuário cadastrado ou convidado | ALTA | Harlynson | /login | 
|RF-002| Permitir que o usuário faça login na plataforma como usuário cadastrado ou convidado | ALTA | Gustavo | /profile | 
|RF-002| Permitir que o usuário faça login na plataforma como usuário cadastrado ou convidado | ALTA | Lucas | /recovery | 
|RF-003| Permitir que o usuário (cadastrado) registre novos grupos esportivos, indicando local, horário, acessibilidade, entre outras informações | ALTA | Harlynson  | /add-group/location | 
|RF-003| Permitir que o usuário (cadastrado) registre novos grupos esportivos, indicando local, horário, acessibilidade, entre outras informações | ALTA |  Harlynson | /add-group/hours | 
|RF-003| Permitir que o usuário (cadastrado) registre novos grupos esportivos, indicando local, horário, acessibilidade, entre outras informações | ALTA |  Harlynson | /add-group/modality | 
|RF-003| Permitir que o usuário (cadastrado) registre novos grupos esportivos, indicando local, horário, acessibilidade, entre outras informações | ALTA |  Harlynson | /add-group/days | 
|RF-003| Permitir que o usuário (cadastrado) registre novos grupos esportivos, indicando local, horário, acessibilidade, entre outras informações | ALTA |  Raissila | /add-group/description | 
|RF-003| Permitir que o usuário (cadastrado) registre novos grupos esportivos, indicando local, horário, acessibilidade, entre outras informações | ALTA |  Raissila | /add-group/accesibility | 
|RF-004| Permitir que o usuário busque por grupos esportivos, delimitando por modalidade, acessibilidade e/ou distância | ALTA | Bruno | /map | 
|RF-005| Permitir que o usuário (cadastrado) demonstre interesse em determinado esporte | ALTA | Raissila |  | 
|RF-006| A aplicação deve ser acessível para todos os públicos | ALTA | Harlynson | /login | 
|RF-006| A aplicação deve ser acessível para todos os públicos | ALTA | Bruno | /register |
|RF-007| Permitir que o usuário (cadastrado) integre seus grupos com as redes sociais | MÉDIA | Gustavo | /profile | 
|RF-008| Permitir que o usuário (cadastrado) gere demanda de esportes | MÉDIA | Harlynson|  /add-group/location | 
|RF-008| Permitir que o usuário (cadastrado) gere demanda de esportes | MÉDIA | Harlynson|  /add-group/modality |
|RF-009| Permitir que o usuário (cadastrado) avalie os grupos | MÉDIA | Harlynson | /group | 
|RF-010| Notificar o usuário de grupos criados em sua área | BAIXA | Gustavo | /notification  | 

## Descrição das estruturas:

## Usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador do usuário                  | 1                                              |
| Nome           | Texto             | Nome do usuário                           | Carlos B. Machado                              |
| Email          | Texto             | Email do usuário                          | carlos.machado@gmail.com                       |
| Celular do usuário | Texto         | Celular do usuário                        | (11) 99999-9999                                |
| Idade | Texto          | Idade do usuário             | 45 anos                                    |
| Instagram      | Texto             | Identificador da conta de instagram do usuário | @carlosbmachado                           |
| Twitter        | Texto             | Identificador da conta do twitter do usuário | @carlosbmachado                             |
| Facebook       | Texto             | Identificador da conta de facebook do usuário | /CarlosBMachado                            |

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
