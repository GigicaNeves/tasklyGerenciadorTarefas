const db = require("../config/db");

// Consulta todas as tarefas
async function getAllTasks() {
  const result = await db.query("SELECT * FROM tasks");
  return result.rows;
}

// Cria uma nova tarefa
async function createTask(description) {
  const result = await db.query(
    "INSERT INTO tasks (description) VALUES ($1) RETURNING *",
    [description]
  );
  return result.rows[0];
}

module.exports = {
  getAllTasks,
  createTask,
};
