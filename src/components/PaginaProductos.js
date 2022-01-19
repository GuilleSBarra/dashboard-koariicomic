import React from "react";
import ListadoDeProductos from "./ListadoDeProductos";
import TotalDeProductos from "./TotalDeProductos";
import UltimoProductoCreado from "./UltimoProductoCreado"

const PaginaProductos = () => {
  return (
    <>
      <TotalDeProductos />
      <ListadoDeProductos />
      <UltimoProductoCreado />
    </>
  );
};

export default PaginaProductos;
