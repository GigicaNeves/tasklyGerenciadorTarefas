const taskModel = require("../models/taskModel");

// Retorna todas as tarefas
async function getTasks(req, res) {
  try {
    const tasks = await taskModel.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar tarefas" });
  }
}

// Cria uma nova tarefa
async function addTask(req, res) {
  try {
    const { description } = req.body;
    const newTask = await taskModel.createTask(description);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar tarefa" });
  }
}

module.exports = {
  getTasks,
  addTask,
};
