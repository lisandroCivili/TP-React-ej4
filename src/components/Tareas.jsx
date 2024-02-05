import React from "react";

const Tareas = ({ arrayTareas }) => {
  return (
    <section>
      <ul className="list-unstyled">
        {arrayTareas.map((t, index) => (
          <li className=" border border-primary-subtle border-3 p-1 my-2" key={index}>{index+1}-{t}</li>
        ))}
      </ul>
    </section>
  );
};

export default Tareas;
