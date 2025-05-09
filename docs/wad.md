# Web Application Document - Projeto Individual - Módulo 2 - Inteli

## Taskly

#### Giovanna Neves Rodrigues

## Sumário

1. [Introdução](#c1)
2. [Visão Geral da Aplicação Web](#c2)
3. [Projeto Técnico da Aplicação Web](#c3)
4. [Desenvolvimento da Aplicação Web](#c4)
5. [Referências](#c5)

<br>

## <a name="c1"></a>1. Introdução

O WAD (Website Analysis Document) é o documento central de uma aplicação web. Ele tem como objetivo detalhar o funcionamento, desenvolvimento e principais aspectos técnicos de um software web. Neste documento, serão apresentadas as principais características e decisões do Taskly, incluindo a lógica de funcionamento, arquitetura e componentes utilizados.

Dados recentes indicam que distúrbios e doenças mentais afetam desproporcionalmente as mulheres, em grande parte devido à sobrecarga histórica de responsabilidades sociais e familiares. Essa realidade muitas vezes leva à negligência do autocuidado e compromete a saúde mental.

Pensando nisso, nasceu o Taskly, uma solução desenvolvida para ajudar mulheres a organizarem seus hábitos e tarefas de autocuidado de forma objetiva e intuitiva, promovendo bem-estar físico e mental. O sistema permite o acompanhamento regular dessas tarefas, criando uma estrutura que incentiva a prática constante do autocuidado, mesmo diante de uma rotina exigente.

De forma prática, o sistema é uma interface de tarefas que exibe as atividades do dia, permitindo que sejam marcadas como concluídas ou não. Além disso, inclui uma área de gerenciamento de tarefas, onde é possível criar novas atividades ou excluir as já existentes para dias específicos da semana. A ideia é que essas tarefas se repitam semanalmente, com a plataforma funcionando como um lembrete e ferramenta de gestão de hábitos.

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01 - opcional)

_Posicione aqui sua(s) Persona(s) em forma de texto markdown com imagens, ou como imagem de template preenchido. Atualize esta seção ao longo do módulo se necessário._

### 2.2. User Stories (Semana 01 - opcional)

_Posicione aqui a lista de User Stories levantadas para o projeto. Siga o template de User Stories e utilize a referência USXX para numeração (US01, US02, US03, ...). Indique todas as User Stories mapeadas, mesmo aquelas que não forem implementadas ao longo do projeto. Não se esqueça de explicar o INVEST de 1 User Storie prioritária._

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados

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

<div align="center"> <sub>Figura X (Número da imagem) - Modelo Físico Representado</sub> <img src="./assets/modelo_fisico.png" width="100%"> <sup>Fonte: Material produzido pela autora através da plataforma Supabase (2025)</sup> </div>

O modelo físico foi gerado diretamente na plataforma Supabase, refletindo a estrutura real do banco de dados utilizado. Ele mantém as mesmas entidades e regras descritas no modelo lógico, mas com detalhes adicionais que facilitam a implementação do sistema. Abaixo há os esquemas do Banco de dados:

**Script de Criação**

```sql
-- Tabela de usuários
CREATE TABLE users (
    id INT PRIMARY KEY,
    user_nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha_password VARCHAR(100)
);

-- Tabela de categorias
CREATE TABLE category (
    id INT PRIMARY KEY,
    category_nome VARCHAR(100)
);

-- Tabela de tarefas
CREATE TABLE tasks (
    id INT PRIMARY KEY,
    title VARCHAR(200),
    description TEXT,
    categoria_id INT,
    status VARCHAR(50),
    last_reset DATE,
    user_id INT,
    FOREIGN KEY (categoria_id) REFERENCES Category(id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Tabela dos dias da semana
CREATE TABLE days_of_week (
    id INT PRIMARY KEY,
    day_nome VARCHAR(20)
);

-- Tabela de associação entre tarefas e dias da semana
CREATE TABLE tasks_week_days (
    id INT PRIMARY KEY,
    task_id INT,
    day_id INT,
    FOREIGN KEY (task_id) REFERENCES Tasks(id),
    FOREIGN KEY (day_id) REFERENCES Days_of_week(id)
);
```

**Script de Inserção**

```sql
-- Inserir os dias da semana
INSERT INTO days_of_week (id, day_nome) VALUES (1, 'Segunda');
INSERT INTO days_of_week (id, day_nome) VALUES (2, 'Terça');
INSERT INTO days_of_week (id, day_nome) VALUES (3, 'Quarta');
INSERT INTO days_of_week (id, day_nome) VALUES (4, 'Quinta');
INSERT INTO days_of_week (id, day_nome) VALUES (5, 'Sexta');
INSERT INTO days_of_week (id, day_nome) VALUES (6, 'Sábado');
INSERT INTO days_of_week (id, day_nome) VALUES (7, 'Domingo');

-- Inserir uma usuária
INSERT INTO users (id, user_nome, email, senha_password)
VALUES (1, 'Maria Oliveira', 'maria@example.com', 'senhaSegura123');

-- Inserir uma categoria "Saúde"
INSERT INTO category (id, category_nome)
VALUES (1, 'Saúde');

-- Inserir uma tarefa associada à usuária e à categoria
INSERT INTO tasks (id, title, description, categoria_id, status, last_reset, user_id)
VALUES (1, 'Caminhada matinal', 'Caminhar 30 minutos pela manhã', 1, 'pendente', '2025-05-09', 1);

-- Associar essa tarefa à segunda-feira
INSERT INTO tasks_week_days (id, task_id, day_id)
VALUES (1, 1, 1);

```

Dessa forma, é possível perceber que, mesmo com um número relativamente pequeno de tabelas, a modelagem do banco de dados do Taskly apresenta uma complexidade de entendimento significativa. Tudo isso, busca emplementar uma arquitetura que prioriza a eficiência no manejo dos dados, visando sempre o melhor uso possível.

### 3.1.1 BD e Models (Semana 5)

_Descreva aqui os Models implementados no sistema web_

### 3.2. Arquitetura (Semana 5)

_Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário._

**Instruções para criação do diagrama de arquitetura**

- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.

_Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View._

### 3.3. Wireframes (Semana 03 - opcional)

_Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização)._

### 3.4. Guia de estilos (Semana 05 - opcional)

_Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução._

### 3.5. Protótipo de alta fidelidade (Semana 05 - opcional)

_Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização)._

### 3.6. WebAPI e endpoints (Semana 05)

_Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema._

### 3.7 Interface e Navegação (Semana 07)

_Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar._

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

_VIDEO: Insira o link do vídeo demonstrativo nesta seção_
_Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar._

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

_Indique pontos fortes e pontos a melhorar de maneira geral._
_Relacione também quaisquer outras ideias que você tenha para melhorias futuras._

## <a name="c5"></a>5. Referências

AA. Modelo de dados lógicos x físicos — Diferença na modelagem de dados — AWS. Disponível em: <https://aws.amazon.com/pt/compare/the-difference-between-logical-and-physical-data-model/>. Acesso em 8 de maio de 2025

‌<br>
