import { useState } from "react";
import Input from "./components/Input";

function App() {

  return (
    <section className="container contenedorPadre d-flex flex-column align-items-center">
      <div className="border border-black d-flex flex-column align-items-center px-5 py-2 contenedorHijo">
        <h1>Bienvenido</h1>
        <h5 className="my-3">Ingresa tus tareas</h5>
        <Input/>
      </div>
    </section>
  );
}

export default App;
