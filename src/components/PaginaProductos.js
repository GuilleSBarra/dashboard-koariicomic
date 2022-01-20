import React from "react";
import ListadoDeProductos from "./ListadoDeProductos";
import TotalDeProductos from "./TotalDeProductos";
import UltimoProductoCreado from "./UltimoProductoCreado"
import "../assets/css/PaginaProductos.css"

const PaginaProductos = () => {
  return (
    <>
      <div className="prueba">
      <TotalDeProductos />
      <UltimoProductoCreado />
      <ListadoDeProductos />
      </div>
    </>
  );
};

export default PaginaProductos;
