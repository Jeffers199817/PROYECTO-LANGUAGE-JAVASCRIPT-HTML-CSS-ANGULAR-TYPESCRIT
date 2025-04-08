// Arreglo para almacenar las tareas en memoria
let tareas = [];

document
  .getElementById("tareaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Captura el valor del input
    let tareaInput = document.getElementById("opcion");
    let tareaTexto = tareaInput.value.trim();

    if (tareaTexto !== "") {
      // Agrega la tarea al arreglo
      tareas.push(tareaTexto);
      // Actualiza la lista en la página
      mostrarTareas();
      // Limpia el input
      tareaInput.value = "";
    } else {
      alert("Por favor, ingrese una tarea válida.");
    }
  });

function mostrarTareas() {
  let listaTareas = document.getElementById("listaTareas");
  listaTareas.innerHTML = ""; // Limpia la lista actual

  tareas.forEach((tarea, index) => {
    // Crea un contenedor para cada tarea
    let tareaDiv = document.createElement("div");
    tareaDiv.className = "tarea-item";

    // Crea el texto de la tarea
    let tareaTexto = document.createElement("span");
    tareaTexto.textContent = tarea;

    // Crea el botón de eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "eliminar-btn";
    botonEliminar.onclick = function () {
      eliminarTarea(index);
    };

    // Añade el texto y el botón al contenedor
    tareaDiv.appendChild(tareaTexto);
    tareaDiv.appendChild(botonEliminar);

    // Añade el contenedor a la lista
    listaTareas.appendChild(tareaDiv);
  });
}

function eliminarTarea(index) {
  // Elimina la tarea del arreglo
  tareas.splice(index, 1);
  // Actualiza la lista en la página
  mostrarTareas();
}
