import { useState } from "react";

import Header from "./Cabecera";
import About from "./Perfil";
import Skills from "./Educacion";
import Contact from "./Experiencia";
import StackTecnologias from "./StackTecnologias";

import ToggleHabilidades from "./ToggleHabilidades";
import FormularioTecnologia from "./FormularioTecnologia";

import { cvData } from "./cvData";
import "./App.css";

export default function App() {

  // Estado de tecnologías dinámicas (comienza desde cvData)
  const [tecnologias, setTecnologias] = useState(cvData.tecnologiasIniciales);

  // Función para agregar una nueva tecnología
  const agregarTecnologia = (tec) => {
    setTecnologias([...tecnologias, tec]);
  };

  // Mostrar/ocultar habilidades
  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

  return (
    <div className="container">

      <Header 
        nombre={cvData.nombre}
        cargo={cvData.cargo}
        ciudad={cvData.ciudad}
        contacto={cvData.contacto}
      />

      <About resumen={cvData.resumen} />

      <Skills estudios={cvData.estudios} />

      <Contact experiencias={cvData.experiencias} />

      {/* Botón para mostrar/ocultar */}
      <ToggleHabilidades
        mostrar={mostrarHabilidades}
        onToggle={() => setMostrarHabilidades(!mostrarHabilidades)}
      />

      {/* Render condicional */}
      {mostrarHabilidades && (
        <StackTecnologias tecnologias={tecnologias} />
      )}

      {/* Formulario */}
      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />

    </div>
  );
}
