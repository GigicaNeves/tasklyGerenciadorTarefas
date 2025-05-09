const express = require("express");
const router = express.Router();
const taskController = require("../controllers/TaskController");

// Rota raiz
router.get("/", (req, res) => {
  res.send("API de Tarefas - Use /tasks para listar ou criar tarefas.");
});

// Define as rotas
router.get("/tasks", taskController.getTasks);
router.post("/tasks", taskController.addTask);

module.exports = router;
