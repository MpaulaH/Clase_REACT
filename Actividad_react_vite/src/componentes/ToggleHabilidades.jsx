export default function ToggleHabilidades({ mostrar, onToggle }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <button onClick={onToggle}>
        {mostrar ? "Ocultar habilidades" : "Mostrar habilidades"}
      </button>
    </div>
  );
}
