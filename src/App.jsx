import React, { useState } from "react";
import ListTask from "./components/ListTask";
import FormTask from "./components/FormTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    // Obtiene la última tarea del array de tareas
    const lastTask = tasks[tasks.length - 1];
    // Si hay tareas, asigna el siguiente ID al último ID + 1, de lo contrario, asigna 1
    const id = lastTask ? lastTask.id + 1 : 1;
    // Agrega una nueva tarea al array 'tasks' con el ID y el nombre proporcionados
    setTasks([...tasks, { id: id, name: taskName }]);
  };

  const deleteTask = (taskId) => {
    // Filtra las tareas para eliminar la tarea con el ID proporcionado
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <FormTask addTask={addTask} />
      <ListTask tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
