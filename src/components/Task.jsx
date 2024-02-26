import React from 'react';

const Task = ({ task, deleteTask }) => {
    return (
      <li>
        {task.name}
        {/*
            Renderiza un botón "Delete" y al hacer clic en él, llama a la
            función 'deleteTask' con el ID de la tarea como argumento
        */}
        <button onClick={() => deleteTask(task.id)}>Delete</button>{" "}
      </li>
    );
};

export default Task;
