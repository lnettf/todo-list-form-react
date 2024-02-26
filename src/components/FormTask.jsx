import React, { useState } from "react";

const FormTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleChange = (event) => {
    // Actualiza el estado 'taskName' con el valor del campo de entrada
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    // Previene el comportamiento predeterminado de envío del formulario
    event.preventDefault();
    // Comprueba si el nombre de la tarea está vacío o solo contiene espacios en blanco
    if (!taskName.trim()) {
      return; // Si es así, no hace nada más
    }
    addTask(taskName);
    // Restablece el estado del nombre de la tarea a una cadena vacía
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={taskName}
        // Llama a la función 'handleChange' cuando cambia el valor del campo de entrada
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default FormTask;
