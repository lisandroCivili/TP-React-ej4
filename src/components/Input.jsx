import React, { useState } from 'react';
import Tareas from './Tareas'
const input = () => {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const manejarEventoEnter = (e) => {
    if (e.key === 'Enter' && tarea.trim() !== '') {
      setTareas([...tareas, tarea]);
      setTarea('');
    }
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        placeholder="Ingrese una tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        onKeyDown={manejarEventoEnter}
      />
      <Tareas arrayTareas={tareas}/>
    </div>
  );
};

export default input;
