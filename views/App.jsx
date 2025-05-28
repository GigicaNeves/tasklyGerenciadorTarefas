import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  async function carregarTarefas() {
    const res = await fetch("http://localhost:3000/tasks");
    const data = await res.json();
    setTasks(data);
  }

  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TaskForm
        editTask={editTask}
        setEditTask={setEditTask}
        onTaskSaved={carregarTarefas}
      />
      <TaskList
        tasks={tasks}
        onEdit={setEditTask}
        onDelete={carregarTarefas}
      />
    </div>
  );
}

export default App;
