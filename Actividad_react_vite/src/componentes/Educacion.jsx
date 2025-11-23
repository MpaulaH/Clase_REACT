export default function Educacion({ estudios }) {
  return (
    <section>
      <h2>Educación</h2>

      {estudios.map((e, i) => (
        <div key={i}>
          <h3>{e.curso} — {e.institucion}</h3>
          <p>{e.año}</p>
        </div>
      ))}
    </section>
  );
}
