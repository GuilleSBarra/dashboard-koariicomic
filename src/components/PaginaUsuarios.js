import React from "react";
import TotalUsuarios from "./TotalUsuarios"
import UltimoUsuarioCreado from "./UltimoUsuarioCreado"
import "../assets/css/PaginaUsuarios.css"

const PaginaUsuarios = () => {
  return (
    <>
      <div className="prueba2">
      <TotalUsuarios />
      <UltimoUsuarioCreado />
      </div>
    </>
  );
};

export default PaginaUsuarios;