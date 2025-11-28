export default function StackTecnologias({ tecnologias }) {
  const getColor = (tech) => {
    if (tech === "React") return "lightblue";
    if (tech === "JavaScript") return "yellow";
    if (tech === "Node.js") return "lightgreen";
    return "#ddd";
  };

  return (
    <section>
      <h2>Stack de Tecnologías</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {tecnologias.map((tech, index) => (
          <span
            key={index}
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              backgroundColor: getColor(tech),
              fontWeight: "bold"
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
