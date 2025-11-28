# 📄 Hoja de Vida en React — Proyecto Interactivo (EV06 – EV07 – EV08)

Este proyecto es una Hoja de Vida (CV) digital creada con **React + Vite**, desarrollada progresivamente a través de las actividades EV06, EV07 y EV08.

En esta entrega (EV08), se integran **eventos**, **estado local** mediante `useState`, **renderizado condicional**, **formularios controlados** y comunicación entre componentes mediante **props**.

---

## 👩‍💻 Autora

**María Paula Herrera Rivas**  
📧 *[mariapaulaherrerarivas@gmail.com]*  
📍 Colombia  
🗓️ *Noviembre de 2025*

---

## 🚀 Tecnologías utilizadas

- React
- Vite
- JavaScript (ES6+)
- CSS
- Git y GitHub

---

# 🧩 Funcionalidades añadidas en EV08

En esta actividad, se implementó interactividad en la hoja de vida mediante:

---

## 🔹 1. Componente **ToggleHabilidades**
Permite mostrar u ocultar la sección de habilidades mediante un botón.

- Usa `useState` en `App.jsx`
- Renderizado condicional con `{mostrarH && <Habilidades />}`
- Recibe props:
  - `mostrar`
  - `onToggle`

**Propósito:** agregar una funcionalidad interactiva sencilla y reutilizable.

---

## 🔹 2. Componente **FormularioTecnologia**
Un formulario controlado que permite agregar nuevas tecnologías al stack.

- Usa `useState` para manejar inputs
- Usa eventos `onChange` y `onSubmit`
- Envía los datos hacia `App.jsx` mediante props (callback)
- Actualiza la lista de tecnologías dinámicamente

**Propósito:** practicar el manejo de formularios controlados y mutación del estado.

---

## 🔹 3. Estado centralizado en App.jsx

En `App.jsx` se administran:

### ✔ Estado de tecnologías
```jsx
const [tecnologias, setTecnologias] = useState(cvData.tecnologiasIniciales);
```

### ✔ Estado de visibilidad de habilidades
```jsx
const [mostrarH, setMostrarH] = useState(true);
```

### ✔ Función para agregar tecnología
```jsx
const agregarTecnologia = (tec) => {
  setTecnologias([...tecnologias, tec]);
};
```

Estos valores son enviados como **props** a los componentes interactivos.

---

## 🔹 4. Separación de datos en `cvData.js`

Se creó un archivo `cvData.js` para almacenar los datos iniciales del CV:

- Datos personales
- Perfil
- Experiencia
- Educación
- Tecnologías iniciales

Esto permite que solo el **estado** viva en App.jsx, tal como exige la actividad.

---

# 🖼️ Capturas de pantalla del proyecto

![alt text](/Actividad_react_vite/src/componentes/imagenes/11.HV.png)
![alt text](/Actividad_react_vite/src/componentes/imagenes/12.HV.png)
![alt text](/Actividad_react_vite/src/componentes/imagenes/13.HV.png)
![alt text](/Actividad_react_vite/src/componentes/imagenes/14.HV.png)

---

# ⚙️ Instrucciones para ejecutar el proyecto

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/MpaulaH/Clase_REACT.git
```

---

### 2️⃣ Acceder al proyecto

```bash
cd Clase_REACT/Actividad_react_vite
```

---

### 3️⃣ Instalar dependencias

```bash
npm install
```

---

### 4️⃣ Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Después, abre en tu navegador:

```
http://localhost:5173/
```

---

# 🏷️ Commits realizados en EV08

✔ `chore: organización inicial del proyecto para integración de eventos`  
✔ `feat: creación de componente ToggleHabilidades con renderizado condicional`  
✔ `feat: implementación de useState para mostrar/ocultar habilidades`  
✔ `feat: creación de componente FormularioTecnologia con inputs controlados`  
✔ `feat: función agregarTecnologia en App.jsx y paso como prop`  
✔ `feat: renderizado dinámico de tecnologías desde estado`  
✔ `docs: actualización del README con descripción de eventos y estados`

---

# 📝 Autoevaluación — EV08
1. ¿Qué ventaja ofrece mantener el estado en App.jsx al manejar datos globales del CV?

Mantener el estado en App.jsx permite que los datos sean globales y compartidos entre múltiples componentes.
De esta forma:

Todos los componentes reciben la información a través de props.

Se evita duplicar datos o tener varios estados diferentes para lo mismo.

Se mantiene un flujo de datos unidireccional, que es la forma correcta de trabajar en React.

Los componentes hijos quedan más limpios, simples y reutilizables.

En otras palabras: App.jsx actúa como el cerebro central del CV.

2. ¿Cómo evitaste que el formulario recargara la página?

Usé el método e.preventDefault() dentro del evento onSubmit:

const handleSubmit = (e) => {
  e.preventDefault();
  ...
};


Esto evita el comportamiento por defecto del formulario:
✔ recargar la página
✔ perder el estado
✔ reiniciar la app

Así, el formulario trabaja completamente dentro de React.

3. ¿Qué función cumple setTecnologias([...prev, nueva]) frente a push()?

push() modifica el arreglo original, lo cual va contra las reglas de React porque:

❌ React NO detecta cambios si se muta el estado directamente
❌ push() altera el array base
❌ puede generar errores y comportamientos inesperados

En cambio:

setTecnologias([...prev, nueva])


✔ Crea un nuevo arreglo
✔ Mantiene el estado inmutable
✔ Permite que React detecte el cambio y vuelva a renderizar
✔ Es la forma recomendada en hooks

Por eso React exige inmutabilidad y no mutar arrays con .push().

4. ¿Cómo podrías adaptar FormularioTecnologia para otros datos como idiomas o proyectos?

Podría reutilizar el mismo formulario cambiando:

El placeholder

El estado interno (setValor)

La función de callback enviada desde App.jsx (ej. agregarIdioma() o agregarProyecto())

Incluso podría convertirlo en un formulario genérico usando props:

<Formulario valor={idioma} manejarCambio={setIdioma} onSubmit={agregarIdioma} />


En resumen:
el diseño ya es reutilizable, solo necesito cambiar el estado y la función que maneja los nuevos datos.

5. ¿Cómo se vería afectado tu código si manejaras el estado directamente en el componente hijo?

Si el estado estuviera en el hijo:

App.jsx perdería el control del CV.

No podrías compartir datos entre secciones.

Habría duplicación de estados.

Sería más difícil mantener o escalar el proyecto.

No podrías actualizar el stack desde múltiples componentes.

Romperías el flujo unidireccional de React.

En resumen:

❌ cada hijo tendría su propia "versión" de los datos
❌ el CV dejaría de ser dinámico
✔ por eso React recomienda manejar el estado en el padre común, que en este caso es App.jsx.
