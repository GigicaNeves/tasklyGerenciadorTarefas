const express = require("express");
const router = express.Router();
const taskController = require("../controllers/TaskController");

// Rota raiz antiga
/*router.get("/", (req, res) => {
  res.send("API de Tarefas - Use /tasks para listar ou criar tarefas.");
});*/

// Rota raiz atualizada
router.get("/", (req, res) => {
  res.render("home");
  // Vai procurar por views/index.ejs
});

router.get("/tasks/page", (req, res) => {
  res.render("tasks"); // abre views/about.ejs
});

router.get("/tasks/control", (req, res) => {
  res.render("control"); // abre views/about.ejs
});

// Definição as rotas
router.get("/tasks", taskController.getTasks);
router.post("/tasks/add", taskController.addTask);
router.put("/tasks/:id", taskController.editTask);
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;
