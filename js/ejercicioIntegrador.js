console.log("========================================");
console.log("BIENVENIDO AL ENTRENAMIENTO DE POKEMON");
console.log("========================================");

var pokemons = []; // Arreglo dinámico para almacenar Pokémon
let cierre = true;

while (cierre) {
  let opcion = prompt(
    "========================================\n" +
      "Ingrese el número de operación a realizar.\n" +
      "========================================\n" +
      "1.-Crear Pokemon.\n" +
      "========================================\n" +
      "2.-Entrenar Pokemon.\n" +
      "========================================\n" +
      "3.-Mostrar todos los Pokemon.\n" +
      "========================================\n" +
      "4.-Salir.\n" +
      "========================================"
  );

  console.log("Opción seleccionada: " + opcion);

  switch (opcion) {
    case "1":
      let nombrePokemon = prompt("Ingrese el nombre del Pokémon nuevo:");
      let habilidad = prompt("Ingrese habilidad de " + nombrePokemon + ":");
      let puntaje = prompt("Ingrese puntaje:");
      crearPokemon(nombrePokemon, habilidad, puntaje);
      console.log(
        "Pokémon creado: " +
          nombrePokemon +
          " | Habilidad: " +
          habilidad +
          " | Puntaje: " +
          puntaje
      );
      break;

    case "2":
      entrenarPokemon();
      break;

    case "3":
      listarPokemon();
      break;

    case "4":
      cierre = false;
      console.log("Hasta pronto, un gusto atenderte.");
      break;

    default:
      console.log("No es una operación válida, ingrese 1, 2, 3 o 4.");
      break;
  }
}

function crearPokemon(nombrePokemon, habilidad, puntaje) {
  pokemons.push([nombrePokemon, habilidad, puntaje]);
}

function listarPokemon() {
  if (pokemons.length === 0) {
    console.log("No hay Pokémon en la lista.");
  } else {
    console.log("Lista de Pokémon:");
    for (let i = 0; i < pokemons.length; i++) {
      console.log(
        `${i + 1}. Nombre: ${pokemons[i][0]} | Habilidad: ${
          pokemons[i][1]
        } | Puntaje: ${pokemons[i][2]}`
      );
    }
  }
}

function entrenarPokemon() {
  if (pokemons.length === 0) {
    alert("No hay Pokémon para entrenar.");
    return;
  }

  let nombre = prompt("Ingrese el nombre del Pokémon que desea entrenar:");
  let encontrado = false;

  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i][0].toLowerCase() === nombre.toLowerCase()) {
      let aumento = parseInt(
        prompt("Ingrese el aumento de puntaje para " + pokemons[i][0] + ":")
      );
      if (isNaN(aumento) || aumento < 0) {
        alert("Puntaje inválido. Debe ser un número positivo.");
      } else {
        pokemons[i][2] = parseInt(pokemons[i][2]) + aumento; // Suma al puntaje actual
        alert(
          "¡" +
            pokemons[i][0] +
            " ha sido entrenado! Nuevo puntaje: " +
            pokemons[i][2]
        );
        console.log(
          "Pokémon entrenado: " +
            pokemons[i][0] +
            " | Habilidad: " +
            pokemons[i][1] +
            " | Nuevo puntaje: " +
            pokemons[i][2]
        );
      }
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    alert("Pokémon " + nombre + " no encontrado.");
  }
}

function editarPokemon() {
  if (pokemons.length === 0) {
    alert("No hay Pokémon para editar.");
    return;
  }

  let nombre = prompt("Ingrese el nombre del Pokémon que desea editar:");
  let encontrado = false;

  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i][0].toLowerCase() === nombre.toLowerCase()) {
      let nuevoNombre =
        prompt(
          "Ingrese el nuevo nombre para " +
            pokemons[i][0] +
            " (o presione Enter para mantenerlo):"
        ) || pokemons[i][0];
      let nuevaHabilidad =
        prompt(
          "Ingrese la nueva habilidad para " +
            pokemons[i][0] +
            " (o presione Enter para mantenerla):"
        ) || pokemons[i][1];
      let nuevoPuntaje =
        prompt(
          "Ingrese el nuevo puntaje para " +
            pokemons[i][0] +
            " (o presione Enter para mantenerlo):"
        ) || pokemons[i][2];

      // Validar que el puntaje sea un número válido
      if (isNaN(nuevoPuntaje) || nuevoPuntaje < 0) {
        alert("Puntaje inválido. Se mantendrá el anterior.");
        nuevoPuntaje = pokemons[i][2];
      }

      // Actualizar los valores
      pokemons[i][0] = nuevoNombre;
      pokemons[i][1] = nuevaHabilidad;
      pokemons[i][2] = nuevoPuntaje;

      alert(
        "Pokémon actualizado: " +
          pokemons[i][0] +
          " | Habilidad: " +
          pokemons[i][1] +
          " | Puntaje: " +
          pokemons[i][2]
      );
      console.log(
        "Pokémon editado: " +
          pokemons[i][0] +
          " | Habilidad: " +
          pokemons[i][1] +
          " | Puntaje: " +
          pokemons[i][2]
      );
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    alert("Pokémon " + nombre + " no encontrado.");
  }
}
