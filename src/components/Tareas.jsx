import React from "react";

const Tareas = ({ arrayTareas }) => {
  return (
    <section>
      <ul>
        {arrayTareas.map((t, index) => (
          <li key={index}>{index+1}-{t}</li>
        ))}
      </ul>
    </section>
  );
};

export default Tareas;
