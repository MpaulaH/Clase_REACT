# 💼 Proyecto: Hoja de Vida con React

Este proyecto es una Hoja de Vida (CV) desarrollada en **React con Vite**, como parte de las actividades del programa ADSO.  
Incluye componentes reutilizables, renderizado dinámico, props, desestructuración, listas, estilos condicionales y organización modular del código.

El objetivo es crear una **Hoja de Vida digital interactiva** compuesta por varios **componentes funcionales en React**, aplicando buenas prácticas de modularidad y diseño.

---

## 👩‍💻 Autora

**María Paula Herrera Rivas**  
📧 *[mariapaulaherrerarivas@gmail.com]*  
📍 Colombia  
🗓️ *Noviembre de 2025*

---

### 🧩 Estructura del proyecto

El proyecto fue desarrollado con **React + Vite** y cuenta con los siguientes componentes principales:

| Componente | Descripción |
|-------------|-------------|
| `CabeceraCV.jsx` | Contiene la foto personal, nombre y datos básicos. |
| `Perfil.jsx` | Presenta el perfil profesional y habilidades clave. |
| `Experiencia.jsx` | Muestra la experiencia laboral y proyectos relevantes. |
| `Educacion.jsx` | Detalla la formación académica y cursos complementarios. |
| `App.jsx` | Componente principal que integra todos los anteriores. |

---
#### 📌 EV07 —  Props y desestructuración con una hoja de vida dinámica

El CV está dividido en componentes independientes:

### ✔ CabeceraCV  
Recibe por **props**: nombre, cargo, ciudad, contacto.

### ✔ Perfil  
Recibe por **props** un resumen profesional.

### ✔ Experiencia  
Renderiza una **lista dinámica** de experiencias laborales usando `.map()`.

### ✔ Educación  
Renderiza una lista de estudios usando `.map()` y props.

### ✔ StackTecnologías  
Renderizado condicional y dinámico de tecnologías con etiquetas de colores.

Todos los datos se administran desde **App.jsx** usando constantes y se envían a los componentes mediante **props** con desestructuración.

---
##### 📚 Uso de Props y Desestructuración (EV07)

Este proyecto implementa:

- Envío de datos mediante **props** desde App.jsx
- Desestructuración en cada componente:
  ```jsx
  function CabeceraCV({ nombre, cargo, ciudad, contacto }) { ... }
  ```
- Listas dinámicas usando `.map()`
- Componentes totalmente reutilizables
- Separación de responsabilidades y código limpio

---

###### 🏷️ Commits realizados

✔ `refactor: extracción de datos personales en App.jsx`  
✔ `feat: componente CabeceraCV ahora recibe props`  
✔ `feat: desestructuración de props en CabeceraCV`  
✔ `feat: componente Perfil dinámico con props`  
✔ `feat: Experiencia mapeada desde arreglo en App.jsx`  
✔ `feat: componente Educación con props y desestructuración`  
✔ `docs: actualización del README con explicación del uso de props`



###### 🖼️ Captura de pantalla del resultado

> Vista previa del CV ejecutándose en el navegador:
![alt text](/Actividad_react_vite/src/componentes/imagenes/8.HV.png)
![alt text](/Actividad_react_vite/src/componentes/imagenes/9.HV.png)
![alt text](/Actividad_react_vite/src/componentes/imagenes/10.HV.png)

---

###### ⚙️ Instrucciones para ejecutar el proyecto

Para ejecutar correctamente la aplicación de la hoja de vida, sigue estos pasos desde tu terminal:
# 🔹 1. Clonar el repositorio
Clona el proyecto desde GitHub en tu equipo local:
git clone https://github.com/MpaulaH/Clase_REACT.git

# 🔹 2. Acceder al proyecto React
Ingresa a la carpeta del proyecto donde está el código React:

cd Clase_REACT/Actividad_react_vite
# 🔹 3. Instalar las dependencias
Instala los módulos necesarios para que el proyecto funcione:

npm install
# 🔹 4. Ejecutar el proyecto en modo desarrollo
Ejecuta el comando:

npm run dev
Luego, espera a que se muestre un mensaje similar a:

VITE v5.0  ready in 500 ms
➜  Local:   http://localhost:5173/

# 🔹 5. Abrir el proyecto en el navegador
Copia o haz clic en el enlace (normalmente http://localhost:5173)
para ver tu hoja de vida ejecutándose.

---

###### 🚀 Tecnologías utilizadas

- React  
- Vite  
- JavaScript (ES6+)  
- CSS  
- Git + GitHub  
