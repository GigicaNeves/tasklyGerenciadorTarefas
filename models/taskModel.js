// OBS: alguns dados da tarefa entram como NULL nessa primeira versão, pois não há validação de entrada. Em uma versão futura, deve-se adicionar validações para garantir que os dados sejam válidos antes de inserir ou atualizar no banco de dados.

// models/taskModel.js
const db = require("../config/db");

// Listar todas as tarefas
async function getAllTasks() {
  const result = await db.query("SELECT * FROM tasks");
  return result.rows;
}

// Criar uma nova tarefa
async function createTask({
  title,
  description,
  categoria_id,
  status,
  last_reset,
  user_id,
}) {
  const query = `
    INSERT INTO tasks (title, description, categoria_id, status, last_reset, user_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  const values = [
    title,
    description,
    categoria_id,
    status,
    last_reset,
    user_id,
  ];
  const result = await db.query(query, values);
  return result.rows[0];
}

// Editar uma tarefa
async function updateTask(
  id,
  { title, description, categoria_id, status, last_reset, user_id }
) {
  const query = `
    UPDATE tasks
    SET title = $1, description = $2, categoria_id = $3, status = $4, last_reset = $5, user_id = $6
    WHERE id = $7
    RETURNING *;
  `;
  const values = [
    title,
    description,
    categoria_id,
    status,
    last_reset,
    user_id,
    id,
  ];
  const result = await db.query(query, values);
  return result.rows[0];
}

// Excluir uma tarefa
async function deleteTask(id) {
  const result = await db.query("DELETE FROM tasks WHERE id = $1 RETURNING *", [
    id,
  ]);
  return result.rows[0];
}

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
