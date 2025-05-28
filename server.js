const cors = require("cors");
const routes = require("./routes");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// (Opcional, mas recomendado se usa frontend separado)
app.use(cors());

// Serve os arquivos estáticos da build do React
app.use(express.static(path.join(__dirname, "views/dist")));

// Redireciona todas as rotas para o index.html do React
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/dist", "index.html"));
});

// Usa as rotas definidas em routes.js
app.use("/", routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
