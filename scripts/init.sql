-- Tabela de usuários
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY,
    user_nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha_password VARCHAR(100)
);

-- Tabela de categorias
CREATE TABLE IF NOT EXISTS category (
    id INT PRIMARY KEY,
    category_nome VARCHAR(100)
);

-- Tabela de tarefas
CREATE TABLE IF NOT EXISTS tasks (
    id INT PRIMARY KEY,
    title VARCHAR(200),
    description TEXT,
    categoria_id INT,
    status VARCHAR(50),
    last_reset DATE,
    user_id INT,
    FOREIGN KEY (categoria_id) REFERENCES category(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Tabela dos dias da semana
CREATE TABLE IF NOT EXISTS days_of_week (
    id INT PRIMARY KEY,
    day_nome VARCHAR(20)
);

-- Tabela de associação entre tarefas e dias da semana
CREATE TABLE IF NOT EXISTS tasks_week_days (
    id INT PRIMARY KEY,
    task_id INT,
    day_id INT,
    FOREIGN KEY (task_id) REFERENCES tasks(id),
    FOREIGN KEY (day_id) REFERENCES days_of_week(id)
);
