import { useState } from "react";

export default function FormularioTecnologia({ agregarTecnologia }) {
  const [nuevaTec, setNuevaTec] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevaTec.trim() === "") return;
    agregarTecnologia(nuevaTec);
    setNuevaTec("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Agregar tecnología"
        value={nuevaTec}
        onChange={(e) => setNuevaTec(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
