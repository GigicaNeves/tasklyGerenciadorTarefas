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
