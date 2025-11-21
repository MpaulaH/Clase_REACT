export default function Experiencia() {

  const experiencias = [
    {
      cargo: "Desarrolladora Frontend Junior",
      empresa: "TechSolutions S.A.",
      año: 2024,
      descripcion: "Construcción de interfaces responsivas con React y CSS Modules."
    },
    {
      cargo: "Practicante Desarrollo Web",
      empresa: "Digital Factory",
      año: 2023,
      descripcion: "Soporte en implementación de vistas en React y consumo de APIs REST."
    },
    {
      cargo: "Freelancer - Página Web Personal",
      empresa: "Proyecto Independiente",
      año: 2023,
      descripcion: "Diseño y desarrollo de un portafolio con React y Vite."
    },
    {
      cargo: "Desarrolladora Frontend",
      empresa: "Innovatech",
      año: 2024,
      descripcion: "Creación de componentes reutilizables y optimización de UI."
    },
    {
      cargo: "Maquetadora Web",
      empresa: "Agencia Creativa Pixel",
      año: 2023,
      descripcion: "Maquetación de landing pages con HTML5, CSS3 y Flexbox."
    },
    {
      cargo: "Soporte Técnico TI",
      empresa: "Soluciones Globales",
      año: 2022,
      descripcion: "Diagnóstico de fallas, configuración de equipos y soporte a usuarios."
    },
    {
      cargo: "Proyecto React - App de Tareas",
      empresa: "Proyecto Académico",
      año: 2024,
      descripcion: "Aplicación CRUD con React, hooks y localStorage."
    },
    {
      cargo: "Proyecto Node.js - API básica",
      empresa: "Proyecto SENA",
      año: 2024,
      descripcion: "Back-end con Express, rutas y archivo JSON como base de datos."
    },
    {
      cargo: "Diseñadora Web Freelance",
      empresa: "Cliente particular",
      año: 2022,
      descripcion: "Diseño de sitio web institucional usando Figma."
    },
    {
      cargo: "Desarrolladora FullStack Junior",
      empresa: "SoftWorld",
      año: 2025,
      descripcion: "Desarrollo de funcionalidades en React y API en Node.js."
    }
  ];

  return (
    <section>
      <h2>Experiencia Laboral</h2>

      {experiencias.map((item, index) => (
        <div key={index} className="tarjeta-exp">
          <h3>{item.cargo} — {item.empresa} ({item.año})</h3>
          <p>{item.descripcion}</p>
        </div>
      ))}

    </section>
  );
}
