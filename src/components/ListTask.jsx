import React from "react";
import Task from "./Task";

const ListTask = ({ tasks, deleteTask }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {/*
            Recorre el array 'tasks' y renderiza un componente Task para cada tarea
        */}
        {tasks.map((task) => (
          /* Renderiza el componente Task y pasa la tarea y la función 'deleteTask' como props */
          <Task key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
