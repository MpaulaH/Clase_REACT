export default function Experiencia({ experiencias }) {
  return (
    <section>
      <h2>Experiencia</h2>

      {experiencias.map((item, index) => (
        <div key={index}>
          <h3>{item.cargo} — {item.empresa} ({item.periodo})</h3>
        </div>
      ))}
    </section>
  )
}
