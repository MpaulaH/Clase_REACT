import inquirer from "inquirer";

const tareas = [];

async function main() {
  while (true) {
    const { nuevaTarea } = await inquirer.prompt([
      {
        type: "input",
        name: "nuevaTarea",
        message: "Ingrese una nueva tarea (o 'salir' para terminar):",
      },
    ]);

    if (nuevaTarea.toLowerCase() === "salir") {
      console.log("¡Hasta luego!");
      break;
    }

    tareas.push(nuevaTarea);

    console.log("\nLista de tareas:");
    tareas.forEach((tarea, index) => {
      console.log(`${index + 1}. ${tarea}`);
    });
    console.log("");
  }
}

main();
