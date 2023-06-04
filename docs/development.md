# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve exibir as notícias mais populares. | ALTA | index.html |
|RF-002| Usuários autenticados podem registrar novas notícias. | ALTA | cadastro-noticia.html |

## Descrição das estruturas:

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
