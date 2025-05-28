import { useState, useEffect } from "react";

export default function TaskForm({ editTask, setEditTask, onTaskSaved }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editTask]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description) return alert("Preencha os campos");

    const body = JSON.stringify({ title, description });
    const headers = { "Content-Type": "application/json" };

    try {
      if (editTask) {
        await fetch(`http://localhost:3000/tasks/${editTask.id}`, {
          method: "PUT",
          headers,
          body,
        });
      } else {
        await fetch(`http://localhost:3000/tasks/add`, {
          method: "POST",
          headers,
          body,
        });
      }

      setTitle("");
      setDescription("");
      setEditTask(null);
      onTaskSaved();
    } catch (err) {
      alert("Erro ao salvar tarefa");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br /><br />
      <textarea
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br /><br />
      <button type="submit">{editTask ? "Salvar Alterações" : "Adicionar Tarefa"}</button>
      {editTask && (
        <button
          type="button"
          id="btn-cancel-edit"
          onClick={() => setEditTask(null)}
          style={{ marginLeft: "10px", backgroundColor: "#f44336", color: "white", border: "none" }}
        >
          Cancelar
        </button>
      )}
    </form>
  );
}
