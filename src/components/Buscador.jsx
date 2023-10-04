import React from "react";

const Buscador = ({ onBuscar }) => {
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    onBuscar(searchTerm);
  };

  return (
    <div className="mb-3">
      <input type="text" className="form-control" placeholder="Buscar colaborador" onChange={handleInputChange}/>
    </div>
  );
};

export default Buscador;
