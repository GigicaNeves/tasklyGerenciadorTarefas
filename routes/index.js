const express = require("express");
const router = express.Router();
const taskController = require("../controllers/TaskController");

// Rota raiz antiga
/*router.get("/", (req, res) => {
  res.send("API de Tarefas - Use /tasks para listar ou criar tarefas.");
});*/

// Rota raiz atualizada
router.get("/", (req, res) => {
  res.render("main");
  // Vai procurar por views/index.ejs
});

// Definição as rotas
router.get("/tasks", taskController.getTasks);
router.post("/tasks/add", taskController.addTask);
router.put("/tasks/:id", taskController.editTask);
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;
