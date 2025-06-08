-- Tabela de usuários (V2.0)
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY,
    user_nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha_password VARCHAR(100)
);

-- Tabela de categorias (V2.0)
CREATE TABLE IF NOT EXISTS category (
    id INT PRIMARY KEY,
    category_nome VARCHAR(100)
);

-- Tabela de tarefas
CREATE TABLE IF NOT EXISTS tasks (
    id INT PRIMARY KEY,
    title VARCHAR(200),
    description TEXT,
    categoria_id INT, -- ID da categoria (V2.0)
    status VARCHAR(50), -- Status da tarefa (ex: "pendente", "concluída", etc.) (V2.0)
    last_reset DATE, -- Data do último reset (V2.0)
    user_id INT, -- ID do usuário que criou a tarefa (V2.0) 
    FOREIGN KEY (categoria_id) REFERENCES category(id), -- Chave estrangeira para a tabela de categorias (V2.0)
    FOREIGN KEY (user_id) REFERENCES users(id) -- Chave estrangeira para a tabela de usuários (V2.0)
);

-- Tabela dos dias da semana (V2.0)
CREATE TABLE IF NOT EXISTS days_of_week (
    id INT PRIMARY KEY,
    day_nome VARCHAR(20)
);

-- Tabela de associação entre tarefas e dias da semana (V2.0)
CREATE TABLE IF NOT EXISTS tasks_week_days (
    id INT PRIMARY KEY,
    task_id INT,
    day_id INT,
    FOREIGN KEY (task_id) REFERENCES tasks(id),
    FOREIGN KEY (day_id) REFERENCES days_of_week(id)
);
