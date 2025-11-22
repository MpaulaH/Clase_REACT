export default function Header({ nombre, cargo, ciudad, contacto }) {
  return (
    <header>
      <img src="public/imagenes/fotoHV.png" alt="" className="fotoHV" />
      <h1>{nombre}</h1>
      <h3>{cargo}</h3>
      <p>{ciudad}</p>
      <p>{contacto}</p>
    </header>
  );
}


