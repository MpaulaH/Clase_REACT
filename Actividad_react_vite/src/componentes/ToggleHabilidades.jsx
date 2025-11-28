export default function ToggleHabilidades({ mostrar, onToggle }) {
  return (
    <div>
      <button className="boton" onClick={onToggle}>
        {mostrar ? "Ocultar Stack" : "Mostrar Stack"}
      </button>
    </div>
  );
}
