-- Inserir os dias da semana
INSERT INTO Days_of_week (id, day_nome) VALUES (1, 'Segunda');
INSERT INTO Days_of_week (id, day_nome) VALUES (2, 'Terça');
INSERT INTO Days_of_week (id, day_nome) VALUES (3, 'Quarta');
INSERT INTO Days_of_week (id, day_nome) VALUES (4, 'Quinta');
INSERT INTO Days_of_week (id, day_nome) VALUES (5, 'Sexta');
INSERT INTO Days_of_week (id, day_nome) VALUES (6, 'Sábado');
INSERT INTO Days_of_week (id, day_nome) VALUES (7, 'Domingo');

-- Inserir uma usuária
INSERT INTO Users (id, user_nome, email, senha_password)
VALUES (1, 'Maria Oliveira', 'maria@example.com', 'senhaSegura123');

-- Inserir uma categoria "Saúde"
INSERT INTO Category (id, category_nome)
VALUES (1, 'Saúde');

-- Inserir uma tarefa associada à usuária e à categoria
INSERT INTO Tasks (id, title, description, categoria_id, status, last_reset, user_id)
VALUES (1, 'Caminhada matinal', 'Caminhar 30 minutos pela manhã', 1, 'pendente', '2025-05-09', 1);

-- Associar essa tarefa à segunda-feira (supondo que o ID do dia "segunda" seja 1)
INSERT INTO tasks_week_days (id, task_id, day_id)
VALUES (1, 1, 1);
