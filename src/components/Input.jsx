import React, { useState } from 'react';

const Input = () => {

    
    const [listaTareas, setListaTareas] = useState([]);
    const [tarea, setTarea] = useState("");
    
    const guardarTarea = (event) =>{
        setTarea(event.target.value);
        console.log(tarea);
    }



    return (
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="inputTarea"
              placeholder="Ej: Asistir reunión 5pm"
              value={tarea}
              onChange={guardarTarea}
            />
          </div>
        </form>
        
    );
};

export default Input;