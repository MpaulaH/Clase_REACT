export default function Educacion() {

  const formacion = [
    {
      institucion: "SENA",
      curso: "Tecnólogo en Análisis y Desarrollo de Software (ADSO)",
      año: 2025
    },
    {
      institucion: "Platzi",
      curso: "Curso Básico de JavaScript",
      año: 2024
    },
    {
      institucion: "Udemy",
      curso: "React desde Cero a Avanzado",
      año: 2024
    },
    {
      institucion: "Google Activate",
      curso: "Desarrollo Web",
      año: 2023
    },
    {
      institucion: "Coursera",
      curso: "Programación con Python",
      año: 2023
    },
    {
      institucion: "FreeCodeCamp",
      curso: "Responsive Web Design",
      año: 2023
    },
    {
      institucion: "Platzi",
      curso: "Curso de Git y GitHub",
      año: 2024
    },
    {
      institucion: "EdTeam",
      curso: "Fundamentos de Bases de Datos",
      año: 2022
    },
    {
      institucion: "Alura",
      curso: "Lógica de Programación",
      año: 2022
    },
    {
      institucion: "Autoestudio / YouTube",
      curso: "Introducción a Node.js",
      año: 2024
    }
  ];

  return (
    <section>
      <h2>Formación Académica</h2>

      <ul>
        {formacion.map((item, index) => (
          <li key={index}>
            <strong>{item.institucion}</strong> — {item.curso} ({item.año})
          </li>
        ))}
      </ul>

    </section>
  );
}
