import Header from "./Cabecera";
import About from "./Perfil";
import Skills from "./Educacion";
import Contact from "./Experiencia";
import StackTecnologias from "./StackTecnologias";
import "./App.css"

export default function App() {
  
  // Datos personales
  const datosPersonales = {
    nombre: "María Paula Herrera Rivas",
    cargo: "Desarrolladora Front-End",
    ciudad: "Medellín, Colombia",
    contacto: "maria.paula@example.com"
  };

  // Resumen profesional
  const resumen = "Desarrolladora Front-End con experiencia en React, diseño de interfaces y construcción de aplicaciones dinámicas.";

  // Experiencias (10 ítems según el taller anterior)
  const experiencias = [
    { cargo: "Front-End Developer", empresa: "TechCorp", periodo: "2023" },
    { cargo: "Practicante Web", empresa: "SoftDevelopment", periodo: "2022" },
    { cargo: "Freelancer", empresa: "Proyectos personales", periodo: "2024" },
    { cargo: "Diseñadora UI", empresa: "Creativa Studio", periodo: "2023" },
    { cargo: "Maquetadora Web", empresa: "PixelArt", periodo: "2021" },
    { cargo: "Asistente TI", empresa: "InfoTech", periodo: "2020" },
    { cargo: "Soporte Web", empresa: "CloudSoft", periodo: "2022" },
    { cargo: "Front-End Jr", empresa: "NovaApps", periodo: "2023" },
    { cargo: "Diseñadora UX", empresa: "FigmaLab", periodo: "2021" },
    { cargo: "Web Admin", empresa: "DigitalGroup", periodo: "2020-2021" },
  ];

  // Educación
  const estudios = [
    { institucion: "SENA", curso: "Tecnólogo en Análisis y Desarrollo de Software", año: "2025" },
    { institucion: "Google Activate", curso: "Marketing Digital", año: "2024" },
    { institucion: "Platzi", curso: "Curso de React", año: "2023" },
    { institucion: "Udemy", curso: "JavaScript Moderno", año: "2023" },
    { institucion: "Alura", curso: "Figma UI/UX", año: "2022" },
  ];

  return (
    <div className="container">

      <Header 
        nombre={datosPersonales.nombre}
        cargo={datosPersonales.cargo}
        ciudad={datosPersonales.ciudad}
        contacto={datosPersonales.contacto}
      />

      <About resumen={resumen} />

      <Skills estudios={estudios} />

      <Contact experiencias={experiencias} />

      <StackTecnologias />
    </div>
  );
}
