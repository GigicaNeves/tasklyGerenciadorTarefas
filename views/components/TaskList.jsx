export default function TaskList({ tasks, onEdit, onDelete }) {
  async function handleDelete(id) {
    if (!confirm("Deseja excluir esta tarefa?")) return;

    try {
      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Erro ao excluir tarefa");
      onDelete();
    } catch (err) {
      alert("Erro ao excluir tarefa");
    }
  }

  if (tasks.length === 0) {
    return <p>Nenhuma tarefa encontrada.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>
              <button onClick={() => onEdit(task)}>Editar</button>
              <button onClick={() => handleDelete(task.id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
