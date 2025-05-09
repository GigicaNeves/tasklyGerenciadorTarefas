<img src="./assets/inteli.png">

# WAD - Web Application Document - Módulo 2: Projeto Individual - Inteli

## Taskly

#### Giovanna Neves Rodrigues

## Sumário

  <summary><a href="#c1">1.0 Introdução</a></summary>
  <summary><a href="#c2">2.0 Personas e User Stories</a></summary>
  <summary><a href="#c3">3.0 Base do Projeto</a></summary>
  <summary><a href="#c4">4.0 Wireframes</a></summary>
  <summary><a href="#c5">5.0 Conectando Banco de Dados e Servidor</a></summary>
  <summary><a href="#c6">6.0 Protótipo de Alta</a></summary>
  <summary><a href="#c7">7.0 Sistema Completo com Funcionalidades e Interface</a></summary>
  <summary><a href="#c8">8.0  Demonstração e Documentação</a></summary>
  <summary><a href="#c9">9.0  Referências</a></summary>

  <br>

# <a name="c1"></a>1. Introdução

O WAD (Website Analysis Document) é o documento central de uma aplicação web. Ele tem como objetivo detalhar o funcionamento, desenvolvimento e principais aspectos técnicos de um software web. Neste documento, serão apresentadas as principais características e decisões do Taskly, incluindo a lógica de funcionamento, arquitetura e componentes utilizados.

Dados recentes indicam que distúrbios e doenças mentais afetam desproporcionalmente as mulheres, em grande parte devido à sobrecarga histórica de responsabilidades sociais e familiares. Essa realidade muitas vezes leva à negligência do autocuidado e compromete a saúde mental.

Pensando nisso, nasceu o Taskly, uma solução desenvolvida para ajudar mulheres a organizarem seus hábitos e tarefas de autocuidado de forma objetiva e intuitiva, promovendo bem-estar físico e mental. O sistema permite o acompanhamento regular dessas tarefas, criando uma estrutura que incentiva a prática constante do autocuidado, mesmo diante de uma rotina exigente.

### <a name="c2"></a> 2.0 Personas e User Stories

### <a name="c3"></a> 3.0 Base do Projeto

#### 3.1 Diagrama do banco de dados

O diagrama de banco de dados é uma ferramenta essencial na elaboração de qualquer sistema. Ele não apenas auxilia na demonstração do funcionamento e lógica que os dados devem seguir, mas também traduz essas informações para os desenvolvedores, criando clareza nos fluxos de dados. Dessa forma, torna-se um elemento indispensável no planejamento do software.

O projeto em questão apresenta dois principais modelos de banco de dados: o modelo lógico e o modelo físico.

O modelo lógico tem como objetivo fornecer uma visão geral dos processos operacionais ou transacionais, apresentando as entidades e suas relações de maneira abstrata. Já o modelo físico é mais detalhado, oferecendo informações que ajudam os administradores e desenvolvedores a implementar a lógica de negócios em um banco de dados real.

**Modelo Lógico** <br>
Abaixo, é possível observar o diagrama lógico:

<div align="center"> <sub>Figura X (Número da imagem) - Modelo Lógico de Banco de Dados</sub> <img src="./assets/modelo_logico.jpg" width="100%"> <sup>Fonte: Material produzido pela autora (2025)</sup> </div>
Este diagrama lógico inclui cinco principais entidades/tabelas: users, tasks, category, day_of_week e tasks_week_days. Ele explicita de forma clara os principais "objetos" e seus relacionamentos no sistema, como a tabela users, que controla o login dos usuários, e as tabelas restantes, que gerenciam as tarefas. Além disso, cada relação entre tabelas é marcada por linhas, com símbolos que representam relações "um para muitos". Embora o modelo aparente simplicidade, suas regras de negócio trazem um grau considerável de complexidade.<br>
<br>

**Modelo Físico** <br>
Agora, é possível observar o diagrama físico:

<div align="center"> <sub>Figura X (Número da imagem) - Modelo Físico</sub> <img src="./assets/modelo_fisico.png" width="100%"> <sup>Fonte: Material produzido pela autora através da plataforma Supabase (2025)</sup> </div>

O modelo físico foi gerado diretamente pela plataforma Supabase, refletindo a estrutura real do banco de dados utilizado. Ele mantém as mesmas entidades e regras descritas no modelo lógico, mas com detalhes adicionais que facilitam a implementação e o gerenciamento do sistema.

Dessa forma, é possível perceber que, mesmo com um número relativamente pequeno de tabelas, a modelagem do banco de dados do Taskly apresenta uma complexidade de entendimento significativa. Tudo isso, busca emplementar uma arquitetura que prioriza a eficiência no manejo dos dados, visando sempre o melhor uso possível.

### <a name="c4"></a> 4.0 Wireframes

### <a name="c5"></a> 5.0 Conectando Banco de Dados e Servidor

### <a name="c6"></a> 6.0 Protótipo de Alta

### <a name="c7"></a> 7.0 Sistema Completo com Funcionalidades e Interface

### <a name="c8"></a> 8.0 Demonstração e Documentação

### <a name="c9"></a> 9.0 Referências

AA. Modelo de dados lógicos x físicos — Diferença na modelagem de dados — AWS. Disponível em: <https://aws.amazon.com/pt/compare/the-difference-between-logical-and-physical-data-model/>. Acesso em 8 de maio de 2025

‌
